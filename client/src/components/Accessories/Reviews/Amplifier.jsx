import React, { useContext, useRef } from 'react'
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from "react-icons/gr";
import { AmplifierReviewContext } from '../../../pages/Accessories/Reviews/AmplifierReviewPage';
import { IoStar } from 'react-icons/io5';

export default function Amplifier() {
    const item = useContext(AmplifierReviewContext);

    let switchImage = useRef(null);
    let display = useRef(null);
    
    const handleClick = (img) => {
        display.current.src = img;
    }
    
    return (
        <Flex mt={10} flexWrap={'wrap'} gap={6} px={3} py={7} width={{md: '90%', base: '100%'}} mx={'auto'} bg={'gray.100'}>
            <Box width={{md: '300px', base: '100%'}}>
            <Flex justifyContent={{md: 'start', base: 'center'}}>
                {
                    item.amplifierImage === undefined ? '' : (
                        <Flex justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('white')}
                        position={'relative'} height={{md:'350px', base: '300px'}} width={{md:'350px', base: '300px'}} p={3} rounded={5}>
                            <Image src={item.amplifierImage[0]} ref={display} maxW={'100%'} rounded={5}/>
                            <Flex justifyContent={'center'} position={'absolute'} top={0} left={0} width={'70px'} borderTopLeftRadius={5} py={1} bg={'gray.200'}>
                                <Text fontWeight={500}>{item.amplifierImage.length} Photo</Text>
                            </Flex>
                        </Flex>
                    )
                }
            </Flex>
            <Flex alignItems={'center'} justifyContent={'center'} bg={useColorModeValue('')} gap={3} flexWrap={'wrap'}  p={1}>
                {
                    item.amplifierImage === undefined ? '' : (
                        <>
                            {
                                item.amplifierImage.map((img, index) => (
                                    <Flex justifyContent={'center'} alignItems={'center'} p={2} width={'100px'} height={'100px'} rounded={5} bg={useColorModeValue('white')}>
                                        <Image src={img} alt={''} ref={switchImage} key={index} onClick={() => handleClick(img)} maxW={'100%'} objectFit={'cover'} rounded={5}/>
                                    </Flex>
                                ))
                            }
                        </>
                    )
                }
            </Flex>
        </Box>
            <Box mt={5} flex={1}>
                <Heading fontWeight={500} fontSize={30}>{item.year} {item.name} {item.make}</Heading>
                <Flex alignItems={'center'} gap={1} className="rate" mt={4}>
                    <Text className='font-medium'>rating: </Text>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-gray-300'/>
                </Flex>
                <Text fontWeight={500} mt={3} fontSize={{md:16, base:14}}>{item.descriptions}</Text>
                <Flex gap={4} mt={2}>
                    <Text className='font-medium'>Make: <span className='font-normal'>{item.make}</span></Text> |
                    <Text className='font-medium'>Year: <span className='font-normal'>{item.year}</span></Text>
                </Flex>
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
        </Flex>
    )
}
