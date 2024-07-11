import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { LuShoppingCart } from 'react-icons/lu';
import { BsCurrencyDollar } from 'react-icons/bs';
import { IoIosSpeedometer } from 'react-icons/io';
import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react';

export default function CarReviews() {
    const [item, setItem] = useState({});

    const {carID} = useParams();
    useEffect(() => {
        try {
          const fetchCarId = async () => {
            const res = await fetch(`/api/cars/singlecarlists/${carID}`);
            const data = await res.json();
            setItem(data);
          }
          fetchCarId();
        } catch (error) {
          console.log(error);
        }
      }, []);

      const [getAllCar, setGetAllCar] = useState({});

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

    let emptyCart = []

    // const cartItem = {
    //     name: item.name,
    //     make: item.make,
    //     model: item.model,
    //     price: item.price,
    //     condition: item.condition,
    //     miles: item.miles,
    //     location: item.location,
    //     deal: item.deal,
    //     year: item.year,
    //     exteriorColor: item.exteriorColor,
    //     interiorColor: item.interiorColor,
    //     transmission: item.transmission,
    //     image: item.carimage
    // };
    const handleAddToCart = () => {
        emptyCart.push(item);
        localStorage.setItem('selected item', JSON.stringify([...emptyCart]));
    }


    return (
    <Box>
    <Flex flexWrap={'wrap'} gap={5} maxW={{md: '95%', base: '97%'}} mx={'auto'} rounded={5} padding={4} color={useColorModeValue('black')} bg={useColorModeValue('gray.200')} mt={'2rem'}>
      <Box width={{md: '45%', base: '100%'}} position={'relative'} bg={useColorModeValue('white')} rounded={5}>
        <Flex justifyContent={{md: 'start', base: 'center'}} p={2}>
          {
            item.carimage === undefined ? '' : (
              <>
                <Image src={item.carimage[0]} maxW={'full'} objectFit={'contain'} rounded={5}/>
              </>
            )
          }
        </Flex>
        <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.200')} px={2} py={2} rounded={4}>
          {
            item.carimage === undefined ? '' : (
              <>
                <Text className='text-sm' color={useColorModeValue('black')} fontWeight={500}>{item.carimage.length} Photos</Text>
              </>
            )
          }
        </Box>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Box bg={'blue.500'} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
            <Text>{item.condition}</Text>
          </Box>
        </Flex>
      </Box>
      <Box width={{md: '50%', base: '100%'}} bg={useColorModeValue('')}>
        <Heading>{item.name}</Heading>
        <Text fontWeight={500} mt={2}>{item.description}</Text>
        <Box>
          <Flex alignItems={'center'} gap={1} className="rate" mt={2}>
            <Text fontWeight={500}>Rating </Text>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-gray-300'/>
          </Flex>
          <Flex justifyContent={'space-between'} mt={{md: 6, base: 4}}>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Exterior Color: <span className='font-medium'>{item.exteriorColor}</span></Text>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Interior Color: <span className='font-medium'>{item.interiorColor}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2}>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Make: <span className='font-medium'>{item.make}</span></Text>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Model: <span className='font-medium'>{item.model}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2}>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Transmission: <span className='font-medium'>{item.transmission}</span></Text>
            <Text color={'gray.600'} fontSize={15} className='font-bold'>Deal: <span className='font-medium'>{item.deal}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2} color={'gray.600'}>
            <Text className='flex items-center gap-1 font-bold'>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{item.price}</span></Text>
            <Text className='flex items-center gap-1 font-bold'><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{item.location}</span></Text>
          </Flex>
          <Box mt={4}>
            <Button onClick={handleAddToCart} bg={useColorModeValue('blue.500')} _hover={{bg: useColorModeValue('blue.400')}} color={useColorModeValue('white')}>Add To cart</Button>
          </Box>
        </Box>
      </Box>
      <Box width={'100%'} mt={5}>
        <Heading textAlign={'center'} fontWeight={500} fontSize={20}>Addintional Info</Heading>
        <TableContainer bg={useColorModeValue('white')} mt={4} rounded={5}>
          <Table variant={'simple'}>
            {/* <TableCaption fontWeight={500} fontSize={20} color={useColorModeValue('gray.800')} textDecor={'underline'}>More Details</TableCaption> */}
            <Thead>
              <Tr>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Make</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Model</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Price</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>miles</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Deal</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>year</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Exterior color</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Interior color</Th>
                <Th color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Transmission</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.make}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.model}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.price}.00</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.miles}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.deal}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.year}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.exteriorColor}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.interiorColor}</Td>
              <Td color={useColorModeValue('gray.700')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.transmission}</Td>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
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
                      <Link to={`/car-details/${car._id}`} className='text-blue-500 font-medium'>Review</Link>
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
    </Box>
  )
}
