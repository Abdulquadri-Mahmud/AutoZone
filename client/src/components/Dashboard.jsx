import { Box, CircularProgress, CircularProgressLabel, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { IoCarSportSharp } from 'react-icons/io5'
import { AdminDashboardContext } from '../pages/AdminDashboardPage'
import { TbAutomaticGearbox } from 'react-icons/tb'
import { GrManual } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const cars = useContext(AdminDashboardContext);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(false);

    const automatic = [];
    const manual = [];
    
    if (cars.length > 0) {
        cars.map((car) => {
          if (car.transmission === 'Automatic' || car.transmission === 'automatic') {
            automatic.push(car.transmission);
          }
    
          if (car.transmission === 'Manual' || car.transmission === 'manual') {
            manualList.push(car);
          }
        });
    }

  useEffect(() => {
    const fetchAllUser = async () => {
        setLoading(true);

        const res = await fetch('/api/user/allusers');

        const data = await res.json();
        setUsers(data);
        setLoading(false)
    }
    fetchAllUser();
  }, []);

  return (
    <Box>
        <Flex gap={5} justifyContent={{md: 'center', base: 'start'}} flexWrap={'wrap'} color={'white'} mt={5} px={4}>
            <Box width={{'2xl':'24%', xl:'23%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
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
            <Box width={{'2xl':'24%', xl:'23%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
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
            <Box width={{'2xl':'24%', xl:'23%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
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
            <Box width={{'2xl':'24%', xl:'23%', md:'47%', base:'47%'}} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
                <Flex alignItems={'center'} gap={2}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={35} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                        <FaUser className='text-2xl'/>
                    </Flex>
                    <Text fontSize={{'2xl': 20, md: 16}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>All Users</Text>
                </Flex>
                <Flex justifyContent={'space-between'} mt={10}>
                    <CircularProgress value={Math.round(users.length * 1 / 100 * 100)} color='red.500' thickness='8px'>
                        <CircularProgressLabel>{Math.round(users.length * 1 / 100 * 100)}%</CircularProgressLabel>
                    </CircularProgress>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                        {
                            users.length > 0 ? (
                                <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>
                                    {users.length}
                                </Text>
                            ) : (
                                <Text fontWeight={500} fontSize={{'2xl': 20, md: 16}} color={useColorModeValue('black', 'gray.400')}>0</Text>
                            )
                        }
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
