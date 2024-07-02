import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function Loader() {
    const [cars, setCar] = useState({});

    useEffect(() => {
        const fetCars = async () => {
            try {
              const res = await fetch('/api/cars/allcarlists');
    
              const data = await res.json();
              setCar(data);
            } catch (error) {
              // setError(error);
              console.log(error);
            }
        }
    
        fetCars();
       }, []);


  return (
    <Flex justifyContent={'center'} flexWrap={'wrap'} gap={4} py={'5rem'}>
        {
            cars.length > 0 ? (
                cars.map((car) => (
                  <Box key={car._id} width={{md: '350px', base: '100%'}} padding={3} bg={useColorModeValue('white')} shadow={'md'} borderRadius={5} position={'relative'} className='font-medium'>
                    <Box width={'100%'} mt={4} position={'relative'}>
                      <Box maxW={'100%'} height={'250'} bg={'gray.200'}></Box>
                      <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.300')} px={2} py={3} width={'60px'} rounded={4}></Box>
                    </Box>
      
                    <Flex justifyContent={'space-between'} mt={4}>
                      <Text bg={'gray.200'} p={1} width={'30%'}></Text>
                      <Text bg={'gray.200'} p={1} width={'30%'}></Text>
                    </Flex>
      
                    <Flex justifyContent={'space-between'} alignItems={'center'}>
                      <Box bg={'gray.300'} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2} p={4} width={'50px'}></Box>
                      <Box  position={'absolute'} top={2} right={2}>
                        {/* <SaveCar/> */}
                      </Box>
                    </Flex>
      
                    <Flex gap={1} className="rate" mt={2}>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                    </Flex>
                    <Flex justifyContent={'space-between'} mt={2}>
                      <Text bg={useColorModeValue('gray.300')} p={2} width={'120px'}></Text>
                      <Text bg={useColorModeValue('gray.300')} className='flex items-center gap-1 font-bold p-1 w-[60px]'></Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} mt={2}>
                      <Text bg={useColorModeValue('gray.300')} p={2} width={'120px'}></Text>
                      <Text bg={useColorModeValue('gray.300')} className='flex items-center gap-1 font-bold p-1 w-[60px]'></Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} mt={2}>
                      <Text bg={useColorModeValue('gray.300')} p={2} width={'120px'}></Text>
                      <Text bg={useColorModeValue('gray.300')} className='flex items-center gap-1 font-bold p-1 w-[60px]'></Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} mt={2}>
                      <Text bg={'gray.200'} p={1} width={'50%'}></Text>
                      <Text className='flex items-center gap-1 font-bold'><span className='flex items-center'><IoLocationOutline className='text-gray-300'/><span className='p-1 bg-gray-300 w-[60px]'></span></span></Text>
                    </Flex>
                    <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                      <Box bg={'gray.300'} className='p-2  w-[65px]'></Box>
                      <Box>
                        <Button _hover={{bg: ''}} _focus={{bg: ''}}><LuShoppingCart className='text-xl text-gray-300'/></Button>
                      </Box>
                    </Flex>
                  </Box>
                ))
              ) : (
                <Box>
                  <Text fontSize={20} fontWeight={500} textAlign={'center'}>No Car To Display1</Text>
                </Box>
              )
        }
    </Flex>
  )
}
