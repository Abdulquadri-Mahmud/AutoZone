import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, {useRef, useState } from 'react';
import { MdDashboardCustomize } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
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

export default function AdminDashboard() {
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

  return (
    <Flex width={'100%'} height={{md: '100vh', base: '100%'}} bg={useColorModeValue('blue.500', '')} p={0} fontFamily={'oblique'}>
      <Box width={'250px'} overflowY={'scroll'} p={3} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('white', 'gray.400')} className='scroll'>
        <Flex px={5} justifyContent={'start'} alignItems={'center'} width={'100%'}  height={'50px'} 
        rounded={5}>
          <Heading fontSize={30} fontWeight={500} fontFamily={'oblique'} color={useColorModeValue('white', 'white')}>AutoZone</Heading>
        </Flex>
        <Flex flexDir={'column'} justifyContent={'start'} alignItems={'start'} gap={{'2xl': 8, md: 1}} mt={{'2xl':20, md: 14}} width={'100%'}>
          <Box width={'100%'}>
            <Flex onClick={handleDashboard} cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Dashborad</Flex>
          </Box>
          <Accordion allowMultiple width={'100%'}>
            <AccordionItem border={'none'} _hover={{bg: 'transparent'}}>
                <AccordionButton>
                  <Box as='span' flex='1' textAlign='left'>
                    Blogs
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              <AccordionPanel pb={0}>
                <Box width={'100%'}>
                  <Flex onClick={handleBlogs} cursor={'pointer'} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Blogs</Flex>
                </Box>
                <Box width={'100%'}>
                  <Box onClick={handleCreateBlog} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}}  width={'100%'}rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Create Blog</Box>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box width={'100%'}>
            <Flex onClick={handleOrder} alignItems={'center'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} gap={1} cursor={'pointer'} width={'100%'} rounded={4} fontWeight={500} textAlign={'start'} py={1} px={5} fontSize={{'2xl':20, md: 17}}>Orders</Flex>
          </Box>
          
          <Box width={'100%'}>
            <Box onClick={carListings} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Car Listings</Box>
          </Box>
          <Box width={'100%'}>
            <Box onClick={handleCarListings} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Create Car Listings </Box>
          </Box>
          <Box width={'100%'}>
            <Box onClick={handleAccessListing} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Accessories Listings</Box>
          </Box>
          <Box width={'100%'}>
            <Box onClick={handleCreateAccess} width={'100%'} cursor={'pointer'} _hover={{color: useColorModeValue('blue.700', 'gray.100')}} rounded={4} fontWeight={500} textAlign={'start'} py={2.5} px={5} fontSize={{'2xl':20, md: 17}}>Create Accessories</Box>
          </Box>
        </Flex>
      </Box>
      <Box bg={useColorModeValue('white', '')} flex={'1'} flexWrap={'wrap'}>
        <Box ref={dashboard} className='block'>
          <Dashboard/>
        </Box>
        <Box ref={blogs} className='hidden'>
          <Blogs/>
        </Box>
        <Box ref={order} className='hidden'>
          <Order/>
        </Box>
        <Box ref={createBlog} className='hidden'>
          <CreateBlog/>
        </Box>
        <Box ref={carListing} className='hidden'>
          <CarListings/>
        </Box>
        <Box ref={createCarListing} className='hidden'>
          <CreateCarListing/>
        </Box>
        <Box ref={accessListing} className='hidden'>
          <AccessoriesListings/>
        </Box>
        <Box ref={createAccessListing} className='hidden'>
          <CreateAccessories/>
        </Box>

      </Box>
    </Flex>
  )
}
