import { Box, Button, Flex, Heading, Image, TabIndicator, Text, useColorModeValue } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'

import { BsGrid3X3GapFill } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';

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
    <Box>
        <Flex justifyContent={'start'} flexWrap={'wrap'} gap={2}>
            {
                cars.length > 0 ? (
                    cars.map((car) => (
                        <Box key={car._id} width={{lg: '32%',md: '45%', base: '100%'}} padding={3} shadow={'md'} rounded={5} borderWidth={1} borderColor={useColorModeValue('blue.', 'gray.600')} bg={useColorModeValue('white', 'gray.700')} borderRadi3s={5} position={'relative'} className='font-medium'>
                            <Box width={'100%'} mt={4} position={'relative'} height={{md: '250px', base: ''}} bg={useColorModeValue('white', 'gray.800')} rounded={5}>
                                <Image src={car.carimage[0]} alt={car.name} w={'100%'} rounded={5} maxHeight={'100%'} objectFit={'cover'}></Image>
                                <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.200', 'gray.700')}  px={4} py={2} roundedTopRight={5}>
                                    <Text className='text-sm'>{car.carimage.length} Photos</Text>
                                </Box>
                            </Box>
                            <Flex justifyContent={'space-between'} mt={4}>
                                <Text><span>{car.year} </span>{car.name}</Text>
                                <Text className='flex items-center gap-1 text-sm'><span className='text-gray-500'><IoIosSpeedometer/></span> {car.miles} miles</Text>
                            </Flex>
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Box bg={useColorModeValue('blue.500','gray.700')} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
                                    <Text>{car.condition}</Text>
                                </Box>
                                <Box  position={'absolute'} top={2} right={2}>
                                    {/* <SaveCar/> */}
                                </Box>
                            </Flex>
                            <Flex gap={1} className="rate" mt={2}>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-gray-300'/>
                            </Flex>
                            <Flex justifyContent={'space-between'} mt={{md: 6, base: 4}}>
                                <Text width={'45%'} color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Exterior Color: <span className='font-medium'>{car.exteriorColor.slice(0, 30)}</span></Text>
                                <Text width={'45%'} color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Interior Color: <span className='font-medium'>{car.interiorColor.slice(0, 30)}</span></Text>
                            </Flex>
                            <Flex justifyContent={'space-between'} mt={2}>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Make: <span className='font-medium'>{car.make}</span></Text>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Model: <span className='font-medium'>{car.model}</span></Text>
                            </Flex>
                            <Flex justifyContent={'space-between'} mt={2}>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Transmission: <span className='font-medium'>{car.transmission}</span></Text>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={15} className='font-bold'>Deal: <span className='font-medium'>{car.deal}</span></Text>
                            </Flex>
                            <Flex justifyContent={'space-between'} mt={2}>
                                <Text className='flex items-center gap-1 font-bold'>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</span></Text>
                                <Text className='flex items-center gap-1 font-bold'><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{car.location}</span></Text>
                            </Flex>
                            <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                <Box>
                                    <Link to={`/car-details/${car._id}`} className='text-blue-500'>Review</Link>
                                </Box>
                                <Box>
                                    <Button onClick={() => handleAddToCart(car)}><LuShoppingCart className='text-xl text-blue-500'/></Button>
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
