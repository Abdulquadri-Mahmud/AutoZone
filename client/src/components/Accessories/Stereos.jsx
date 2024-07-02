import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { StereosContext } from '../../pages/Accessories/StereosPage';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function Stereos() {

    const stereos = useContext(StereosContext);

    return (
        <Box py={'3rem'}>
            <Flex gap={3} justifyContent={'center'} flexWrap={'wrap'}>
                {
                    stereos.length > 0 ? (
                        stereos.map((stereo) => (
                            <Box width={{md: '300px', base: '100%'}} bg={useColorModeValue('gray.200')} padding={3} rounded={5}>
                                <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white')} p={2} rounded={5}>
                                    <Image src={stereo.steroeImage[0]} maxW={'100%'} rounded={5}/>
                                </Flex>
                                <Box mt={4} color={'gray.800'}>
                                    <Heading mb={2} fontWeight={500} fontSize={16} color={'blue.500'}>{stereo.year} {stereo.name} {stereo.make}</Heading>
                                    <Box>
                                        <Text fontWeight={500}>{stereo.descriptions.slice(0, 100)}...</Text>
                                    </Box>
                                    <Flex justifyContent={'space-between'} mt={4}>
                                        <Box>
                                            <Text fontWeight={500} fontSize={15} className='flex items-center'>Price: <BsCurrencyDollar/>{stereo.price}</Text>
                                        </Box>
                                        <Box>
                                            <Text fontWeight={500} fontSize={15}>Deal: {stereo.deal}</Text>
                                        </Box>
                                    </Flex>
                                    <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                        <Box fontWeight={500} >
                                            <Link to={`/stereo-reviews/${stereo._id}`} className='text-blue-500'>Review</Link>
                                        </Box>
                                        <Box>
                                            <Button bg={useColorModeValue('white')}>
                                                <LuShoppingCart className='text-xl text-blue-500'/>
                                            </Button>
                                        </Box>
                                    </Flex>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text>No blogs to display</Text>
                    )
                }
            </Flex>
        </Box>
  )
}
