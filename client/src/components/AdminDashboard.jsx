import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, {useRef, useState } from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { IoMenuSharp } from "react-icons/io5";
import { FaBloggerB } from "react-icons/fa6";
import { IoCarSportSharp } from 'react-icons/io5'
import { FaTools } from "react-icons/fa";

import Dashboard from './Dashboard';
import CreateBlog from './CreateBlog';
import Order from './Order';
import CreateCarListing from './CreateCarListing';
import CarListings from './CarListings';
import AccessoriesListings from './AccessoriesListings';
import CreateAccessories from './CreateAccessories';
import Blogs from './Blogs';

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import AdminThemes from './AdminThemes';
import { Link } from 'react-router-dom';

export default function AdminDashboard() {
  const [open, setOpen] = useState(true);

  const dashboard = useRef();
  const blogs = useRef();
  const order = useRef();
  const createBlog = useRef();
  const carListing = useRef();
  const createCarListing = useRef();
  const accessListing = useRef();
  const createAccessListing = useRef();

  const dashboardFunction = () => {
    if (dashboard.current.classList.contains('hidden')) {
      dashboard.current.setAttribute('class', 'block');
      
      blogs.current.setAttribute('class', 'hidden');

      createBlog.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      carListing.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }
  const blogsFunction = () => {
    if (blogs.current.classList.contains('hidden')) {
      blogs.current.setAttribute('class', 'block');

      dashboard.current.setAttribute('class', 'hidden');

      createBlog.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      carListing.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }

  const orderFunction = () => {
    if (order.current.classList.contains('hidden')) {
      order.current.setAttribute('class', 'block');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');

      createBlog.current.setAttribute('class', 'hidden');

      carListing.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');
      
      accessListing.current.setAttribute('class', 'hidden');
    }
  }

  const createBlogFunction = () => {
    if (createBlog.current.classList.contains('hidden')) {
      createBlog.current.setAttribute('class', 'block');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      carListing.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }

  const createCarListingFunction = () => {
    if (createCarListing.current.classList.contains('hidden')) {
      createCarListing.current.setAttribute('class', 'block');

      createBlog.current.setAttribute('class', 'hidden');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      carListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }

  const carListingFunction = () => {
    if (carListing.current.classList.contains('hidden')) {
      carListing.current.setAttribute('class', 'block');

      createBlog.current.setAttribute('class', 'hidden');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');
      
      order.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }
  const accessListingFunction = () => {
    if (carListing.current.classList.contains('hidden')) {
      accessListing.current.setAttribute('class', 'block');

      carListing.current.setAttribute('class', 'hidden');

      createBlog.current.setAttribute('class', 'hidden');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      createAccessListing.current.setAttribute('class', 'hidden');
    }
  }
  const createAccessListingFunction = () => {
    if (carListing.current.classList.contains('hidden')) {
      createAccessListing.current.setAttribute('class', 'block');

      carListing.current.setAttribute('class', 'hidden');

      createBlog.current.setAttribute('class', 'hidden');

      dashboard.current.setAttribute('class', 'hidden');

      blogs.current.setAttribute('class', 'hidden');

      order.current.setAttribute('class', 'hidden');

      createCarListing.current.setAttribute('class', 'hidden');

      accessListing.current.setAttribute('class', 'hidden');
    }
  }

  const handleDashboard = () => {
    dashboardFunction();
  }

  const handleBlogs = () => {
    blogsFunction();
  }

  const handleOrder = () => {
    orderFunction();
  }

  const handleCreateBlog = () => {
    createBlogFunction();
  }

  const handleCarListings = () => {
    createCarListingFunction();
  }

  const carListings = () => {
    carListingFunction();
  }

  const handleAccessListing = () => {
    accessListingFunction();
  }

  const handleCreateAccess = () => {
    createAccessListingFunction();
   }

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
            <Flex onClick={handleDashboard} cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>
             <MdDashboardCustomize/> Dashborad
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
                  <Flex onClick={handleBlogs} cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}><FaBloggerB/> Blogs</Flex>
                </Box>
                <Box width={'100%'}>
                  <Box onClick={handleCreateBlog} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}}  width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Create Blog</Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box width={'100%'}>
            <Flex onClick={handleOrder} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} cursor={'pointer'} width={'100%'} rounded={4} fontWeight={500} textAlign={'start'} py={1} px={5} fontSize={16}> <FaShoppingCart/> Orders</Flex>
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
                  <Box onClick={carListings} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Car Listings</Box>
                </Box>
                <Box width={'100%'}>
                  <Box onClick={handleCarListings} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Create Car Listings </Box>
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
                  <Box onClick={handleAccessListing} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Accessories Listings</Box>
                </Box>
                <Box width={'100%'}>
                  <Box onClick={handleCreateAccess} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={16}>Create Accessories</Box>
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
          <Dashboard/>
        </Box>
        <Box>
          <Blogs/>
        </Box>
        <Box>
          <Order/>
        </Box>
        <Box>
          <CreateBlog/>
        </Box>
        <Box>
          <CarListings/>
        </Box>
        <Box>
          <CreateCarListing/>
        </Box>
        <Box>
          <AccessoriesListings/>
        </Box>
        <Box ref={createAccessListing} className='hidden'>
          <CreateAccessories/>
        </Box>

      </Box>
    </Flex>
  )
}
