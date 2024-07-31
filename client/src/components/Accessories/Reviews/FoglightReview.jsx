import React, { useContext, useRef } from 'react'
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from "react-icons/gr";
import { IoStar } from 'react-icons/io5';

import { FoglightReviewContext } from '../../../pages/Accessories/Reviews/FoglightReviewPage';
import { IoMdImages } from 'react-icons/io';

export default function FoglightReview() {
    const item = useContext(FoglightReviewContext);

    let switchImage = useRef(null);
    let display = useRef(null);
    
    const handleClick = (img) => {
        display.current.src = img;
    }

  return (
    <Flex mt={10} flexWrap={'wrap'} gap={6} alignItems={''} px={3} py={7} width={{md: '90%', base: '97%'}} rounded={5} mx={'auto'} bg={useColorModeValue('gray.200', 'gray.700')}>
        <Box width={{md: '40%', base: '100%'}} bg={useColorModeValue('white', 'gray.800')} rounded={10}>
            <Flex justifyContent={{md: 'center', base: 'center'}}>
                {
                    item.accessoryImage === undefined ? '' : (
                        <Flex justifyContent={'center'} alignItems={'center'} position={'relative'} height={{md:'350px', base: '350px'}} width={{md:'350px', base: '300px'}} p={3} rounded={5}>
                            <Image src={item.accessoryImage[0]} ref={display} w={'100%'} rounded={5}/>
                            <Flex alignItems={'center'} gap={1} position={'absolute'} bottom={0} bg={useColorModeValue('gray.200', 'gray.700')}  px={4} py={2} roundedTopRight={5}>
                                <IoMdImages/>
                                <Text className='text-sm'>({item.accessoryImage.length})</Text>
                                <Text>Photos</Text>
                            </Flex>
                        </Flex>
                    )
                }
            </Flex>
            <Flex mt={7} mb={4} alignItems={'center'} justifyContent={'center'} bg={useColorModeValue('')} gap={3} flexWrap={'wrap'}  p={1}>
                {
                    item.accessoryImage === undefined ? '' : (
                        <>
                            {
                                item.accessoryImage.map((img, index) => (
                                    <Flex cursor={'pointer'} justifyContent={'center'} alignItems={'center'} p={2} width={'50px'} height={'50px'} rounded={5} bg={useColorModeValue('gray.200', 'gray.700')}>
                                        <Image src={img} alt={''} ref={switchImage} key={index} onMouseOver={() => handleClick(img)} maxW={'100%'} objectFit={'cover'} rounded={5}/>
                                    </Flex>
                                ))
                            }
                        </>
                    )
                }
            </Flex>
        </Box>
        <Box mt={5} flex={1}>
            <Heading fontWeight={500} fontSize={{md: 30, base: 20}}>{item.name}</Heading>
            <Flex alignItems={'center'} gap={1} className="rate" mt={4}>
                <Text className='font-medium'>rating: </Text>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-gray-300'/>
            </Flex>
            <Text fontWeight={500} mt={3} fontSize={{md:14, base:14}} wordBreak={'break-word'}>{item.descriptions}</Text>
            <Flex gap={4} mt={2}>
                <Text className='font-medium'>Make: <span className='font-normal'>{item.make}</span></Text> |
                <Text className='font-medium'>Year: <span className='font-normal'>{item.year}</span></Text>
            </Flex>
            {
                item.specialFeatures && (
                    <Flex gap={2} mt={3} alignItems={'center'}>
                        <Text fontWeight={500} color={useColorModeValue('', 'gray.200')}>Special Features: </Text>
                        <Text fontWeight={500} color={useColorModeValue('', 'gray.400')} fontSize={13}>{item.specialFeatures}</Text>
                    </Flex>
                )
            }
            {
                item.screenSize && (
                    <Text fontWeight={500} mt={4} color={'blue.500'} fontSize={17}>Screen Size: <span className='text-sm text-white font-medium'>{item.screenSize}</span></Text>
                )
            }
            {
                item.quantity && item.quantity >= 15 ? (
                    <Box py={1} mt={3} px={2} bg={'white'} width={'200px'} rounded={4}>
                        <Flex gap={2} alignItems={'center'}>
                            <Text fontWeight={500} color={useColorModeValue('', 'gray.700')}>Quantity: </Text>
                            <Text fontWeight={500} color={'red.500'} fontSize={13}>In Stock</Text>
                        </Flex>
                    </Box>
                ) : ''
            }
            <Box mt={3} py={1} px={2} bg={'white'} width={'200px'} rounded={4}>
                <Flex gap={2} alignItems={'center'}>
                    <Text fontWeight={500} color={useColorModeValue('', 'gray.700')}>Price: </Text>
                    <Flex alignItems={'center'} fontWeight={500} color={'red.500'} fontSize={15}>
                        <BsCurrencyDollar/> {item.price}.00
                    </Flex>
                </Flex>
                {
                    item.prevprice && (
                        <Text fontWeight={500} color={useColorModeValue('', 'gray.500')} fontSize={12} className='flex items-center'>Old-Price: <span className='text-[12px] font-medium flex items-center'><BsCurrencyDollar/> {item.prevprice}</span></Text>
                    )
                }
            </Box>
            <Flex gap={4} alignItems={'center'}mt={3}>
                <Button bg={useColorModeValue('white', 'gray.800')} _hover={{bg: useColorModeValue('', 'gray.600')}} color={useColorModeValue('')}>
                    {/* <LuShoppingCart className='text-xl'/> */}
                    Add To cart
                </Button>
            </Flex>
        </Box>
    </Flex>
  )
}
