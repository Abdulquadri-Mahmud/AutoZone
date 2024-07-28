import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import AdminThemes from './AdminThemes'
import { FaHome } from 'react-icons/fa';
import { MdCarCrash } from "react-icons/md";
import { TbAutomaticGearbox } from 'react-icons/tb';
import { GrManual } from 'react-icons/gr';
import { IoCarSportSharp } from 'react-icons/io5';

import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { RiListView } from "react-icons/ri";
import { MdDelete } from "react-icons/md";
import { LuClipboardEdit } from "react-icons/lu";

import { Link } from 'react-router-dom';

export default function CarListings() {
  const [cars, setCars] = useState({});

  useEffect(() => {
    const fetCars = async () => {
      try {
        const res = await fetch('/api/cars/allcar');

        const data = await res.json();
        setCars(data);
        
      } catch (error) {
        setError(error);
      }
  }

  fetCars();

  }, []);

  const automaticList = [];
  const manualList = [];
  const usedCarList = [];
  const newCarList = [];

  const automatic = [];
  const manual = [];
  const usedCar = [];
  const newCar = [];

  if (cars.length > 0) {
    cars.map((car) => {
      if (car.transmission === 'Automatic' || car.transmission === 'automatic') {
        automatic.push(car.transmission);
        automaticList.push(car);
      }

      if (car.transmission === 'Manual' || car.transmission === 'manual') {
        manual.push(car.transmission)
        manualList.push(car);
      }

      if (car.condition === 'used' || car.condition === 'Used') {
        usedCar.push(car.condition);
        usedCarList.push(car);
      }

      if (car.condition === 'new' || car.condition === 'New') {
        newCar.push(car.condition);
        newCarList.push(car);
      }
    });
  }
    
  return (
    <Box>
        {/* <Box p={4} color={'black'}>
            <Heading fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('black', 'gray.300')}>Car Listings</Heading>
        </Box> */}
        <Flex gap={5} justifyContent={{md: 'center', base: 'start'}} flexWrap={'wrap'} color={'white'} mt={5} px={4}>
          <Box width={{'2xl':'19%', xl:'18%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                  <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                      <IoCarSportSharp className='text-2xl'/>
                  </Flex>
                  <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Total Cars List</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} mt={10}>
                <CircularProgress value={Math.round(cars.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                  <CircularProgressLabel>{Math.round(cars.length * 1 / 100 * 100)}%</CircularProgressLabel>
                </CircularProgress>
                <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                    <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>{cars.length}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box width={{'2xl':'19%', xl:'18%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                  <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                      <TbAutomaticGearbox className='text-2xl'/>
                  </Flex>
                  <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Automatic</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} mt={10}>
                <CircularProgress value={Math.round(automatic.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                  <CircularProgressLabel>{Math.round(automatic.length * 1 / 100 * 100)}%</CircularProgressLabel>
                </CircularProgress>
                <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                    <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>{automatic.length}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box width={{'2xl':'19%', xl:'18%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                  <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                      <GrManual className='text-2xl'/>
                  </Flex>
                  <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Manual</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} mt={10}>
                <CircularProgress value={Math.round(manual.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                  <CircularProgressLabel>{Math.round(manual.length * 1 / 100 * 100)}%</CircularProgressLabel>
                </CircularProgress>
                  <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                      <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>{manual.length}</Text>
                  </Flex>
              </Flex>
            </Box>
            <Box width={{'2xl':'19%', xl:'18%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                  <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                      <MdCarCrash className='text-2xl'/>
                  </Flex>
                  <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Used</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} mt={10}>
                <CircularProgress value={Math.round(usedCar.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                  <CircularProgressLabel>{Math.round(usedCar.length * 1 / 100 * 100)}%</CircularProgressLabel>
                </CircularProgress>
                <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                    <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>{usedCar.length}</Text>
                </Flex>
              </Flex>
            </Box>
            <Box width={{'2xl':'19%', xl:'18%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                  <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                      <MdCarCrash className='text-2xl'/>
                  </Flex>
                  <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>New</Text>
              </Flex>
              <Flex justifyContent={'space-between'} alignItems={'center'} mt={10}>
                <CircularProgress value={Math.round(newCar.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                  <CircularProgressLabel>{Math.round(newCar.length * 1 / 100 * 100)}%</CircularProgressLabel>
                </CircularProgress>
                <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                    <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>{newCar.length}</Text>
                </Flex>
              </Flex>
            </Box>
        </Flex>

        <Flex gap={7} justifyContent={'space-between'} flexWrap={'wrap'} my={16} px={5}>
          <Box width={{md: '48%', base: '97%'}} overflow='auto'>
            <Heading fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('black', 'gray.400')}>Automatic Cars</Heading>
            <Flex mt={{md: 5, base: 7}} flexDir={'column'} justifyContent={'center'} gap={3} rounded={5} overflow={'hidden'} height={{md: '300px', base: '400px'}} bg={useColorModeValue('blue.500', 'gray.700')} p={2} className='scroll carListHover'>
                {
                  automaticList.length > 0 && automaticList.map((item, index) => (
                    <Flex gap={2} alignItems={'center'} justifyContent={'space-between'} key={index} bg={useColorModeValue('white', 'gray.800')} rounded={5} px={2} py={2}>
                      <Flex alignItems={'center'} boxSize={{md:'70px', base: '50px'}}>
                        <Image maxW={'100%'} objectFit={'contain'} rounded={5} src={item.carimage}/>
                      </Flex>
                      <Box><Text fontSize={13} fontWeight={500} >{item.name.slice(0, 10)}</Text></Box>
                      <Box><Text fontSize={13} fontWeight={500} >{item.transmission}</Text></Box>
                      <Box bg={useColorModeValue('blue.500', 'gray.700')} coolor={useColorModeValue('white', 'blue.500')} py={1} px={2} rounded={3}><Link to={`/car-details/${item._id}`} className='text-lg text-blue-500 font-medium'><RiListView/></Link></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><MdDelete className='text-red-500 text-lg'/></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><LuClipboardEdit className='text-blue-500 text-lg'/></Box>
                    </Flex>
                  ))
                }
            </Flex>
          </Box>
          <Box width={{md: '48%', base: '97%'}}mt={{md: 0, base: 7}}>
            <Heading fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('black', 'gray.400')}>Manual Cars</Heading>
            <Flex mt={{md: 5, base: 7}} flexDir={'column'} justifyContent={'center'} gap={3} rounded={5} overflow={'hidden'} height={{md: '300px', base: '400px'}} bg={useColorModeValue('blue.500', 'gray.700')} p={2} className='scroll carListHover'>
                {
                  manualList.length > 0 && manualList.map((item, index) => (
                    <Flex gap={2} alignItems={'center'} justifyContent={'space-between'} key={index} bg={useColorModeValue('white', 'gray.800')} rounded={5} px={2} py={2}>
                      <Flex alignItems={'center'} boxSize={{md:'70px', base: '50px'}}>
                        <Image maxW={'100%'} objectFit={'contain'} rounded={5} src={item.carimage}/>
                      </Flex>
                      <Box><Text fontSize={13} fontWeight={500} >{item.name.slice(0, 10)}</Text></Box>
                      <Box><Text fontSize={13} fontWeight={500} >{item.transmission}</Text></Box>
                      <Box bg={useColorModeValue('blue.500', 'gray.700')} coolor={useColorModeValue('white', 'blue.500')} py={1} px={2} rounded={3}><Link to={`/car-details/${item._id}`} className='text-lg text-blue-500 font-medium'><RiListView/></Link></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><MdDelete className='text-red-500 text-lg'/></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><LuClipboardEdit className='text-blue-500 text-lg'/></Box>
                    </Flex>
                  ))
                }
            </Flex>
          </Box>
          <Box width={{md: '48%', base: '97%'}} mt={{md: 0, base: 7}}>
            <Heading fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('black', 'gray.400')}>New Cars</Heading>
            <Flex mt={{md: 5, base: 7}} flexDir={'column'} justifyContent={'center'} gap={3} rounded={5} overflow={'hidden'} height={{md: '300px', base: '400px'}} bg={useColorModeValue('blue.500', 'gray.700')} p={2} className='scroll carListHover'>
                {
                  usedCarList.length > 0 && usedCarList.map((item, index) => (
                    <Flex gap={2} alignItems={'center'} justifyContent={'space-between'} key={index} bg={useColorModeValue('white', 'gray.800')} rounded={5} px={2} py={2}>
                      <Flex alignItems={'center'} boxSize={{md:'70px', base: '50px'}}>
                        <Image maxW={'100%'} objectFit={'contain'} rounded={5} src={item.carimage}/>
                      </Flex>
                      <Box><Text fontSize={13} fontWeight={500} >{item.name.slice(0, 10)}</Text></Box>
                      <Box><Text fontSize={13} fontWeight={500} >{item.condition}</Text></Box>
                      <Box bg={useColorModeValue('blue.500', 'gray.700')} coolor={useColorModeValue('white', 'blue.500')} py={1} px={2} rounded={3}><Link to={`/car-details/${item._id}`} className='text-lg text-blue-500 font-medium'><RiListView/></Link></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><MdDelete className='text-red-500 text-lg'/></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><LuClipboardEdit className='text-blue-500 text-lg'/></Box>
                    </Flex>
                  ))
                }
            </Flex>
          </Box>
          <Box width={{md: '48%', base: '97%'}} mt={{md: 0, base: 7}}>
            <Heading fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('black', 'gray.400')}>Used Cars</Heading>
            <Flex mt={{md: 5, base: 7}} flexDir={'column'} justifyContent={'center'} gap={3} rounded={5} overflow={'hidden'} height={{md: '300px', base: '400px'}} bg={useColorModeValue('blue.500', 'gray.700')} p={2} className='scroll carListHover'>
                {
                  newCarList.length > 0 && newCarList.map((item, index) => (
                    <Flex gap={2} alignItems={'center'} justifyContent={'space-between'} key={index} bg={useColorModeValue('white', 'gray.800')} rounded={5} px={2} py={2}>
                      <Flex alignItems={'center'} boxSize={{md:'70px', base: '50px'}}>
                        <Image maxW={'100%'} objectFit={'contain'} rounded={5} src={item.carimage}/>
                      </Flex>
                      <Box><Text fontSize={13} fontWeight={500} >{item.name.slice(0, 10)}</Text></Box>
                      <Box><Text fontSize={13} fontWeight={500} >{item.condition}</Text></Box>
                      <Box bg={useColorModeValue('blue.500', 'gray.700')} coolor={useColorModeValue('white', 'blue.500')} py={1} px={2} rounded={3}><Link to={`/car-details/${item._id}`} className='text-lg text-blue-500 font-medium'><RiListView/></Link></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><MdDelete className='text-red-500 text-lg'/></Box>
                      <Box bg={useColorModeValue('', 'gray.700')} py={1} px={2} rounded={3}><LuClipboardEdit className='text-blue-500 text-lg'/></Box>
                    </Flex>
                  ))
                }
            </Flex>
          </Box>
        </Flex>
    </Box>
  )
}
