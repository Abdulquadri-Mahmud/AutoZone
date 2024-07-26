import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchHomepage() {
    
   return (
    <Box py={{md: '4rem', base: 2}} my={20} mx={{md: 0, base: 5}} zIndex={100}>
        <Box maxW={{md: '90%', base: '100%'}} mx={'auto'} rounded={5} bg={useColorModeValue('white', 'gray.700')} padding={{md: 10, base: 5}}>
            <Heading color={useColorModeValue('black', 'white')} textAlign={'center'} py={10} fontWeight={500} fontSize={30}>FIND YOUR RIGHT CAR</Heading>
            <form className='pb-10'>
                <Box className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full'>
                    <Box color={useColorModeValue('black', 'black')}>
                        <input type="text" placeholder='Car Name'className='rounded-[5px] bg-gray-200 p-3 w-[100%] border-0 outline-none '/>
                    </Box>
                    <Box color={useColorModeValue('black', 'black')}>
                        <select name="" id="" className='w-[100%] p-3 font-medium rounded-[5px] outline-none border-0 bg-gray-200'>
                            <option value="">Select Car Status</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </Box>
                    <Box color={useColorModeValue('black', 'black')}>
                        <select name="" id="" className='w-[100%] p-3 font-medium rounded-[5px] outline-none border-0 bg-gray-200'>
                            <option value="">Car Model</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </Box>
                    <Box color={useColorModeValue('black', 'black')}>
                        <select name="" id="" className='w-[100%] p-3 font-medium rounded-[5px] outline-none border-0 bg-gray-200'>
                            <option value="">Select Loacion</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </Box>
                    {/* <Box color={useColorModeValue('black', 'black')}>
                        <select name="" id="" className='w-[100%] p-3 font-medium rounded-[5px] outline-none border-0 bg-gray-200'>
                            <option value="">Select Year</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </Box> */}
                </Box>
                <Box pt={6} width={'200px'} mx={'auto'}>
                    <Button className='uppercase' bg={useColorModeValue('blue.500', 'gray.800')} rounded={3} _hover={{bg: 'blue.600'}} fontSize={18} color={'white'} width={'100%'} p={6}>Search Vehicla</Button>
                </Box>
            </form>
        </Box>
    </Box>
  )
}
