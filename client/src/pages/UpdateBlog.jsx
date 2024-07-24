import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { MdAddPhotoAlternate } from "react-icons/md";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function UpdateBlog() {
    const { blogID } = useParams();
    const [blog, setBlog] = useState({});
    const [ updateData, setUpdateData ] = useState({});
    const [ fileError, setFileError ] = useState(false);
    const [ file, setFile] = useState(undefined);
    const [filePercentage, setFilePercentage ] = useState(0);
    
    const fileRef = useRef(null);
    const navigate = useNavigate()

    const handleChange = (e) => {
      setUpdateData({
        ...updateData,
        [e.target.id] : e.target.value
      });
    }

    useEffect(() => {
      if (file) {
        handleUploadFile(file)
      }
    }, [file]);
    
    const handleUploadFile = (file) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.rounnd(progress));
      },
      (error) => {
        setFileError(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUpdateData({...updateData, imageUrl: downloadURL});
        })
        }
      )
    }

    console.log(updateData);
    useEffect(() => {
      const fetchBlog = async () => {

        try {
          const blogUrl = `/api/blogs/getSingleBlog/${blogID}`;

          const res = await fetch(blogUrl);

          const data = await res.json();

          console.log(data);
          setUpdateData(data);

        } catch (error) {
          console.log(error);
        }
      }

      fetchBlog();
    }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const blogId = `/api/blogs/updateBlog/${blogID}`;

      const res = await fetch(blogId, {
        method: 'PATCH',
        headers: {'Content-Type' : 'application/json'},
        body : JSON.stringify(updateData)
      });

      const data = await res.json();

      if (data.success === false) {
          console.error(error.message);
      }

      navigate('/');

    } catch (error) {
      console.error(error.message);
    }
  }
    // useEffect(()=> {

    // }, []);

  return (
    <Box>
      <Header/>
      <Box maxW={{md:'80%', base: '100%'}} mx={{md:'auto', base: '3'}} my={'5rem'} rounded={5} bg={useColorModeValue('blue.500','gray.700')} className='shadow-md p-7'>
          <Box color={useColorModeValue('white', 'white')}>
            <h1 className='text-center text-2xl'>Update Blog</h1>
          </Box>
        <form className='flex justify-between font-medium items-center flex-wrap gap-2' onSubmit={handleSubmit}>
            <Box width={{md: '55%', base: '100%'}} color={useColorModeValue('black', 'black')}>
              <Box className='my-3'>
                <label className='text-white' htmlFor="title">Blog title: </label><br/>
                <input type="text" onChange={handleChange} id="title" placeholder="Blog title" name="title" required className='bg-gray-200 border-0 outline-none p-2 w-[100%] my-2 rounded-[5px]' defaultValue={updateData.title}/>
              </Box>
              <Box className='my-3'>
                <label className='text-white' htmlFor="snippet">Blog snippet: </label><br/>
                <input type="text" onChange={handleChange} id="snippet" placeholder="Blog snippet" name="snippet" required className='bg-gray-200 border-0 outline-none p-2 w-[100%] my-2 rounded-[5px]' defaultValue={updateData.snippet}/>
              </Box>
              <Box className='my-3'>
                  <label className='text-white' htmlFor="body">Blog body: </label><br/>
                  <textarea type="text" onChange={handleChange} id="body" placeholder="Blog body" name="body" required className='bg-gray-200 border-0 outline-none p-2 w-[100%] my-2 rounded-[5px] h-[150px]' defaultValue={updateData.body}></textarea>
              </Box>
              <Button bg={useColorModeValue('gray.200','gray.800')} type='submit' className='w-[100px] py-2 rounded-[5px] text-white'>Update</Button>
            </Box>

            <Box width={{md: '40%', base: '100%'}} className="mt-5" position={'relative'}>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} ref={fileRef} className='hidden'/>
              <Box bg={useColorModeValue('white','gray.800')} height={'250px'} rounded={5}>
                <Flex flexDir={'column'} onClick={() => fileRef.current.click()} cursor={'pointer'} display={'flex'} justifyContent={'center'}
                alignItems={'center'} height={'150px'} width={'150px'} borderRadius={'full'}
                position={'absolute'} top={'-50px'} left={'50%'} bg={useColorModeValue('white','gray.800')} className='translate-x-[-50%] shadow-md'>
                  <Text color={useColorModeValue('black')}>Upload Image</Text>
                  <MdAddPhotoAlternate fontSize={30}/>
                </Flex>
                <img src={updateData.imageUrl} defaultValue={updateData.imageUrl} className='max-w-[100%] h-[250px] shadow-md rounded-md'/>
              </Box>
              <Box mt={4} color={useColorModeValue('white')}>
                <Text fontWeight={500}>Status: 
                  {
                    fileError ? (<span>Error while uploading image</span>) : 
                    filePercentage > 0 && filePercentage < 100 ? (<span>{`Uploading is ${filePercentage}% done`}</span>) : 
                    filePercentage === 100 ? (<span>Uploaded</span>) : ''
                  }
                </Text>
              </Box>
            </Box>
        </form>
      </Box>
      <Footer/>
    </Box>
  )
}
