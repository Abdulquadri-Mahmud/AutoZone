import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import { useContext, useRef } from 'react';

import { CarDetailsContext } from '../../pages/CarDetails'
import { IoLocationOutline, IoStar } from 'react-icons/io5';
import { BsCurrencyDollar } from 'react-icons/bs';

export default function CarDetails() {

  const item = useContext(CarDetailsContext);
  console.log(item);

  // let switchImage = useRef(null);
   
  // let display = useRef(null);
  
  // const handleClick = (img) => {
  //     display.current.src = img;
  // }

  return (
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
            <Button bg={useColorModeValue('blue.500')} _hover={{bg: useColorModeValue('blue.400')}} color={useColorModeValue('white')}>Add To cart</Button>
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
  )
}
