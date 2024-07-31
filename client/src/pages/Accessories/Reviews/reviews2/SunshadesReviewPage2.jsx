import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useRef, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GrStatusGood } from 'react-icons/gr';
import { IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { Link, useParams } from 'react-router-dom';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import { IoMdImages } from 'react-icons/io';

export default function SunshadesReviewPage2() {
    const [review, setReview] = useState({});
    const [items, setItem] = useState({});

    const {accessoryId} = useParams();

    useEffect(() => {
        const getItem = async () => {
            const fetchItem = await fetch(`/api/accessories/single-accessory/${accessoryId}`);
            const item = await fetchItem.json();
            setReview(item);
        }
        getItem();

    }, []);

    useEffect(()=> {
        const Stereo = async () => {
            try {
                const res = await fetch('/api/accessories/all-accessory');
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
        <Header/>
        <Flex mt={10} flexWrap={'wrap'} gap={6} alignItems={''} px={3} py={7} width={{md: '90%', base: '97%'}} rounded={5} mx={'auto'} bg={useColorModeValue('gray.200', 'gray.700')}>
            <Box width={{md: '40%', base: '100%'}} bg={useColorModeValue('white', 'gray.800')} rounded={10}>
                <Flex justifyContent={{md: 'center', base: 'center'}}>
                    {
                        review.accessoryImage === undefined ? '' : (
                            <Flex justifyContent={'center'} alignItems={'center'} position={'relative'} height={{md:'350px', base: '350px'}} width={{md:'350px', base: '300px'}} p={3} rounded={5}>
                                <Image src={review.accessoryImage[0]} ref={display} w={'100%'} rounded={5}/>
                                <Flex alignItems={'center'} gap={1} position={'absolute'} bottom={0} bg={useColorModeValue('gray.200', 'gray.700')}  px={4} py={2} roundedTopRight={5}>
                                    <IoMdImages/>
                                    <Text className='text-sm'>({review.accessoryImage.length})</Text>
                                    <Text>Photos</Text>
                                </Flex>
                            </Flex>
                        )
                    }
                </Flex>
                <Flex mt={7} mb={4} alignItems={'center'} justifyContent={'center'} bg={useColorModeValue('')} gap={3} flexWrap={'wrap'}  p={1}>
                    {
                        review.accessoryImage === undefined ? '' : (
                            <>
                                {
                                    review.accessoryImage.map((img, index) => (
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
                <Heading fontWeight={500} fontSize={{md: 30, base: 20}}>{review.name}</Heading>
                <Flex alignItems={'center'} gap={1} className="rate" mt={4}>
                    <Text className='font-medium'>rating: </Text>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-yellow-300'/>
                    <IoStar className='text-gray-300'/>
                </Flex>
                <Text fontWeight={500} mt={3} fontSize={{md:14, base:14}} wordBreak={'break-word'}>{review.descriptions}</Text>
                <Flex gap={4} mt={2}>
                    <Text className='font-medium'>Make: <span className='font-normal'>{review.make}</span></Text> |
                    <Text className='font-medium'>Year: <span className='font-normal'>{review.year}</span></Text>
                </Flex>
                {
                        review.specialFeatures && (
                            <Flex gap={2} mt={3} alignItems={'center'}>
                                <Text fontWeight={500} color={useColorModeValue('', 'gray.200')}>Special Features: </Text>
                                <Text fontWeight={500} color={useColorModeValue('', 'gray.400')} fontSize={13}>{review.specialFeatures}</Text>
                            </Flex>
                        )
                    }
                    {
                        review.screenSize && (
                            <Text fontWeight={500} mt={4} color={'blue.500'} fontSize={17}>Screen Size: <span className='text-sm text-white font-medium'>{review.screenSize}</span></Text>
                        )
                    }
                    {
                        review.quantity && review.quantity >= 15 ? (
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
                            <BsCurrencyDollar/> {review.price}.00
                        </Flex>
                    </Flex>
                    {
                        review.prevprice && (
                            <Text fontWeight={500} color={useColorModeValue('', 'gray.500')} fontSize={12} className='flex items-center'>Old-Price: <span className='text-[12px] font-medium flex items-center'><BsCurrencyDollar/> {review.prevprice}</span></Text>
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
        <Box maxW={'100%'} mx={'auto'} mt={6}>
            <Flex justifyContent={'center'} position={'relative'}>
                <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
                <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
            </Flex>
            <Flex mt={20} gap={3} justifyContent={'center'} flexWrap={'wrap'}>
                {
                    items.length > 0 ? (
                        items.map((item) => (
                        item.category === 'Sun Shades' ? (
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
                                            <Link to={`/sunshade-reviews/${item._id}`} className=''>Review</Link>
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
