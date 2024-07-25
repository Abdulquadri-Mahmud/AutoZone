import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import AdminThemes from './AdminThemes'
import { FaHome, FaUser } from 'react-icons/fa'
import { IoCarSportSharp } from 'react-icons/io5'
import { AdminDashboardContext } from '../pages/AdminDashboardPage'
import { TbAutomaticGearbox } from 'react-icons/tb'
import { GrManual } from 'react-icons/gr'
import { Link } from 'react-router-dom'

export default function Dashboard() {
    const cars = useContext(AdminDashboardContext);
    const [users, setUsers] = useState({});
    const [loading, setLoading] = useState(false);

    const automaticArray = [] 
    const manualArray = [] 
    
    if (cars.length > 0) {
        cars.map((car) => {
        if (car.transmission === 'Automatic') {
            automaticArray.push(car.transmission)
        }
        })
    }

    if (cars.length > 0) {
        cars.map((car) => {
        if (car.transmission === 'Manual') {
            manualArray.push(car.transmission)
        }
        })
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
        <Flex justifyContent={'end'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={useColorModeValue('black', 'gray.300')}>
            {/* <Heading fontSize={25} fontWeight={500} color={'white'} fontFamily={'oblique'}>Dashboard</Heading> */}
            <Flex gap={1} alignItems={'center'} bg={useColorModeValue('white', 'gray.600')} pr={4} rounded={5}>
                <AdminThemes/>
                <Link to={'/'}>
                    <FaHome className='text-2xl'/>
                </Link>
            </Flex>
        </Flex>
        <Flex gap={5} justifyContent={'center'} color={'white'} mt={5} px={4}>
            <Box width={'25%'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
                <Flex alignItems={'center'} gap={2}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                        <IoCarSportSharp className='text-3xl'/>
                    </Flex>
                    <Text fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Total Cars List</Text>
                </Flex>
                <Flex justifyContent={'end'} mt={10}>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                        <Text fontWeight={500} fontSize={20} color={useColorModeValue('black', 'gray.400')}>{cars.length}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box width={'25%'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
                <Flex alignItems={'center'} gap={2}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                        <TbAutomaticGearbox className='text-3xl'/>
                    </Flex>
                    <Text fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Automatic</Text>
                </Flex>
                <Flex justifyContent={'end'} mt={10}>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                        <Text fontWeight={500} fontSize={20} color={useColorModeValue('black', 'gray.400')}>{automaticArray.length}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box width={'25%'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
                <Flex alignItems={'center'} gap={2}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                        <GrManual className='text-3xl'/>
                    </Flex>
                    <Text fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>Manual</Text>
                </Flex>
                <Flex justifyContent={'end'} mt={10}>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                        <Text fontWeight={500} fontSize={20} color={useColorModeValue('black', 'gray.400')}>{manualArray.length}</Text>
                    </Flex>
                </Flex>
            </Box>
            <Box width={'25%'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
                <Flex alignItems={'center'} gap={2}>
                    <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={useColorModeValue('white', 'gray.600')} color={useColorModeValue('black', 'gray.300')} rounded={8}>
                        <FaUser className='text-3xl'/>
                    </Flex>
                    <Text fontSize={{'2xl': 20, md: 20}} fontWeight={500} color={useColorModeValue('white', 'gray.400')}>All Users</Text>
                </Flex>
                <Flex justifyContent={'end'} mt={10}>
                    <Flex justifyContent={'center'} alignItems={'center'} rounded={5} boxSize={35} bg={useColorModeValue('white', 'gray.600')}>
                        {
                            users.length > 0 ? (
                                <Text fontWeight={500} fontSize={20} color={useColorModeValue('black', 'gray.400')}>{users.length}</Text>
                            ) : (
                                <Text fontWeight={500} fontSize={20} color={useColorModeValue('black', 'gray.400')}>0</Text>
                            )
                        }
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
