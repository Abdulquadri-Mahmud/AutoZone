 import { Box, Button, Flex, Heading, Image, Stack, TabIndicator, Text, useColorModeValue } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'

import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { IoMdImages } from "react-icons/io";

import { Link } from 'react-router-dom';
import Header from '../Header';
import { FaListUl } from 'react-icons/fa';

export default function HomeListOfCars() {
    const [cars, setCar] = useState({});

    useEffect(() => {
        const fetchCars = async () => {
          try {
            const res = await fetch('/api/cars/allcarlists');
    
            const data = await res.json();
            setCar(data);
          } catch (error) {
            // setError(error);
            console.log(error);
          }
      }
    
      fetchCars();
      }, []);
      
  return (
    <Box p={{md: '1rem', base: '0.5rem'}} px={5} py={{md: 10, base: 10}} mt={'10vh'} maxW={{md: '95%', base: '100%'}} mx={'auto'} rounded={10} bg={useColorModeValue('white', 'gray.700')}>
        <Box mb={10}>
            <Text mb={2} textAlign={'center'}>We Have The Best Car For You Here</Text>
            <Heading fontWeight={500} fontSize={30} textAlign={'center'} color={useColorModeValue('black')}>QUICK LOOK</Heading>
        </Box>
        <Flex justifyContent={'center'} flexWrap={'wrap'} gap={{md: 4, base: 5}}>
            {
                cars.length > 0 ? (
                    cars.map((car) => (
                        <Box key={car._id} width={{md: '24%', base: '350px'}} shadow={'md'} rounded={5} bg={useColorModeValue('white', 'gray.800')} borderRadi3s={5} position={'relative'} className='font-medium'>
                            <Box width={'100%'} position={'relative'} height={{md: '250px', base: ''}} p={3} bg={useColorModeValue('white', 'gray.800')} rounded={5}>
                                <Image src={car.carimage[0]} alt={car.name} w={'100%'} rounded={5} maxHeight={'100%'} objectFit={'cover'}></Image>
                                <Flex alignItems={'center'} gap={1} position={'absolute'} bottom={0} bg={useColorModeValue('white', 'gray.800')}  px={4} py={2} roundedTopRight={5}>
                                    <IoMdImages/>
                                    <Text className='text-sm'>({car.carimage.length})</Text>
                                    <Text>Photos</Text>
                                </Flex>
                            </Box>
                            <Box my={0} px={3} className=''>
                                <Stack justifyContent={'space-between'} mt={4}>
                                    <Text isTruncated color={useColorModeValue('black')}>{car.name}</Text>
                                </Stack>
                                <Flex justifyContent={'space-between'} alignItems={'center'}>
                                    <Box bg={useColorModeValue('green.500','gray.800')} px={3} py={1} color={'white'}  position={'absolute'} top={0} rounded={3} left={0}>
                                        <Text>{car.condition}</Text>
                                    </Box>
                                </Flex>
                                
                                <Flex justifyContent={'space-between'} mt={2}>
                                    <Text color={useColorModeValue('black', 'gray.400')} fontSize={14} className='font-bold'>Transmission: <span className='font-medium'>{car.transmission}</span></Text>
                                    <Text color={useColorModeValue('black', 'gray.400')} fontSize={14} className='font-bold'>Deal: <span className='font-medium'>{car.deal}</span></Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} mt={2}>
                                    <Text className='flex items-center gap-1 font-bold' color={useColorModeValue('black', 'gray.400')} fontSize={14} >Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</span></Text>
                                    <Text className='flex items-center gap-1 font-bold' color={useColorModeValue('black', 'gray.400')} fontSize={14} ><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{car.location}</span></Text>
                                </Flex>
                            </Box>
                            <Flex justifyContent={'center'} p={3}>
                                <Box bg={useColorModeValue('green.500', 'gray.100')} color={useColorModeValue('white', 'black')} width={'100%'} py={3}  rounded={4} textAlign={'center'}>
                                    <Link to={`/car-details/${car._id}`} className=''>Check This Out</Link>
                                </Box>
                            </Flex>
                        </Box>
                    ))
                ) : (
                    <Box>
                        <Text fontSize={20} fontWeight={500} textAlign={'center'}>No car availables </Text>
                    </Box>
                )
            }
        </Flex>
    </Box>
  )
}
