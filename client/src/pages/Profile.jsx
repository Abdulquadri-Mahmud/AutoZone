import React, { useRef, useState } from 'react';
import { Alert, AlertIcon, Box, Button, Flex, Heading, Image, Spinner, Text, useColorModeValue } from  '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { FaEyeSlash } from 'react-icons/fa';
import { deleteFailure, deleteStart, deleteSuccess, signOutUserFailure, signOutUserStart, signOutUserSuccess, updateFailure, updateStart, updateSuccess } from '../redux/user/userReducer';
import { useNavigate } from 'react-router-dom';


export default function Profile() {
  const {currentUser, loading, error} = useSelector((state) => state.user);

  const [ formData, setFormData] = useState({});

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const password = useRef(null);
  const lockPassword = useRef(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id] : e.target.value,
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(updateStart());

      const fetchUrl = `/api/user/updateUser/${currentUser._id}`;

      const res = await fetch(fetchUrl, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {'Content-Type' : 'application/json'},
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(updateFailure(data.message));
        console.log(data.message);
        return;
      }
      
      setTimeout(() => {
        dispatch(updateSuccess(data));
        // navigate('/')
      }, 1000);

    } catch (error) {
      dispatch(updateFailure(error));
    }

  }

  const handleDelete = async () => {
    try {
      dispatch(deleteStart());
      const fetchUrl = `/api/user/deleteUser/${currentUser._id}`;
      
      const res = await fetch(fetchUrl, {
        method: 'DELETE'
      });

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteFailure(data.message));
        return;
      }

      dispatch(deleteSuccess(data));
      navigate('/signup');

    } catch (error) {
      dispatch(deleteFailure(error.message))
    }
  }
  const handleSignout = async () => {
    try {
      dispatch(signOutUserStart());

      const fetchUrl = `/api/auth/signout`;
  
      const res = await fetch(fetchUrl);
  
      const data = await res.json();
  
      if (data.success === false) {
        dispatch(signOutUserFailure(data.message));
        return;
      }
      dispatch(signOutUserSuccess(data));
      navigate('/signin');

    } catch (error) {
      dispatch(signOutUserFailure(error.message));
    }

  }

  const handleLockPassword = () => {
    let getInputType = password.current.type;
    let getLockPassword = lockPassword.current

    if(getInputType === 'password'){
      password.current.type = 'text';
      if (password.current.type === 'text') {
          getLockPassword.innerHTML = `
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
              </svg>              
          `;
      }
    }
    // checking if the input type is text
    if (getInputType === 'text') {
      // if true then we're changing it back to password
      password.current.type = 'password';
      // now checkingif the current type is password
      if (password.current.type === 'password') {
          // if true then change the lock button to close eye
          getLockPassword.innerHTML = `
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
              </svg>
          `;
      }
    }
  }

  return (
    <Box position={''} width={'100%'}>
      <Box maxW={{md: '50%', base: '97%'}} mx={'auto'} bg={useColorModeValue('blue.500', 'gray.700')} padding={5}
      my={'5rem'} rounded={10}>
        <Box>
          <Heading color={useColorModeValue('white', 'white')} fontWeight={500} fontSize={30} textAlign={'center'}>My Profile</Heading>
        </Box>
        <Box width={'100%'} mt={4} bg={useColorModeValue('white', 'gray.800')} padding={3} rounded={5}>
          <form onSubmit={handleSubmit}>
            <Flex justifyContent={'center'} alignItems={'center'}>
              <Box width={'150px'} bg={useColorModeValue('blue.500', 'white')} padding={1} rounded={'full'}>
                <input type="file" className='hidden'/>
                <Image  src={formData.avatar || currentUser.avatar} objectFit={'contain'} maxW={'100%'}/>
              </Box>
            </Flex>
            <Box my={4} fontWeight={500}>
                <Box mt={2}>
                    <input type="username" id='username' name='username' onChange={handleChange} defaultValue={currentUser.username} className='focus:border-gray-300 w-full rounded-[5px] p-2 border-gray-600 font-medium' placeholder='Enter Username'/>
                </Box>
            </Box>
            <Box my={4} fontWeight={500}>
                <Box mt={2}>
                    <input type="email" id='email' name='email' onChange={handleChange} defaultValue={currentUser.email} className='focus:border-gray-300 w-full rounded-[5px] p-2 border-gray-600 font-medium' placeholder='Enter Email'/>
                </Box>
            </Box>
            <Box my={4} fontWeight={500}>
                <Box mt={1} position={'relative'}>
                    <input type="password" id='password' name='password' ref={password} onChange={handleChange} className='focus:border-gray-300 w-full rounded-[5px] p-2 border-gray-600 font-medium' placeholder='Enter Password'/>
                    <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={handleLockPassword} ref={lockPassword} position={'absolute'} top={1} right={0}><FaEyeSlash/></Button>
                </Box>
            </Box>
                {
                    error && (
                        <Alert status='error' borderRadius={5} fontWeight={500}>
                            <AlertIcon/>
                            {error}
                        </Alert>
                    )
                }
            <Flex justifyContent={'center'} mt={8}>
              <Button width={'200px'} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('#fff')}
                _hover={{bg:useColorModeValue('green.600', 'gray.700')}} type='submit' className='uppercase'>
                  {
                    loading ? <Flex gap={3}>Loading... 
                            <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.700' size='md'/>
                        </Flex> : 'Update Now'
                  }
              </Button>
            </Flex>
          </form>
          <Flex justifyContent={'space-between'} flexWrap={'wrap'} alignItems={'center'} mt={5}>
            <Box>
              <Button bg={useColorModeValue('red.700', 'gray.700')} width={'150px'}
                _hover={{bg:useColorModeValue('red.600', 'gray.700')}} color={useColorModeValue('white', 'white')} className='uppercase' onClick={handleSignout}>
                  signout
              </Button>
            </Box>
            <Box mt={4}> 
              <Button bg={useColorModeValue('red.700', 'gray.700')} width={'150px'}
              _hover={{bg:useColorModeValue('red.600', 'gray.700')}} color={useColorModeValue('white', 'white')} className='uppercase' onClick={handleDelete}>
                delete Account
              </Button>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
