import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function SearchHomepage() {
    
   return (
    <Box padding={{md: 10, base: 2}} pt={20} zIndex={100}>
        <Box maxW={{md: '90%', base: '100%'}} mx={'auto'} rounded={5} bg={useColorModeValue('gray.700', 'gray.700')} padding={{md: 10, base: 5}}>
            <Heading color={'white'} textAlign={'center'} pb={10} fontWeight={500} fontSize={30}>FIND YOUR RIGHT CAR</Heading>
            <form>
                <Box className='grid md:grid-cols-3 sm;grid-cols-2 grid-cols-1 gap-3 w-full'>
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
                    <Box color={useColorModeValue('black', 'black')}>
                        <select name="" id="" className='w-[100%] p-3 font-medium rounded-[5px] outline-none border-0 bg-gray-200'>
                            <option value="">Select Year</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                    </Box>
                </Box>
                <Box pt={6} width={{md:'50%', base: '100%'}} mx={'auto'}>
                    <Button className='uppercase' bg={'blue.500'} _hover={{bg: 'blue.600'}} fontSize={22} color={'white'} width={'100%'} p={8}>Search Vehicla</Button>
                </Box>
            </form>
        </Box>
    </Box>
  )
}
