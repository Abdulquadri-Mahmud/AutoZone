import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react';

import car5 from '/car7.jpg'
import { Link } from 'react-router-dom';

import { FaChevronRight } from "react-icons/fa";

export default function AboutPage() {
  return (
    <Box>
        <Flex justifyContent={'center'} bg={useColorModeValue('', 'gray.700')} alignItems={'center'} position={'relative'} bgImage={car5} height={'30vh'} bgRepeat={'no-repeat'} bgSize={'cover'} 
        bgPosition={{md: 'center', base: 'bottom'}} className='about'>
            <Box>
                <Heading fontWeight={500} textAlign={'center'}>ABOUT US</Heading>
                {/* <Text textAlign={'center'} mt={2} className='font-medium'>Read more aout us, our vission, mission, success and many more you might love</Text> */}
                <Flex justifyContent={'center'} alignItems={'center'} gap={4} mt={2}>
                    <Link className='font-semibold underline' to={'/'}>Home</Link>
                    <FaChevronRight/>
                    <Link className='font-semibold underline' to={'/'}>Contact</Link>
                </Flex>
            </Box>
        </Flex>
        <Box maxW={{md: '90%', base: '100%'}} mx={{md: 'auto', base: 2}} my={'3rem'} p={{md: 8, base: 5}} rounded={'md'} bg={useColorModeValue('gray.200', 'gray.700')}> 
            <Text className='font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
            <Text mt={10} className='font-medium'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
            <Text mt={10} className='font-medium'>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Text>
        </Box>
    </Box>
  )
}
