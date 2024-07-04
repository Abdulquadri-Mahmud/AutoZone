import React, { useContext } from 'react'
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from "react-icons/gr";
import { GrillReviewContext } from '../../../pages/Accessories/Reviews/GrillsReviewPage';

export default function GrillsReview() {
    const item = useContext(GrillReviewContext);

  return (
    <Box mt={10} px={3} py={7} width={{md: '70%', base: '100%'}} mx={'auto'} bg={'gray.200'}>
        <Box>
            {/* <Box bg={useColorModeValue('white')} width={'300px'} p={2} rounded={5}>
                <Heading fontSize={30} fontWeight={500}>Category: <span className='font-medium text-blue-500'>{item.category}</span></Heading>
            </Box> */}
            <Flex position={'relative'} alignItems={'center'} justifyContent={'center'} width={'100%'}>
                <Box width={'300px'} height={'250px'} bg={useColorModeValue('white')} padding={3} rounded={5}>
                    {
                        item.GrillsImage === undefined ? '' : (
                            <Image src={item.GrillsImage[0]} maxW={'100%'} rounded={5}/>
                        )
                    }
                </Box>
                <Box position={'absolute'}>
                    {/* {item.steroeImage.length} */}
                </Box>
            </Flex>
        </Box>
        <Box mt={5}>
            <Heading fontWeight={500} fontSize={30}>{item.year} {item.name} {item.make}</Heading>
            <Text fontWeight={500} mt={3} fontSize={{md:16, base:14}}>{item.descriptions}</Text>
            <Flex gap={8} alignItems={'center'}mt={4}>
                {
                    item.deal === 'Great' ? (
                        <Text fontWeight={500} my={3} className='flex items-center gap-1'>Deal: <GrStatusGood className='text-green-500'/>{item.deal}</Text>
                    ) : (
                        <Text fontWeight={500} my={3} className='flex items-center gap-1'>Deal: <GrStatusGood className='text-blue-500'/>{item.deal}</Text>
                    )
                }
                <Text fontWeight={500} my={3} className='flex items-center'>Price: <BsCurrencyDollar/> {item.price}</Text>
                <Button bg={useColorModeValue('white')} color={useColorModeValue('blue.500')}>
                    <LuShoppingCart className='text-xl'/>
                </Button>
            </Flex>
        </Box>
    </Box>
  )
}
