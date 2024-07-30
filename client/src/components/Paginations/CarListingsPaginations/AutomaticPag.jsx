import { Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom'

export default function AutomaticPag({ automaticPostPerPage, automaticTotalPost, paginate}) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(automaticTotalPost / automaticPostPerPage); i++) {
        pageNumbers.push(i);
    }

 return (
    <Flex>
        {
            pageNumbers.map((number) => (
                <Box mt={4} bg={useColorModeValue('', 'gray.700')} key={number}>
                    <Link onClick={() => paginate(number)} to={'#'} className='w-[35px] h-[35px] flex items-center justify-center border'>{number}</Link>
                </Box>
            ))
        }
    </Flex>
  )
}
