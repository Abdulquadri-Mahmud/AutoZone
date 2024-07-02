import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function ForgotPassword() {

    const handleChange = () => {

    }

    const handleSubmit = (e) => {

    }
  return (
    <Box>
        <Box my={'5rem'} width={'350px'} mx={'auto'} bg={'blue.500'} padding={5} rounded={5}>
        <form onSubmit={handleSubmit}>
            <Box>
                <Heading textAlign={'center'} fontSize={30} color={'white'}>Forgot Password</Heading>
            </Box>
            <Box mt={4}>
                <label className='text-base text-white font-semibold'>Enter Email Address</label>
                <input onChange={handleChange} id='email' type="text" className='w-full mt-2 rounded-md p-3 border-none outline-none' placeholder='Enter email' required/>
            </Box>
            <Box textAlign={'center'} mt={3} color={'white'}>
                <Link to={'/admin'} className='font-semibold'>Back to admin login</Link>
            </Box>
            <Flex justifyContent={'center'} mt={5}>
                <Button width={'full'} bg={'white'} className='uppercase font-semibold'>Send</Button>
            </Flex> 
        </form>
    </Box>
    </Box>
  )
}
