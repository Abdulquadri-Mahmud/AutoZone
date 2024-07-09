import { Box, Button, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosSpeedometer } from 'react-icons/io';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { Link } from 'react-router-dom';

export default function CarGrid() {
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
                <Box width={'100%'} height={'250px'} bg={useColorModeValue('gray.200')}>
                  <Image src={car.carimage[0]} alt={car.name} maxW={'100%'} objectFit={'contain'}></Image>
                </Box>
                <Box position={'absolute'} bottom={0} bg={useColorModeValue('white')} px={2} py={1} rounded={4}>
                  <Text className='text-sm'>{car.carimage.length} Photos</Text>
                </Box>
              </Box>

              <Flex justifyContent={'space-between'} mt={4}>
                <Text><span>{car.year} </span>{car.name}</Text>
                <Text className='flex items-center gap-1 text-sm'><span className='text-gray-500'><IoIosSpeedometer/></span> {car.miles} miles</Text>
              </Flex>

              <Flex justifyContent={'space-between'} alignItems={'center'}>
                <Box bg={'blue.500'} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
                  <Text>{car.condition}</Text>
                </Box>
              </Flex>

              <Flex alignItems={'center'} gap={1} className="rate" mt={2}>
                <Text>Rating </Text>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-yellow-300'/>
                <IoStar className='text-gray-300'/>
              </Flex>
              <Flex justifyContent={'space-between'} mt={{md: 6, base: 4}}>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Exterior Color: <span className='font-medium'>{car.exteriorColor}</span></Text>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Interior Color: <span className='font-medium'>{car.interiorColor}</span></Text>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Make: <span className='font-medium'>{car.make}</span></Text>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Model: <span className='font-medium'>{car.model}</span></Text>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2}>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Transmission: <span className='font-medium'>{car.transmission}</span></Text>
                <Text color={'gray.600'} fontSize={15} className='font-bold'>Deal: <span className='font-medium'>{car.deal}</span></Text>
              </Flex>
              <Flex justifyContent={'space-between'} mt={2} color={'gray.600'}>
                <Text className='flex items-center gap-1 font-bold'>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</span></Text>
                <Text className='flex items-center gap-1 font-bold'><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{car.location}</span></Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                <Box>
                  <Link to={`/car-details/${car._id}`} className='text-blue-500'>Review</Link>
                </Box>
                <Box>
                  <Button><LuShoppingCart className='text-xl text-blue-500'/></Button>
                </Box>
              </Flex>
            </Box>
          ))
        ) : (
          <Box>
            <Text fontSize={20} fontWeight={500} textAlign={'center'}>No Car To Display!</Text>
          </Box>
        )
      }
    </Flex>
  )
}
