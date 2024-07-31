import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { BsCurrencyDollar } from 'react-icons/bs';
import { LuShoppingCart } from 'react-icons/lu';
import FoglightReview from '../../../components/Accessories/Reviews/FoglightReview';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';

export const FoglightReviewContext = createContext();

export default function FoglightReviewPage() {
    const [review, setReview] = useState({});
    const [items, setItem] = useState({});

    const {accessoryId} = useParams();

    useEffect(() => {
        const getItem = async () => {
          const fetchItem = await fetch(`/api/accessories/single-accessory/${accessoryId}`);
          const item = await fetchItem.json();

          console.log(item.name);
          setReview(item);
        }
        getItem();
      }, []);

    useEffect(()=> {
        const getItem = async () => {
            try {
                const res = await fetch('/api/accessories/all-accessory');
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
        <Header/>
        <FoglightReviewContext.Provider value={review}>
            <FoglightReview review={review} key={review._id}/>
        </FoglightReviewContext.Provider>

        <Box maxW={'100%'} mx={'auto'} mt={20}>
            <Flex justifyContent={'center'} position={'relative'}>
                <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
                <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
            </Flex>
            <Flex mt={20} gap={3} justifyContent={'center'} flexWrap={'wrap'}>
                {
                    items.length > 0 ? (
                        items.map((item) => (
                            item.category === 'Fog Lights' ? (
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
                                                <Link to={`/review-foglight-reviews/${item._id}`} className=''>Review</Link>
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
        <Footer/>
    </Box>
  )
}
