import React from 'react'
import {Box, Flex, Heading,Text, Button, useColorModeValue } from '@chakra-ui/react';
import img from '../assets/img/car5.jpg'
import { Link } from 'react-router-dom';

export default function LatestBlog() {
  return (
    <Box fontWeight={500} px={2} py={'2rem'}>
        <Flex width={{md: '100%', base: '100%'}} gap={5} justifyContent={'space-around'} flexWrap={'wrap'} my={6}>
          <Box mb={6} width={'100%'}>
            <Flex justifyContent={'center'}pt={1} width={'200px'} height={'45px'} bg={'white'} mx={'auto'} borderBottomRadius={'10px'}>
              <Heading fontWeight={500} fontSize={35} className='text-black'>Latest Blog</Heading>
            </Flex>
          </Box>
          <Box width={{md: '50%', base: '100%'}} mt={2}>
            <img src={img} alt="" className='w-full rounded-md'/>
          </Box>
          <Box pt={4} width={{md: '45%', base: '100%'}}>
            <Text>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an 
              printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five 
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in 
              the 1960s with the release of Letraset sheets containing 
              Lorem Ipsum passages, and more recently with desktop 
              publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum....
            </Text>
            <Text mt={3}>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an 
              printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five....
            </Text>
            <Box mt={5}>
              <Button w={{base: 160, md: 200}} height={'40px'} bg={'red.500'} color={'#fff'} _hover={{bg : 'red.600'}}>
                <Link to='/about'>Read More</Link>
              </Button>
            </Box>
          </Box>
        </Flex>
    </Box>
  )
}
