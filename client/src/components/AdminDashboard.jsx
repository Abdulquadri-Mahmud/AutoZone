import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react';
import { IoEyeSharp } from "react-icons/io5";
import Settings from './Settings';
import { FaHome } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { TbAutomaticGearbox } from "react-icons/tb";
import { GrManual } from "react-icons/gr";
import { MdDashboardCustomize } from "react-icons/md";
import AdminThemes from './AdminThemes';

export default function AdminDashboard() {
  return (
    <Flex width={'100%'} height={{md: '100vh', base: '100%'}} bg={useColorModeValue('blue.500', '')} p={0}>
      <Box width={'300px'}  color={'white'} p={3} bg={useColorModeValue('', 'gray.700')}>
        <Flex justifyContent={'center'} alignItems={'center'} width={'100%'}  height={'80px'} 
        rounded={5}  bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black')}>
          <Heading fontSize={30} fontWeight={500} >AutoZone</Heading>
        </Flex>
        <Flex flexDir={'column'} gap={8} mt={20}>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}><MdDashboardCustomize/> Dashborad</Button>
          </Box>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}></Button>
          </Box>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}>Car Listings</Button>
          </Box>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}>Create Accessories</Button>
          </Box>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}>Create Car Blog </Button>
          </Box>
          <Box>
            <Button width={'100%'} bg={useColorModeValue('white', 'gray.800')} rounded={4} textAlign={'start'} py={6} fontSize={20}></Button>
          </Box>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('white', '')} flex={'1'} flexWrap={'wrap'}>
        <Box>
          <Flex justifyContent={'space-between'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={'black'}>
            <Heading fontSize={30} fontWeight={500} color={'white'}>Dashboard</Heading>
            <Flex gap={1} alignItems={'center'} bg={'white'} pr={4} rounded={5}>
              <AdminThemes/>
              <FaHome className='text-2xl'/>
            </Flex>
          </Flex>
          <Flex gap={5} justifyContent={'center'} color={'white'} mt={8} px={4}>
            <Box width={'25%'} height={'150px'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={'white'} rounded={8}>
                  <IoCarSportSharp className='text-3xl text-black'/>
                </Flex>
                <Text fontSize={25} fontWeight={500}>Total Cars List</Text>
              </Flex>
              <Box mt={10}>
                <Text fontWeight={500} fontSize={20}>20</Text>
              </Box>
            </Box>
            <Box width={'25%'} height={'150px'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={'white'} rounded={8}>
                  <TbAutomaticGearbox className='text-3xl text-black'/>
                </Flex>
                <Text fontSize={25} fontWeight={500}>Automatic</Text>
              </Flex>
              <Box mt={10}>
                <Text fontWeight={500} fontSize={20}>20</Text>
              </Box>
            </Box>
            <Box width={'25%'} height={'150px'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={'white'} rounded={8}>
                  <GrManual className='text-3xl text-black'/>
                </Flex>
                <Text fontSize={25} fontWeight={500}>Manual</Text>
              </Flex>
              <Box mt={10}>
                <Text fontWeight={500} fontSize={20}>20</Text>
              </Box>
            </Box>
            <Box width={'25%'} height={'150px'} bg={useColorModeValue('blue.500', 'gray.700')} rounded={8} p={4}>
              <Flex alignItems={'center'} gap={2}>
                <Flex justifyContent={'center'} alignItems={'center'} boxSize={45} bg={'white'} rounded={8}>
                  <IoEyeSharp className='text-3xl text-black'/>
                </Flex>
                <Text fontSize={25} fontWeight={500}>Total Views</Text>
              </Flex>
              <Box mt={10}>
                <Text fontWeight={500} fontSize={20}>20</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}
