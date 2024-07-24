import React, { useEffect, useRef, useState } from 'react';
import {Box, Button, Flex, Heading,Text, useColorModeValue } from '@chakra-ui/react';
import { app } from '../firebase';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
import { MdAddPhotoAlternate } from "react-icons/md";

export default function CreateBlog() {
  const [ file, setFile] = useState(undefined);
  const [ fileError, setFileError ] = useState(false);
  const [filePercentage, setFilePercentage ] = useState(0);
  const [formData, setFormData] = useState({});

  let navigate = useNavigate();

  const fileRef = useRef(null);

  useEffect(() => {
    if (file) {
      handleUploadFile(file);
    }
  }, [file]);
  
  // handle uplaod file
  const handleUploadFile = (file) => {
    // getting all firebase methods needed
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePercentage(Math.round(progress));
      console.log(Math.round(progress));
    },(error) => {
      setFileError(true);
      console.log(error);
    },
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setFormData({...formData, imageUrl: downloadURL});
      })
    }
    )
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    });
  }
  console.log(formData);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/blogs/postBlog', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      
      if (data.success === false) {
        console.error(error.message);
      }

      navigate('/blogs');

    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Box maxW={{md:'350px', base: '350px'}} mx={{md:'auto', base: 'auto'}} my={'3rem'} rounded={5} bg={useColorModeValue('blue.500','gray.700')} className='shadow-md p-2'>
        <form className='flex justify-between font-medium items-center flex-wrap gap-2' onSubmit={handleSubmit}>
          <Flex justifyContent={'center'} alignItems={'center'} flexDir={'column'} width={'100%'}>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} ref={fileRef} className='hidden'/>
              <Flex justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.200','gray.800')} height={'110px'} width={'110px'} rounded={'full'} position={'relative'}>
                <Box position={'absolute'} top={'50%'} right={'20%'} className='translate-x-[-50%] translate-y-[-50%]'>
                  <MdAddPhotoAlternate color='blue.500' onClick={() => fileRef.current.click()} cursor={'pointer'} fontSize={30}/>
                </Box>
                <img src={formData.imageUrl} className='w-[100px] h-[100px] rounded-full'/>
              </Flex>
              <Box mt={0} color={useColorModeValue('white')}>
                <Text fontWeight={500}>Status: 
                  {
                    fileError ? (<span>Error while uploading image</span>) :
                    filePercentage > 0 && filePercentage < 100 ? (<span>{`Uploading is ${filePercentage}% done`}</span>) : 
                    filePercentage === 100 ? (<span>Uploaded</span>) : ''
                  }
                </Text>
              </Box>
            </Flex>
            <Box width={'100%'} color={useColorModeValue('white')}>
              <Box>
                {/* <label htmlFor="title">Blog title: </label><br/> */}
                <Box color={useColorModeValue('black')}>
                  <input type="text" onChange={handleChange} id="title" placeholder="Blog title" name="title"  className='bg-gray-200 border-0 outline-none p-3 w-[100%] my-2 rounded-[5px]'/>
                </Box>
              </Box>
              <Box>
                {/* <label htmlFor="snippet">Blog snippet: </label><br/> */}
                <Box color={useColorModeValue('black')}>
                  <input type="text" onChange={handleChange} id="snippet" placeholder="Blog snippet" name="snippet"  className='bg-gray-200 border-0 outline-none p-3 w-[100%] my-2 rounded-[5px]'/>
                </Box>
              </Box>
              <Box>
                  {/* <label htmlFor="body">Blog body: </label><br/> */}
                  <Box color={useColorModeValue('black')}ox>
                    <textarea type="text" onChange={handleChange} id="body" placeholder="Blog body" name="body"  className='bg-gray-200 border-0 outline-none p-2 w-[100%] my-2 rounded-[5px] h-[150px]'></textarea>
                  </Box>
              </Box>
              <Flex justifyContent={'center'}>
                <Button bg={useColorModeValue('gray.200','gray.800')} type='submit' className='w-[100px] py-2 rounded-[5px] text-white'>Submit</Button>
              </Flex>
            </Box>
        </form>
      </Box> 
    </>
  )
}
