import React from 'react'
import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import AdminThemes from './AdminThemes'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Blogs() {
  return (
    <Box>
      <Flex justifyContent={'end'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={useColorModeValue('black', 'gray.300')}>
            {/* <Heading fontSize={25} fontWeight={500} color={'white'} fontFamily={'oblique'}>Dashboard</Heading> */}
            <Flex gap={1} alignItems={'center'} bg={useColorModeValue('white', 'gray.600')} pr={4} rounded={5}>
                <AdminThemes/>
                <Link to={'/'}>
                    <FaHome className='text-2xl'/>
                </Link>
            </Flex>
        </Flex>
    </Box>
  )
}
