import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, {useRef, useState } from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa6";
import { IoCarSportSharp } from 'react-icons/io5'
import { FaTools } from "react-icons/fa";


import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
// import AdminThemes from './AdminThemes';
import { Link } from 'react-router-dom';
import AdminThemes from '../components/AdminThemes';
import CreateCarListing from '../components/CreateCarListing';

export default function CreateCarListingPage() {
    const [open, setOpen] = useState(true);

  const handleMenu = () => {
    if (open) {
      setOpen(false);
    }else{
      setOpen(true);
    }
  }

  return (
    <Flex width={'100%'} height={'100%'} bg={useColorModeValue('blue.500', '')} p={0} fontFamily={'inherit'}>
      <Box overflowY={'scroll'} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('white', 'gray.400')} className={`${open ? 'w-[0px]' : 'w-[250px] fixed h-full px-3'} z-10 lg:w-[250px] duration-300 scroll`}>
      <Flex flexDir={'column'} justifyContent={'start'} alignItems={'start'} gap={1} mt={{'2xl':20, md: 20, base: 20}} width={'100%'}>
          <Box width={'100%'}>
            <Flex cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
             <Link to='/admin-dashboard' className='flex items-center gap-1'><MdDashboardCustomize/> Dashborad</Link>
            </Flex>
          </Box>
          <Accordion allowMultiple width={'100%'} pl={1}>
            <AccordionItem border={'none'} _hover={{bg: 'transparent'}}>
                <AccordionButton>
                  <Flex alignItems={'center'} gap={1} as='span' flex='1' textAlign='left' fontFamily={'inherit'} fontSize={16} fontWeight={500}>
                    <FaBloggerB/> Blogs
                  </Flex>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={0}>
                <Box width={'100%'}>
                  <Flex cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
                    <Link to='/admin-blog' className='flex items-center gap-1'>
                      <FaBloggerB/> Blogs</Link>
                  </Flex>
                </Box>
                <Box width={'100%'}>
                  <Box cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}}  width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
                    <Link to='/admin-create-blog'>
                      Create Blog
                    </Link>
                  </Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box width={'100%'}>
            <Flex alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} cursor={'pointer'} width={'100%'} rounded={4} fontWeight={500} textAlign={'start'} py={1} px={5} fontSize={16}> <FaShoppingCart/> Orders</Flex>
          </Box>
          
          <Accordion allowMultiple width={'100%'} pl={1}>
            <AccordionItem border={'none'} _hover={{bg: 'transparent'}}>
              <AccordionButton>
                <Flex alignItems={'center'} gap={1} as='span' flex='1' textAlign='left' fontFamily={'inherit'} fontSize={16} fontWeight={500}>
                  <IoCarSportSharp/> Cars
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={0}>
                <Box width={'100%'}>
                  <Box width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
                    <Link to='/admin-car-listings'>
                      Car Listings
                    </Link>
                  </Box>
                </Box>
                <Box width={'100%'}>
                  <Box width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
                    <Link to='/create-car-listings'>Create Car Listings </Link>
                  </Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <Accordion allowMultiple width={'100%'} pl={1}>
            <AccordionItem border={'none'} _hover={{bg: 'transparent'}}>
              <AccordionButton>
                <Flex alignItems={'center'} gap={1} as='span' flex='1' textAlign='left' fontFamily={'inherit'} fontSize={16} fontWeight={500}>
                  <FaTools/> Accessories
                </Flex>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={0}>
                <Box width={'100%'}>
                  <Box width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Accessories Listings</Box>
                </Box>
                <Box width={'100%'}>
                  <Box width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Create Accessories</Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          
        </Flex>
      </Box>
      <Box bg={useColorModeValue('white', '')} flex={'1'}>
        <Flex justifyContent={'space-between'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={useColorModeValue('black', 'gray.300')}>
          <Flex alignItems={'center'} gap={3}>
            <Box color={useColorModeValue('white', 'gray.400')} cursor={'pointer'} onClick={handleMenu} className='block lg:hidden z-20'>
              <IoMenuSharp className='text-3xl'/>
            </Box>
            <Heading fontSize={25} fontWeight={500} fontFamily={'inherit'} color={useColorModeValue('white', 'gray.400')}>AutoZone</Heading>
          </Flex>
          <Flex gap={1} alignItems={'center'} bg={useColorModeValue('white', 'gray.600')} pr={4} rounded={5}>
              <AdminThemes/>
              <Link to={'/'}>
                  <FaHome className='text-2xl'/>
              </Link>
          </Flex>
        </Flex>
        <Box>
          <Flex  fontSize={13} px={4} pt={5} display={{md: 'none', base: 'block'}} color={useColorModeValue('', 'gray.500')} alignItems={'center'} gap={1}>
            <Text>Dashboard / </Text>
            <Link to='/create-car-listings'>Create Car Listings</Link>
          </Flex>
            <CreateCarListing/>
        </Box>
      </Box>
    </Flex>
  )
}
