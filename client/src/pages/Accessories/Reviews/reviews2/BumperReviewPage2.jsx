import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import { IoStar } from 'react-icons/io5';
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

    let switchImage = useRef(null);
    let display = useRef(null);
    
    const handleClick = (img) => {
        display.current.src = img;
    }

  return (
    <Box>
        <Flex mt={10} gap={6} px={3} py={7} width={{md: '90%', base: '100%'}} mx={'auto'} bg={'gray.200'}>
            <Box width={{md: '300px', base: '100%'}}>
                <Flex justifyContent={{md: 'start', base: 'center'}}>
                    {
                        review.BumperImage === undefined ? '' : (
                            <Flex justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('white')}
                            position={'relative'} height={{md:'350px', base: '300px'}} width={{md:'350px', base: '300px'}} p={3} rounded={5}>
                                <Image src={review.BumperImage[0]} ref={display} maxW={'100%'} rounded={5}/>
                                <Flex justifyContent={'center'} position={'absolute'} top={0} left={0} width={'70px'} borderTopLeftRadius={5} py={1} bg={'gray.200'}>
                                    <Text fontWeight={500}>{review.BumperImage.length} Photo</Text>
                                </Flex>
                            </Flex>
                        )
                    }
                </Flex>
                <Flex alignItems={'center'} justifyContent={'center'} bg={useColorModeValue('')} gap={3} flexWrap={'wrap'}  p={1}>
                    {
                        review.BumperImage === undefined ? '' : (
                            <>
                                {
                                    review.BumperImage.map((img, index) => (
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
            <Box width={{md:'60%', base:'97%'}} mt={5}>
                <Heading fontWeight={500} fontSize={30} isTruncated>{review.name}</Heading>
                <Flex alignItems={'center'} gap={1} className="rate" mt={4}>
                    <Text className='font-medium'>rating: </Text>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-gray-300'/>
                </Flex>
                <Text fontWeight={500} mt={3}>{review.descriptions}</Text>
                <Flex gap={4} mt={2}>
                    <Text className='font-medium'>Make: <span className='font-normal'>{item.make}</span></Text> |
                    <Text className='font-medium'>Year: <span className='font-normal'>{item.year}</span></Text>
                </Flex>
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
        </Flex>
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
                                    <Heading mb={2} fontWeight={500} fontSize={16} color={'blue.500'} isTruncated>{item.name}</Heading>
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
