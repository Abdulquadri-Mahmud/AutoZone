import React, { useRef, useState } from 'react'
import { Alert, AlertIcon, Box, Button, Flex, Heading, Image, Spinner, Text, useColorModeValue } from  '@chakra-ui/react';
import img from '../assets/img/2023-lucid-air.jpg';
import { Link, useNavigate } from 'react-router-dom';
import GoogleAuth from '../components/GoogleAuth';
import { FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { signinFailure, signinStart, signingSuccess } from '../redux/user/userReducer';

import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

import wavy from '/wave.png';
import Header from '../components/Header';

export default function Signin() {
    const [formData, setFormData] = useState({});
    const [success, setSuccess] = useState(false);

    let navigate = useNavigate()
    const email = useRef(null);
    const password = useRef(null);
    const lockPassword = useRef(null);
    const lockPassword2 = useRef(null)
    const confirmPassword = useRef(null);

    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.user);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id] : e.target.value,
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const getEmailValue = email.current.value === '';
        const getPasswordValue = password.current.value === '';

        // Confirm password if the same
        const checkPassword = password.current.value
        const checkConfirmPassword = confirmPassword.current.value;

        try {
            dispatch(signinStart());
            
            if (getEmailValue) {
                // setError('Email is required!');
                dispatch(signinFailure('Email is required!'));
                return;
            }
            if (getPasswordValue) {
                dispatch(signinFailure('Password is required!'));
                return;
            }
            // confirm password: if password and confirm password not match
            if(checkPassword !== checkConfirmPassword){
                dispatch(signinFailure('Password not matched!'));
                return;
            }

            const fetchUrl = `/api/auth/signin`;
    
            const res = await fetch(fetchUrl, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {'Content-Type' : 'application/json'}
            });
    
            const data = await res.json();
    
            if (data.success === false) {
                dispatch(signinFailure(data.message));
                return;
            }
            
            setTimeout(() => {
                dispatch(signingSuccess(data)); 

                navigate('/');
            }, 1000);

        } catch (error) {
            dispatch(signinFailure(error))
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

    const handleLockPassword2 = () => {
        const getConfirmPasswordInput = confirmPassword.current.type;
        const getConfirmPassword =  lockPassword2.current;
        
        if (getConfirmPasswordInput === 'password') {
            confirmPassword.current.type = 'text';
            if (confirmPassword.current.type === 'text') {
                getConfirmPassword.innerHTML = `
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"></path>
                </svg>    
                `
            }
        }
        if (getConfirmPasswordInput === 'text') {
            confirmPassword.current.type = 'password';
            if (confirmPassword.current.type === 'password') {
                getConfirmPassword.innerHTML = `
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"></path>
                </svg> 
                `
            }
        }
    }

  return (
    <>
        <Header/>
        <Box width={'350px'} mx={'auto'} bgImage={wavy} height={'100%'} bgRepeat={'no-repeat'} bgSize={'250%'} bgPos={'bottom'} mt={'3rem'} padding={3} rounded={10} className='shadow-xl'>
            <Box textAlign={'center'}>
                <Heading pt={4} color={useColorModeValue('black', 'white')} fontWeight={500} fontSize={27}>Good To See You!</Heading>
                <Text color={'gray.500'} mt={1} fontSize={14} className='font-semibold'>Let's continue the journey</Text>
            </Box>
            <form onSubmit={handleSubmit}>
                <Box my={4} fontWeight={500} position={'relative'}>
                    <Box mt={2} _focus={{bg: useColorModeValue('', 'black')}}>
                        <input type="email" id='email' ref={email} onChange={handleChange} className='w-full rounded-[5px] p-3 border-0 outline-none focus:bg-slate-200 focus:text-black font-medium pl-[3rem] bg-slate-200' placeholder='Enter Email'/>
                        <Button bg={'transparent'} _hover={{bg: 'transparent'}} position={'absolute'} top={1} left={0} color={useColorModeValue('black', 'black')}><MdEmail className='text-xl'/></Button>
                    </Box>
                </Box>
                <Box my={4} fontWeight={500}>
                    <Box position={'relative'}>
                        <input type="password" id='password' ref={password} onChange={handleChange} className='w-full rounded-[5px] p-3 border-0 outline-none focus:bg-slate-200 focus:text-black font-medium pl-[3rem] bg-slate-200' placeholder='Enter Password'/>
                        <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={handleLockPassword} ref={lockPassword} position={'absolute'} top={1} right={0}><FaEyeSlash/></Button>
                        <Button bg={'transparent'} _hover={{bg: 'transparent'}} position={'absolute'} top={1} left={0} color={useColorModeValue('black', 'black')}><RiLockPasswordFill className='text-xl'/></Button>
                    </Box>
                    <Box my={4} fontWeight={500}>
                        <Box position={'relative'}>
                            <input type="password" id='password' ref={confirmPassword} onChange={handleChange} className='w-full rounded-[5px] p-3 border-0 outline-none focus:bg-slate-200 focus:text-black font-medium pl-[3rem] bg-slate-200' placeholder='Confirm Password'/>
                            <Button bg={'transparent'} _hover={{bg: 'transparent'}} onClick={handleLockPassword2} ref={lockPassword2} position={'absolute'} top={1} right={0}><FaEyeSlash/></Button>
                            <Button bg={'transparent'} _hover={{bg: 'transparent'}} position={'absolute'} top={1} left={0} color={useColorModeValue('black', 'black')}><RiLockPasswordFill className='text-xl'/></Button>
                        </Box>
                    </Box>
                </Box>
                    <Box>
                        {
                            error ? (
                                <Alert status='error' borderRadius={5} fontWeight={500}>
                                    <AlertIcon/>
                                    {error}
                                </Alert>
                            ): ''
                        }
                    </Box>
                <Box my={6}>
                    <Button width={'100%'} bg={useColorModeValue('blue.700', 'gray.800')} color={useColorModeValue('#fff')}
                        _hover={{bg:useColorModeValue('blue.600')}} type='submit' onChange={handleChange} className='uppercase'>
                        {
                            loading ? <Flex gap={3}>Loading... 
                                    <Spinner thickness='4px' speed='0.65s' emptyColor='gray.200' color='green.700' size='md'/>
                                </Flex> : 'Sign In'
                        }
                        </Button>
                </Box>
                <GoogleAuth/>
                <Flex gap={1} mt={4} fontWeight={500}>
                    <Text color={useColorModeValue('#fff', '#fff')}>If already have an account:</Text>
                    <Link className='hover:underline' to={'/signup'}>Signup</Link>
                </Flex>
            </form>
        </Box>
    </>
  )
}
