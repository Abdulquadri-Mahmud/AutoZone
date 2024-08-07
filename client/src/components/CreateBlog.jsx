import { Box, Button, Flex, Heading, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import AdminThemes from './AdminThemes'
import { FaHome } from 'react-icons/fa'
import { MdAddPhotoAlternate } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from '@chakra-ui/react'

export default function CreateBlog() {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = useRef()

  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [files, setFile] = useState([]);
  const [filesError, setFilesError] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(false);
  const [success, setSuccess] = useState(false);
  const [blogData, setBlogData] = useState({
    imageUrl: [],
    title: '',
    postedBy: 'admin',
    body: ''
  });

  let navigate = useNavigate();
  let title = useRef();
  let body = useRef();
  let date = useRef();

  const fileRef = useRef();

  console.log(files);
  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.id] : e.target.value
    });
  };

  const handleImagesUpload = (e) => {
    console.log('click');
    // checking if there is existing image and if images files ia greater than 3
    if (files.length > 0 && files.length + blogData.imageUrl.length < 4) {
      setUploadProgress(true);
      setFilesError(false);

      const storeImages = [];
      for (let i = 0; i < files.length; i++) {
        storeImages.push(getAllImagesUrls(files[i]));
      }
      // waiting for all the image to be stored inside the storeImages array
      Promise.all(storeImages).then((urls) => {
        // keeping the previous image and adding new images with concat method
        setBlogData({...blogData, imageUrl: blogData.imageUrl.concat(urls)})
        setFilesError(false);
        setUploadProgress(false);

      }).catch((error) => {
        setFilesError('Failed to upload Image (2mb max per image)');
        setUploadProgress(false);
      });

    }else{
      setFilesError('You can only upload 3 images per blog');
      setUploadProgress(false);
    }
  }

  const getAllImagesUrls = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);

      const fileName = new Date().getTime() + file.name;

      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed',(snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);
      },
        (error) => {
          reject(error);
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
            resolve(downloadURL)
          })}
      )
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkTitle = title.current.value === '';
    const checkBody = body.current.value === '';
    const checkDate = date.current.value === '';
    // const fileRef = fileRef.current.value === '';

    try {
      setLoading(true);

      if (checkTitle) {
        setError('Title is required!');
        return;
      }
      if (checkBody) {
        setError('Body is required!');
        return;
      }
      if (checkDate) {
        setError('Date is required!');
        return;
      }
      // if (fileRef) {
      //   setError('You must upload 1 image!');
      //   return;
      // }
      const url = `/api/blogs/postBlog`;

      const res = await fetch(url, {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(blogData)
      });
  
      const data = await res.json();

      if (data.success === false) {
        setError(data.message);
        setLoading(false);
        setSuccess(false);
        return;
      }
      setError(false);
      setLoading(false);
      setSuccess(true);

    } catch (error) {
      setError(true);
      setLoading(false);
      setSuccess(false);
    }
  }

  const handleRemoveImage = (index) => {
    setBlogData({...blogData,
      imageUrl: blogData.imageUrl.filter((_, i) => i !== index)
    })
  }

  console.log(blogData);

  return (
    <Box>
        <form onSubmit={handleSubmit} className='w-full'>
          <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={3} mx={5} my={'3rem'} rounded={5} bg={useColorModeValue('white','gray.700')} p={{md: 6, base: 3}}>

            {/* First part */}
            <Box w={{'2xl':'55%',md:'45%', base: '100%'}} color={useColorModeValue('black')}>
              <Box>
                <Box color={useColorModeValue('black', 'white')} bg={useColorModeValue('gray.200', 'gray.800')} borderBottomWidth={1} borderColor={useColorModeValue('green.500', '')} py={1} px={2} rounded={5}>
                  <input type="text" ref={title} onChange={handleChange} id="title" placeholder="Post title" name="title"  className='bg-transparent text-sm font-normal border-0 outline-none w-[100%] my-2 rounded-[0px]'/>
                </Box>
                <Box mt={3} color={useColorModeValue('black', 'white')} bg={useColorModeValue('gray.200', 'gray.800')} borderBottomWidth={1} borderColor={useColorModeValue('green.500', '')} py={1} px={2} rounded={5}>
                  <input type="date" ref={date} onChange={handleChange} id="date" placeholder="Select Date" className='bg-transparent border-0 text-sm font-normal outline-none w-[100%] my-2 rounded-[0px]'/>
                </Box>
              </Box>
              <Box my={3} bg={useColorModeValue('gray.200', 'gray.800')} borderBottomWidth={1} borderColor={useColorModeValue('green.500', '')} py={3} px={2} rounded={5}>
                <Box color={useColorModeValue('black')}>
                  <select onChange={handleChange} id="postedBy" className='w-full bg-transparent text-sm font-normal outline-none border-0 text-md rounded-md'>
                    <option value="admin" className='text-black'>Postes By</option>
                    <option value="admin" className='text-black'>Admin</option>
                  </select>
                </Box>
              </Box>
              <Box>
                <Box color={useColorModeValue('black', 'white')} bg={useColorModeValue('gray.200', 'gray.800')} borderBottomWidth={1} borderColor={useColorModeValue('green.500', '')} py={1} px={2} rounded={5}>
                  <textarea type="text" ref={body} onChange={handleChange} id="body" placeholder="Blog body" name="body"  className='bg-transparent text-sm border-0 outline-none font-normal w-[100%] my-2 rounded-[0px] h-[150px]'></textarea>
                </Box>
              </Box>
                {
                  error ? (
                     <Alert status='error' mt={2} rounded={5}>
                        <AlertIcon />
                        <AlertDescription>{error && error}</AlertDescription>
                      </Alert>
                  ) : ''
                }

              {
                success ? (
                  <>
                    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                      <AlertDialogOverlay>
                        <AlertDialogContent>
                          <AlertDialogBody fontWeight={500}>
                            Blog Posted Successfully
                          </AlertDialogBody>
                          <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose} bg={useColorModeValue('green.500','gray.700')} color={'white'}>
                              Ok
                            </Button>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialogOverlay>
                    </AlertDialog>
                  </>
                ) : ''
              }

            </Box>
          {/* Second part */}
            <Box w={{md:'350px', base: '350px'}}>
                <Text color={useColorModeValue('black', 'gray.400')} pb={2} textAlign={'center'}><strong className='text-green-500'>Image: </strong><span className="font-normal">The first image will be the cover (max 6)</span></Text>
                
                <Flex position={'relative'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'200px'} rounded={5} bg={useColorModeValue('green.500', 'gray.800')}>
                  <input type="file" onChange={(e) => setFile(e.target.files)} 
                  ref={fileRef} className='outline-none border-0 hidden' 
                  id='imageUrl' accept='image/*' multiple/>
                  
                  <Box position={'absolute'}  onClick={() => fileRef.current.click()} cursor={'pointer'} color={useColorModeValue('white', 'gray.100')}>
                    <MdAddPhotoAlternate className='text-3xl'/>
                  </Box>

                  <Box p={3}>
                    <Image maxW={'100%'} height={'180px'} rounded={5} src={blogData.imageUrl[0]}/>
                  </Box>
                </Flex>
                {
                  filesError ? (
                    <Alert status='error' mt={2} rounded={5}>
                      <AlertIcon />
                      <AlertDescription>{filesError && filesError}</AlertDescription>
                    </Alert>
                  ) : ''
                }
                <Box>
                  {
                    blogData.imageUrl.length > 0 && blogData.imageUrl.map((url, index) => (
                      <Flex key={index} justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={2} bg={useColorModeValue('green.500', 'gray.800')} py={3} px={2} rounded={5}>
                        <Box borderWidth={2} borderColor={'white'} rounded={5}>
                          <Image src={url} maxW={'100px'} rounded={5}/>
                        </Box>
                        <Box>
                          <Button onClick={() => handleRemoveImage(index)} fontSize={14} bg={useColorModeValue('white', 'gray.700')} rounded={3} color={'red.500'}>Delete</Button>
                        </Box>
                      </Flex>
                    ))
                  }
                </Box>
                <Flex mt={3} justifyContent={'center'}>
                  <Button type='button' disabled={uploadProgress} onClick={handleImagesUpload} bg={useColorModeValue('green.500', 'gray.800')} fontWeight={400} color={useColorModeValue('white', 'white')} _hover={{bg: useColorModeValue('green.400')}} rounded={3}>
                    {
                      uploadProgress ? 'Uploading' : 'Upload Image'
                    }
                  </Button>
                </Flex>
              </Box>

              <Flex justifyContent={'center'} mt={4}>
                <Button bg={useColorModeValue('green.500','gray.800')} fontSize={16} width={'200px'} rounded={3} py={6} onClick={onOpen} color={useColorModeValue('white', 'white')} _hover={{bg: useColorModeValue('green.400')}} fontWeight={500} type='submit' className='w-[100px] py-2 rounded-[0px] uppercase'>Post Blog</Button>
              </Flex>
          </Flex>
        </form>
    </Box>
  )
}