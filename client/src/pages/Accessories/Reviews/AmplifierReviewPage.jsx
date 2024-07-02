import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { BsCurrencyDollar } from 'react-icons/bs';
import { LuShoppingCart } from 'react-icons/lu';
import Amplifier from '../../../components/Accessories/Reviews/Amplifier';

export const AmplifierReviewContext = createContext();

export default function AmplifierReviewPage() {
    const [review, setReview] = useState({});
    const [item, setItem] = useState({});

    const {accessoryId} = useParams();


    useEffect(() => {
        const getItem = async () => {
        const fetchItem = await fetch(`/api/accessories/car-amplifier/${accessoryId}`);
        const item = await fetchItem.json();
        setReview(item);
        }
        getItem();
    }, []);

    
    useEffect(()=> {
        const getItem = async () => {
            try {
                const res = await fetch('/api/accessories/car-amplifier');
                const data =  await res.json();
                setItem(data);
            } catch (error) {
                console.log(error);
            }
        }
        getItem();
    }, []);
    
  return (
    <Box>
      <AmplifierReviewContext.Provider value={review}>
        <Amplifier review={review}/>
      </AmplifierReviewContext.Provider>

      {/* <Box>
        <Text>{review.amplifierImage}</Text>
      </Box> */}

      <Box maxW={'100%'} mx={'auto'} mt={10}>
        <Flex justifyContent={'center'} position={'relative'}>
          <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
          <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
        </Flex>
        <Flex mt={10} gap={3} mx={5} justifyContent={'center'} flexWrap={'wrap'}>
            {
                item.length > 0 ? (
                    item.map((item) => (
                        <Box key={item._id} width={{md: '300px', base: '100%'}} bg={useColorModeValue('gray.200')} padding={3} rounded={5}>
                            <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white')} p={2} rounded={5}>
                                <Image src={item.amplifierImage[0]} maxW={'100%'} rounded={5}/>
                            </Flex>
                            <Box mt={4} color={'gray.800'}>
                                <Heading mb={2} fontWeight={500} fontSize={16} color={'blue.500'}>{item.year} {item.name} {item.make}</Heading>
                                <Box>
                                    <Text fontWeight={500}>{item.descriptions.slice(0, 100)}...</Text>
                                </Box>
                                <Flex justifyContent={'space-between'} mt={4}>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15} className='flex items-center'>Price: <BsCurrencyDollar/>{item.price}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15}>Deal: {item.deal}</Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                    <Box fontWeight={500} >
                                        <Link to={`/review-amplifier-reviews/${item._id}`} className='text-blue-500'>Review</Link>
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
    </Box>
  )
}
