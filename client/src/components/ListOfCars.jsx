import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosSpeedometer } from 'react-icons/io';
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { createContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ListOfCars() {
  const [getAllCar, setGetAllCar] = useState({});

  let navigate = useNavigate();

  useEffect(() => {
    try {
      const fetchAllcar = async () => {
        const res = await fetch('/api/cars/allcarlists');
        const data = await res.json();
        setGetAllCar(data);
      }

      fetchAllcar();

    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleLinkClick = () => {
    setTimeout(() => {
      navigate(window,location.reload(true))
    }, 100)
  }

  return (
    <Box maxW={'100%'} mx={'auto'} mt={10}>
        <Flex justifyContent={'center'} position={'relative'}>
            <Heading fontWeight={500} fontSize={26} textAlign={'center'}>YOU MAY ALSO LIKE</Heading>
            <Image src='/zigzag.png' position={'absolute'} bottom={-10}/>
        </Flex>
        <Flex flexDir={'column'} color={'gray.700'} gap={4} maxW={{md: '96%', base: '96%'}} mx={'auto'} mt={10}>
          {
            getAllCar.length > 0 ? (
              getAllCar.map((car) => (
                <Flex gap={{md: 10, base: 3}} justifyContent={'start'} flexWrap={'wrap'} rounded={5} key={car._id} bg={useColorModeValue('gray.200')} mb={3} padding={6} position={'relative'}>
                <Box width={{md: '30%', base: '100%'}} bg={useColorModeValue('white')} mt={4} position={'relative'}>
                  <Image src={car.carimage[0]} alt={car.name} maxW={'100%'} height={'250px'} objectFit={'contain'}></Image>
                  <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.100')} px={2} py={1} rounded={4}>
                    <Text className='text-sm font-medium'>{car.carimage.length} Photos</Text>
                  </Box>
                </Box>
                <Box width={{md: '30%', base: '100%'}} >
                  <Flex justifyContent={'space-between'} mt={4}>
                    <Heading fontSize={30} fontWeight={500}><span>{car.year} </span>{car.name}</Heading>
                    <Text className='flex items-center gap-1 text-sm text-gray-500 font-medium'><span className='text-gray-400'><IoIosSpeedometer/></span> {car.miles} miles</Text>
                  </Flex>
                  <Flex alignItems={'center'} gap={1} className="rate" mt={2}>
                      <Text fontWeight={500}>Rating</Text>
                      <IoStar className='text-yellow-300'/>
                      <IoStar className='text-yellow-300'/>
                      <IoStar className='text-yellow-300'/>
                      <IoStar className='text-yellow-300'/>
                      <IoStar className='text-gray-300'/>
                    </Flex>
                    <Box mt={4} rounded={5} bg={useColorModeValue('gray.100', '')} height={'150px'} p={4} width={'full'}>
                      <Text fontWeight={500}>{car.description.slice(0, 200)}...</Text>
                    </Box>
                </Box>
                <Box width={{md: '30%', base: '100%'}} >
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
                  <Flex justifyContent={'space-between'} mt={2}>
                    <Text className='flex items-center gap-1 font-bold' color={'gray.600'}>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</span></Text>
                    <Text className='flex items-center gap-1 font-bold' color={'gray.600'}><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{car.location}</span></Text>
                  </Flex>
                  <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                    <Box bg={'gray.100'} p={2} rounded={4}>
                      <Link onClick={handleLinkClick} to={`/car-details/${car._id}`} className='text-blue-500 font-medium'>Review</Link>
                    </Box>
                    <Box>
                      <Button><LuShoppingCart className='text-xl text-blue-500'/></Button>
                    </Box>
                  </Flex>
                </Box>
                <Box bg={'blue.500'} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
                  <Text>{car.condition}</Text>
                </Box>
              </Flex>
              ))
            ) : ''
          }
        </Flex>
      </Box>
  )
}
