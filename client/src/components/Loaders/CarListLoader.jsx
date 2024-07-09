import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';

export default function CarListLoader() {

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
    <Box py={'3rem'}>
      <Flex flexDir={'column'} gap={4} maxW={{md: '96%', base: '96%'}} mx={'auto'} className='animate-pulse'>
        {
          cars.length > 0 ? (
            cars.map((car) => (
              <Flex gap={{md: 10, base: 3}} justifyContent={'start'} flexWrap={'wrap'} rounded={5} key={car._id} bg={useColorModeValue('gray.200')} mb={3} padding={6} position={'relative'}>
                <Box width={{md: '30%', base: '100%'}} bg={useColorModeValue('gray.300')} position={'relative'}>
                  <Box height={'250px'} max={'100%'}></Box>
                  <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.300')} px={2} py={1} rounded={4}>
                    <Text className='text-sm font-medium'></Text>
                  </Box>
                </Box>
                <Box width={{md: '30%', base: '100%'}}>
                  <Flex justifyContent={'space-between'} p={2}>
                    <Heading fontSize={30} fontWeight={500} p={2} bg={useColorModeValue('gray.300')} width={'150px'}></Heading>
                    <Text p={2} bg={useColorModeValue('gray.300')} width={'60px'}></Text>
                  </Flex>
                  <Flex gap={1} className="rate" mt={2}>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                      <IoStar className='text-gray-300'/>
                  </Flex>
                  <Box mt={4} rounded={5} bg={useColorModeValue('gray.300', '')} height={'150px'} width={'full'}></Box>
                </Box>
                <Box width={{md: '30%', base: '100%'}}>
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
                    <Text bg={useColorModeValue('gray.300')} p={2} width={'120px'}></Text>
                    <Text className='flex items-center gap-1 font-bold'><span className='flex items-center'><IoLocationOutline className='text-gray-300'/><span className='p-1 bg-gray-100 w-[60px]'></span></span></Text>
                  </Flex>
                  <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                    <Box bg={'gray.300'} className='p-2  w-[65px]'></Box>
                    <Box>
                      <Button _hover={{bg: ''}} _focus={{bg: ''}}><LuShoppingCart className='text-xl text-gray-300'/></Button>
                    </Box>
                  </Flex>
                </Box>
              </Flex>
            ))
          ) : (
            <></>
          )
        }
      </Flex>
    </Box>
  )
}
