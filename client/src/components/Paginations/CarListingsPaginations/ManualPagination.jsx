import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function ManualPagination({ manualPostPerPage, totalManualPost, manualPaginate }) {
  const manualPageNumber = [];

  for (let i = 1; i <= Math.ceil(totalManualPost / manualPostPerPage); i++) {
    manualPageNumber.push(i);
  }

  return (
    <Flex>
      {
        manualPageNumber.map((number) => (
          <Box mt={4} bg={useColorModeValue('', 'gray.700')} key={number}>
            <Link to={'#'} onClick={() => manualPaginate(number)} className='w-[35px] h-[35px] flex items-center justify-center border'>{number}</Link>
          </Box>
        ))
      }
    </Flex>
  )
}
