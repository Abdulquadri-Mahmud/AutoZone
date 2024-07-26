import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react'

import { useContext, useRef, useState, useEffect } from 'react';

import { CarDetailsContext } from '../../pages/CarDetails'
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';
import { useSelector } from 'react-redux';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <Box top={{md: '35vh', base: ''}} _hover={{bg: useColorModeValue('blue.400', 'gray.700')}} rounded={'50%'} pl={3} pt={3} bg={useColorModeValue('blue.500', 'gray.800')} boxSize={45} className={className}
      style={{ ...style, display: "block", right: '2vh'}} onClick={onClick}/>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
      <Box top={{md: '35vh', base: ''}} _hover={{bg: useColorModeValue('blue.400', 'gray.700')}} rounded={'50%'} pl={3} pt={3} bg={useColorModeValue('blue.500', 'gray.800')} boxSize={45} className={className}
      style={{ ...style, display: "block",left: '2vh', zIndex: '1'}} onClick={onClick}/>
  );
}


export default function CarDetails() {
  const item = useContext(CarDetailsContext);

  let emptyCart = []

  const cartItem = {
    name: item.name,
    make: item.make,
    model: item.model,
    price: item.price,
    condition: item.condition,
    miles: item.miles,
    location: item.location,
    deal: item.deal,
    year: item.year,
    exteriorColor: item.exteriorColor,
    interiorColor: item.interiorColor,
    transmission: item.transmission,
    image: item.carimage
  };
  const handleAddToCart = () => {
    emptyCart.push({...cartItem});
    localStorage.setItem('Selected Item', JSON.stringify(emptyCart));
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
};
  
  return (
    <Flex flexWrap={'wrap'} gap={5} maxW={{md: '95%', base: '97%'}} mx={'auto'} rounded={5} padding={{md: 8, base: 4}} color={useColorModeValue('black')} bg={useColorModeValue('gray.200', 'gray.700')} mt={'3rem'}>
      <Box width={{md: '45%', base: '100%'}} position={'relative'} rounded={5}>
        <Box height={{md: '400px'}}>
          {
            item.carimage === undefined ? '' : (
              <Slider {...settings}>
                {
                  item.carimage && item.carimage.length > 0 && item.carimage.map((img, index) => (
                    <Box key={index} height={'100%'}>
                      <Image rounded={5} maxW={'100%'} maxH={'100%'} src={img} />
                    </Box>
                    ))
                }
              </Slider>
            )
          }
        </Box>
        <Box position={'absolute'} bottom={{md: 9, base: 3}} bg={useColorModeValue('gray.200', 'gray.700')} px={2} py={2} roundedTopRight={4}>
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
      <Box width={{md: '50%', base: '100%'}} bg={useColorModeValue('')} color={useColorModeValue('black','gray.300')}>
        <Heading fontSize={30}>{item.name}</Heading>
        <Text fontWeight={400} mt={4}>{item.description}</Text>
        <Box>
          <Flex alignItems={'center'} gap={1} className="rate" mt={8}>
            <Text fontWeight={500}>Rating </Text>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-yellow-300'/>
            <IoStar className='text-gray-300'/>
          </Flex>
          <Flex justifyContent={'space-between'} mt={{md: 8, base: 4}}>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Exterior Color: <span className='font-medium'>{item.exteriorColor}</span></Text>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Interior Color: <span className='font-medium'>{item.interiorColor}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2}>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Make: <span className='font-medium'>{item.make}</span></Text>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Model: <span className='font-medium'>{item.model}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2}>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Transmission: <span className='font-medium'>{item.transmission}</span></Text>
            <Text color={useColorModeValue('black','gray.300')} fontSize={15} className='font-normal'>Deal: <span className='font-medium'>{item.deal}</span></Text>
          </Flex>
          <Flex justifyContent={'space-between'} mt={2} color={useColorModeValue('black','gray.300')}>
            <Text className='flex items-center gap-1 font-normal'>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{item.price}</span></Text>
            <Text className='flex items-center gap-1 font-normal'><span className='flex items-center font-medium'><IoLocationOutline className='text-blue-500'/>{item.location}</span></Text>
          </Flex>
          <Box mt={4}>
            <Button onClick={handleAddToCart} bg={useColorModeValue('blue.500')} _hover={{bg: useColorModeValue('blue.400')}} color={useColorModeValue('white')}>Add To cart</Button>
          </Box>
        </Box>
      </Box>
      <Box width={'100%'} mt={10}>
        <Heading textAlign={'center'} fontWeight={500} fontSize={20}>Addintional Info</Heading>
        <TableContainer bg={useColorModeValue('white', 'gray.800')}p={4} mt={4} rounded={5} className='scroll'>
          <Table variant={'simple'}>
            {/* <TableCaption fontWeight={500} fontSize={20} color={useColorModeValue('gray.800')} textDecor={'underline'}>More Details</TableCaption> */}
            <Thead>
              <Tr>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Make</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Model</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Price</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>miles</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Deal</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>year</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Exterior color</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Interior color</Th>
                <Th color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>Transmission</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.make}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.model}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.price}.00</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.miles}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.deal}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.year}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.exteriorColor}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.interiorColor}</Td>
              <Td color={useColorModeValue('black', 'gray.300')} fontWeight={500} fontSize={14} fontStyle={'oblique'}>{item.transmission}</Td>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  )
}
