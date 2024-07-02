import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { FaRegHeart } from "react-icons/fa";

import { useSelector } from 'react-redux';

export default function SaveCar() {
    const { currentUser } = useSelector((state) => state.user);
  return (
    <Box>
        {
            currentUser ? (
                <>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={'full'} height={'40px'} width={'40px'} bg={useColorModeValue('gray.200')}><FaRegHeart className='text-black text-xl'/></Flex>
                </>
            ) : ''
        }
    </Box>
  )
}
