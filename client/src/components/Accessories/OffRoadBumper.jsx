import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { OffRoadBumberContext } from '../../pages/Accessories/OffRoadBumperPage';

export default function OffRoadBumper() {
    const items = useContext(OffRoadBumberContext);

  return (
    <Box py={'3rem'}>
        <Flex gap={3} justifyContent={'center'} flexWrap={'wrap'}>
            {
                items.length > 0 ? (
                    items.map((item) => (
                        item.category === 'Offroad Bumper' ? (
                            <Box width={{md: '300px', base: '350px'}} bg={useColorModeValue('gray.200', 'gray.700')} padding={3} rounded={5}>
                                <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white', 'gray.800')} p={2} rounded={5}>
                                    <Image src={item.accessoryImage[0]} maxW={'100%'} rounded={5}/>
                                </Flex>
                                <Box mt={4} color={useColorModeValue('gray.800', 'gray.200')}>
                                    <Heading mb={2} fontWeight={500} fontSize={15} isTruncated>{item.name}</Heading>
                                    <Box>
                                        <Text fontWeight={500}>Descriptions:</Text>
                                        <Text fontSize={14} fontWeight={400} isTruncated>{item.descriptions.slice(0,100)}</Text>
                                    </Box>
                                    <Flex justifyContent={'space-between'} mt={4}>
                                        <Box>
                                            <Text fontWeight={500}>Make: <span className='font-normal text-sm'>{item.make}</span></Text>
                                        </Box>
                                        <Box>
                                            <Text fontWeight={500}>Model: <span className='font-normal text-sm'>{item.model}</span></Text>
                                        </Box>
                                    </Flex>
                                    <Flex justifyContent={'space-between'} mt={4}>
                                        <Box>
                                            <Text fontWeight={500} fontSize={14} className='flex items-center'>Price: <BsCurrencyDollar/>{item.price}.00</Text>
                                        </Box>
                                        <Box>
                                            <Text fontWeight={500} fontSize={14}>Deal: {item.deal}</Text>
                                        </Box>
                                    </Flex>
                                    <Flex justifyContent={'center'} alignItems={'center'} pt={3} mt={2} borderTop={'1px'} borderTopColor={'gray.600'}>
                                        <Flex justifyContent={'center'} alignItems={'center'} fontWeight={500} bg={useColorModeValue('blue.500', 'white')} color={useColorModeValue('white', 'black')} width={'100%'} height={'40px'} rounded={3}>
                                            <Link to={`/offroadbumper-reviews/${item._id}`} className=''>Review</Link>
                                        </Flex>
                                    </Flex>
                                </Box>
                            </Box>
                        ) : '')
                    )
                ) : (
                    <Text>No Items to display</Text>
                )
            }
        </Flex>
    </Box>
  )
}
