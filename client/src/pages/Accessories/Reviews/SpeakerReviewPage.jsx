import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

import { BsCurrencyDollar } from 'react-icons/bs';
import { LuShoppingCart } from 'react-icons/lu';
import SpeakerReview from '../../../components/Accessories/Reviews/SpeakerReview';

export const SpeakerReviewContext = createContext();

export default function SpeakerReviewPage() {
    const [review, setReview] = useState({});
    const [speaker, setSpeaker] = useState({});

    const {accessoryId} = useParams();

    useEffect(() => {
        const getItem = async () => {
          const fetchItem = await fetch(`/api/accessories/car-speaker/${accessoryId}`);
          const item = await fetchItem.json();

          console.log(item.name);
          setReview(item);
        }
        getItem();
      }, []);

    useEffect(()=> {
        const Speaker = async () => {
            try {
                const res = await fetch('/api/accessories/car-speaker');
                const data =  await res.json();
                setSpeaker(data);
            } catch (error) {
                console.log(error);
            }
        }
        Speaker();
    }, []);

    try {
        console.log(review.speakerImage[0]);
    } catch (error) {
        console.log('error', error);
    }
  return (
    <Box>
        <SpeakerReviewContext.Provider value={review}>
            <SpeakerReview review={review} key={review._id}/>
        </SpeakerReviewContext.Provider>

        <Box maxW={'100%'} mx={'auto'} mt={6}>
            <Flex justifyContent={'center'} position={'relative'}>
                <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
                <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
            </Flex>
            <Flex mt={10} gap={3} mx={5} justifyContent={'center'} flexWrap={'wrap'}>
            {
                speaker.length > 0 ? (
                    speaker.map((speaker) => (
                        <Box key={speaker._id} width={{md: '300px', base: '100%'}} bg={useColorModeValue('gray.200')} padding={3} rounded={5}>
                            <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white')} p={2} rounded={5}>
                                <Image src={speaker.speakerImage[0]} maxW={'100%'} rounded={5}/>
                            </Flex>
                            <Box mt={4} color={'gray.800'}>
                                <Heading mb={2} fontWeight={500} fontSize={16} color={'blue.500'}>{speaker.year} {speaker.name} {speaker.make}</Heading>
                                <Box>
                                    <Text fontWeight={500}>{speaker.descriptions.slice(0, 100)}...</Text>
                                </Box>
                                <Flex justifyContent={'space-between'} mt={4}>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15} className='flex items-center'>Price: <BsCurrencyDollar/>{speaker.price}</Text>
                                    </Box>
                                    <Box>
                                        <Text fontWeight={500} fontSize={15}>Deal: {speaker.deal}</Text>
                                    </Box>
                                </Flex>
                                <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                    <Box fontWeight={500} >
                                        <Link to={`/review-speaker-reviews/${speaker._id}`} className='text-blue-500'>Review</Link>
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
