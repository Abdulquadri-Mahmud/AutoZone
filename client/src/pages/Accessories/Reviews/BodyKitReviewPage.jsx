import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { BsCurrencyDollar } from 'react-icons/bs';
import { LuShoppingCart } from 'react-icons/lu';

import BodyKitReview from '../../../components/Accessories/Reviews/BodyKitReview'

export const BodyKitReviewContext = createContext();

export default function BodyKitReviewPage() {
    const [review, setReview] = useState({});

    const {accessoryId} = useParams();

    useEffect(() => {
        const getItem = async () => {
        const fetchItem = await fetch(`/api/accessories/car-body-kit/${accessoryId}`);
        const item = await fetchItem.json();
        setReview(item);
        }
        getItem();
    }, []);

    const [stereo, setStereo] = useState({});
    useEffect(()=> {
        const Stereo = async () => {
        try {
            const res = await fetch('/api/accessories/car-body-kit');
            const data =  await res.json();
            setStereo(data);
        } catch (error) {
            console.log(error);
        }
        }
        Stereo();
    }, []);

  return (
    <Box>
      <BodyKitReviewContext.Provider value={review}>
        <BodyKitReview review={review}/>
      </BodyKitReviewContext.Provider>
      <Box maxW={'100%'} mx={'auto'} mt={10}>
        <Flex justifyContent={'center'} position={'relative'}>
          <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
          <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
        </Flex>
        <Flex mt={10} gap={3} mx={5} justifyContent={'center'} flexWrap={'wrap'}>
            {
                stereo.length > 0 ? (
                    stereo.map((stereo) => (
                        <Box key={stereo._id} width={{md: '300px', base: '100%'}} bg={useColorModeValue('gray.200')} padding={3} rounded={5}>
                            <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white')} p={2} rounded={5}>
                                <Image src={stereo.BodyKitImage[0]} maxW={'100%'} rounded={5}/>
                            </Flex>
                            <Box mt={4} color={'gray.800'}>
                                <Heading mb={2} fontWeight={500} fontSize={16} color={'red.500'}>{stereo.year} {stereo.name} {stereo.make}</Heading>
                                <Box>
                                    <Text fontWeight={500}>{stereo.descriptions.slice(0, 100)}...</Text>
                                </Box>
                                <Flex justifyContent={'space-between'} mt={4}>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15} className='flex items-center'>Price: <sup><BsCurrencyDollar/> </sup>{stereo.price}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15}>Deal: {stereo.deal}</Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                    <Box fontWeight={500} >
                                        <Link to={`/review-bodykit-reviews/${stereo._id}`} className='text-red-500'>Review</Link>
                                    </Box>
                                    <Box>
                                        <Button bg={useColorModeValue('white')}>
                                            <LuShoppingCart className='text-xl text-red-500'/>
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
    </Box>
  )
}
