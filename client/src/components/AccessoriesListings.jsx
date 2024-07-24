import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import AdminThemes from './AdminThemes'
import { FaHome } from 'react-icons/fa'

export default function AccessoriesListings() {
  return (
    <Box>
        <Flex justifyContent={'space-between'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={'black'}>
            <Heading fontSize={30} fontWeight={500} color={'white'} fontFamily={'oblique'}>Accessories Listings</Heading>
            <Flex gap={1} alignItems={'center'} bg={'white'} pr={4} rounded={5}>
                <AdminThemes/>
                <FaHome className='text-2xl'/>
            </Flex>
        </Flex>
    </Box>
  )
}
