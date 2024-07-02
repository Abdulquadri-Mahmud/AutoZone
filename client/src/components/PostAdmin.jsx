import { Alert, AlertIcon, Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { 
    adminSignInFailure, 
    adminSignInStart, 
    adminSignInSuccess 
} from '../redux/user/adminReducer';

import wavy from '/wave.png';

export default function PostAdmin() {
    const { loading, error } = useSelector((state) => state.admin);

    const [formData, setFormData] = useState({});

    let email = useRef(null);
    let password = useRef(null);
    const lockPassword = useRef(null);

    const dispatch = useDispatch();

    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        const ifPassword = password.current.value === '';
        const ifEmail = email.current.value === '';

        try {
            dispatch(adminSignInStart());

            if (ifEmail) {
                dispatch(adminSignInFailure('Email is required!'))
                return;
            }
            if (ifPassword) {
                dispatch(adminSignInFailure('Password is required!'))
                return;
            }
            
            const url = '/api/adminauth/adminsignin';

            const res = await fetch(url, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(formData)
            });
            
            const data =  await res.json()

            if (data.success === false) {
                dispatch(adminSignInFailure(data.message));
                return;
            }

            dispatch(adminSignInSuccess(data));
            navigate('/');
            
        } catch (error) {
            // setError(error);
            dispatch(adminSignInFailure(error));
        }
    }
    
    const handleLockPassword = () => {
        const passwordType = password.current.type;
        const lockPasswordType = lockPassword.current;

        if (passwordType === 'password') {
            password.current.type = 'text';
            if (password.current.type === 'password') {
                lockPasswordType.innerHTML = `
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>             
                `;
            }
        }
        if (passwordType === 'text') {
            password.current.type = 'password';
            if (password.current.type === 'password') {
                lockPasswordType.innerHTML = `
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
            </svg>          
                `;
            }
        }
    }
  return (
    <Box my={'5rem'} width={'350px'} mx={'auto'} bgImage={wavy} height={'100%'} bgRepeat={'no-repeat'} bgSize={'250%'} bgPos={'bottom'} mt={'3rem'} padding={3} rounded={10} className='shadow-xl'>
        <form onSubmit={handleSubmit}>
            <Box mt={3}>
                <Heading textAlign={'center'} fontSize={30} color={useColorModeValue('black', 'white')}>Admin Log In</Heading>
                <Text color={'gray.500'} fontSize={14} textAlign={'center'} mt={1}>Please enter your details</Text>
            </Box>
            <Box mt={4}>
                <Box _focus={{bg: useColorModeValue('', 'black')}} color={useColorModeValue('black', 'black')}>
                    <label className='text-base text-white font-semibold'>Email:</label>
                    <input onChange={handleChange} id='email' ref={email} type="text" className='w-full mt-2 rounded-md font-medium p-3 border-none outline-none bg-slate-200' placeholder='Example@gmail.com'/>
                </Box>
                <Box mt={1} position={'relative'} _focus={{bg: useColorModeValue('', 'black')}} color={useColorModeValue('black', 'black')}>
                    <label className='text-base text-white font-semibold'>Password:</label>
                    <input onChange={handleChange} id='password' ref={password} type="password" className='w-full mt-2 rounded-md font-medium p-3 border-none outline-none bg-slate-200' placeholder='Enter password'/>
                    <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={handleLockPassword} ref={lockPassword} position={'absolute'} top={9} right={0} cursor={'pointer'}><FaEyeSlash/></Button>
                </Box>
            </Box>
            <Box mt={2} color={'red.500'} className='font-semibold'>
                {
                    error ? (
                        <Alert status='error' borderRadius={5}>
                        <AlertIcon/>
                            {error}
                        </Alert>
                    ) : ''
                }
            </Box>
            <Flex justifyContent={'space-between'} alignItems={'center'} mt={4} color={'white'}>
                <Flex alignItems={'center'} gap={1}>
                    <input type="checkbox" className='border-none outline-none checked:bg-red-500 h-5 w-5 bg-gray-100'/>
                    <span className='font-semibold'>Remember me</span>
                </Flex>
                <Box>
                    <Link to='/forgot-password'>
                        <Text className='font-semibold'>Forgot Password</Text>
                    </Link>
                </Box>
            </Flex>
            <Flex justifyContent={'center'} mt={5}>
                <Button type='submit' width={'full'} bg={'white'} className='uppercase font-semibold'>
                    {
                        loading ? 'Loading...' : 'Log In'
                    }
                </Button>
            </Flex>
        </form>
    </Box>
  )
}
