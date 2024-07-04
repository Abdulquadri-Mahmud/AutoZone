import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import { LuShoppingCart } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom';

export default function BumperReviewPage2() {
    const [review, setReview] = useState({});
    const [item, setItem] = useState({});

    const {accessoryId} = useParams();


    useEffect(() => {
        const getItem = async () => {
            const fetchItem = await fetch(`/api/accessories/car-bumper/${accessoryId}`);
            const item = await fetchItem.json();
            setReview(item);
        }
        getItem();

    }, []);

    useEffect(()=> {
        const Stereo = async () => {
        try {
            const res = await fetch('/api/accessories/car-bumper');
            const data =  await res.json();
            setItem(data);
        } catch (error) {
            console.log(error);
        }
        }
        Stereo();
    }, []);

    console.log(review);

  return (
    <Box>
        <Box mt={10} px={3} py={7} width={{md: '70%', base: '100%'}} mx={'auto'} bg={'gray.200'}>
            <Box  bg={useColorModeValue('white')} width={'260px'} p={2} rounded={5}>
                <Heading fontSize={30} fontWeight={500}>Category: <span className='font-medium text-blue-500'>{review.category}</span></Heading>
            </Box>
            <Flex justifyContent={'center'} mt={5} bg={useColorModeValue('white')} width={'300px'} padding={3} rounded={5}>
                {
                    review.BumperImage === undefined ? '' : (
                        <Image src={review.BumperImage[0]} maxW={'100%'} rounded={5}/>
                    )
                }
            </Flex>
            <Box width={{md:'60%', base:'97%'}} mt={5}>
                <Heading fontWeight={500} fontSize={30}>{review.year} {review.name} {review.make}</Heading>
                <Text fontWeight={500} mt={3}>{review.descriptions}</Text>
                <Flex gap={8} alignItems={'center'}>
                    {
                        review.deal === 'Great' ? (
                            <Text fontWeight={500} my={3} className='flex items-center gap-1'>Deal: <GrStatusGood className='text-green-500'/>{review.deal}</Text>
                        ) : (
                            <Text fontWeight={500} my={3} className='flex items-center gap-1'>Deal: <GrStatusGood className='text-blue-500'/>{review.deal}</Text>
                        )
                    }
                    <Text fontWeight={500} my={3} className='flex items-center'>Price: <BsCurrencyDollar/> {review.price}</Text>
                    <Button bg={useColorModeValue('white')} color={useColorModeValue('blue.500')}>
                        <LuShoppingCart className='text-xl'/>
                    </Button>
                </Flex>
            </Box>
        </Box>
        <Box maxW={'100%'} mx={'auto'} mt={6}>
            <Flex justifyContent={'center'} position={'relative'}>
                <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
                <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
            </Flex>
            <Flex mt={10} gap={3} mx={5} justifyContent={'center'} flexWrap={'wrap'}>
                {
                    item.length > 0 ? (
                        item.map((item) => (
                            <Box width={{md: '300px', base: '100%'}} bg={useColorModeValue('gray.200')} padding={3} rounded={5}>
                                <Flex justifyContent={'center'} width={'100%'} height={'200px'} bg={useColorModeValue('white')} p={2} rounded={5}>
                                    <Image src={item.BumperImage[0]} maxW={'100%'} rounded={5}/>
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
                                            <Link to={`/bumper-reviews/${item._id}`} className='text-blue-500'>Review</Link>
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
