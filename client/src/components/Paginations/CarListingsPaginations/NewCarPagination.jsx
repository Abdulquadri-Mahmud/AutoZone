import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

export default function NewCarPagination({ newCarPostPerPage, totalPostPerPage, newCarPaginate}) {
  const newCarNumber = [];

  for (let i = 1; i < Math.ceil(totalPostPerPage / newCarPostPerPage); i++) {
    newCarNumber.push(i);
  }

  return (
    <Box>
      {
        newCarNumber.map((number) => (
          <Box mt={4} bg={useColorModeValue('', 'gray.700')} key={number}>
              <Link to={'#'} onClick={() => newCarPaginate(number)} className='w-[35px] h-[35px] flex items-center justify-center border'>{number}</Link>
          </Box>
        ))
      }
    </Box>
  )
}
