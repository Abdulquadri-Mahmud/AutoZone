import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function UsedCarPgaination({ usedCarPostPerPage, usedCarTotalPost, usedCarPaginate}) {
    const usedCarNumber = [];

    for (let i = 1; i <= Math.ceil(usedCarTotalPost / usedCarPostPerPage); i++) {
        usedCarNumber.push(i);
    }
    return (
    <Box>
        {
            usedCarNumber.map((number) => (
                <Box mt={4} bg={useColorModeValue('', 'gray.700')} key={number}>
                    <Link to={'#'} onClick={() => usedCarPaginate(number)} className='w-[35px] h-[35px] flex items-center justify-center border'>{number}</Link>
                </Box>
            ))
        }
    </Box>
  )
}
