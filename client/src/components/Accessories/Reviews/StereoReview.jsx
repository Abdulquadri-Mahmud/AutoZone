import React, { useContext } from 'react'
import { StereoReviewContext } from '../../../pages/Accessories/Reviews/StereoReviewPage'
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { LuShoppingCart } from 'react-icons/lu';

export default function StereoReview() {
    const item = useContext(StereoReviewContext);
    console.log(item.name);
    
  return (
    <Box p={10}>
        <Flex>
            <Image src={item.steroeImage}/>
        </Flex>
        <Box width={{md:'60%', base:'97%'}}>
            <Heading fontWeight={500} fontSize={30}>{item.year} {item.name} {item.make}</Heading>
            <Text fontWeight={500} mt={3}>{item.descriptions}</Text>
            <Flex gap={8} alignItems={'center'}>
                <Text fontWeight={500} my={3}>Deal: {item.deal}</Text>
                <Text fontWeight={500} my={3}>Price: {item.price}</Text>
                <Button bg={useColorModeValue('gray.200')}>
                    <LuShoppingCart className='text-xl text-blue-500'/>
                </Button>
            </Flex>
        </Box>
    </Box>
  )
}
