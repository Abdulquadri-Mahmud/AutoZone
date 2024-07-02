import React, { useEffect, useState } from 'react'
import {Box, Flex, Heading, Button, useColorModeValue,Avatar, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Themes from './Themes';
import Sidemenu from './Sidemenu';
import { FaCartPlus, FaFacebookF, FaRegClock, FaSearch, FaSignInAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
// admin icon
import { MdAdminPanelSettings } from "react-icons/md";

import { useDispatch, useSelector } from 'react-redux';

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react';

import customImg1 from '../assets/img/custom-img1.jpg';
import customImg2 from '../assets/img/custom-img2.jpg';
import customImg3 from '../assets/img/custom-img3.jpg';
import customImg4 from '../assets/img/custom-img4.jpg';

import SideMenus from './SideMenus';
import UserAuth from './UserAuth';
import AdminHeaderAuth from './AdminHeaderAuth';
import Settings from './Settings';
import Accessories from './Accessories';
import DesktopAccessories from './DesktopAccessories';

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    if (!open) {
      setOpen(true);
      return;
    }else{
      setOpen(false);
    }
  }

  return (
    <Flex justifyContent={'space-between'} height={{md: '110px', base: '80px'}} bg={useColorModeValue('white', 'gray.800')} position={'sticky'} top={'0'} zIndex={100} className='shadow'>
      <Flex justifyContent={{md:'center', base: 'start'}} p={{md: 0, base: 2}} alignItems={'center'} width={{md:'200px', base: '190px'}} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('white')} className='clip-path'>
        <Link to={'/'}>
          <Heading fontWeight={500} fontSize={{md:30, base: 25}} fontStyle={'oblique'}>AutoZone</Heading>
        </Link>
      </Flex>
      <Box width={'100%'} height={'100%'} fontWeight={500} position={'relative'}>
        <Box display={{md: 'block', base: 'none'}} width={'85%'} mx={'auto'}>
          <Flex justifyContent={'space-between'} alignItems={'center'} roundedBottomLeft={30} roundedBottomRight={30} px={8} py={2} color={useColorModeValue('white')} bg={useColorModeValue('blue.500', 'gray.700')}>
            <Box>
              <Text fontSize={13}>Hot days! - 50% Get ready for summer!</Text>
            </Box>
            <Box>
              <Text className='flex items-center gap-2' fontSize={13}><FaRegClock/>Mon - Friday: 09am to 06px</Text>
            </Box>
            <Link to={'tel:+2347047594667'}>
              <Flex alignItems={'center'} gap={4}>
                <FaPhoneVolume className='text-sm'/>
                <Text fontSize={13}>+234 704 7594 667</Text>
              </Flex>
            </Link>
          </Flex>
        </Box>
        <Flex width={'100%'} justifyContent={'space-around'} alignItems={'center'} bg={useColorModeValue('')} padding={{md: '16px', base: 0}} position={'sticky'} zIndex={100} color={useColorModeValue('black')} className=''>
          {/* <Box>
            <Link to={'/'}>
            <Heading fontWeight={500} fontSize={{md:35, base: 25}} fontStyle={'oblique'} color={useColorModeValue('blue.500')}>AutoBlog</Heading>
          </Link>
          </Box> */}
          <Box display={{md: 'block', base:'none'}}>
            <Flex alignItems={'center'} gap={8} fontWeight={600}>
                <Link to='/' className='hover:text-blue-500 duration-150'>Home</Link>
                <Box className='accessParent'>
                  <Box>
                    <Accessories/>
                    <DesktopAccessories/>
                  </Box>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                    _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} as={Button} className='hover:text-blue-500 duration-150'>
                      Listing
                    </MenuButton>
                    <MenuList width={'100px'} border={'none'} px={3}>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to='/car-grid' className=''>Car Grid</Link>
                      </MenuItem>
                      <MenuItem _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/car-list'}>Car List</Link>
                      </MenuItem>
                      <MenuItem _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Accessories List</Link>
                      </MenuItem>
                      <MenuItem _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Accessories List</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                    _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} border={0} as={Button} className='hover:text-blue-500 duration-150'>
                      Blogs
                    </MenuButton>
                    <MenuList width={'100px'} border={'none'} px={3}>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to='/blogs' className=''>Blog List</Link>
                      </MenuItem>
                      <MenuItem _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Blog Details</Link>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box>
                  <Link to={'/car-sales'} className='hover:text-blue-500 duration-200'>Buy Car</Link>
                </Box>
                <Box>
                  <Menu>
                    <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                    _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} as={Button} className='hover:text-blue-500 duration-150'>
                      Pages
                    </MenuButton>
                    <MenuList width={'100px'} border={'none'} px={3}>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to='/about' className=''>About Us</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Cart Page</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Check Out</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Dahsboard</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/'}>Contact Us</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>
                        <Link to={'/signin'}>Sign In</Link>
                      </MenuItem>
                      <MenuItem my={2} _hover={{bg: 'blue.500', color: 'white'}} rounded={5} py={2} px={5}>Quick View</MenuItem>
                    </MenuList>
                  </Menu>
                </Box>
                <Box className='accessParent'>
                  <Box>
                    <Text className='hover:text-blue-500 duration-150'>Custom</Text>
                  </Box>
                  <Box width={'0%'} color={useColorModeValue('black', 'white')} roundedBottomLeft={0} roundedBottomRight={0} position={'absolute'}
                   bg={useColorModeValue('white', 'gray.700')} top={'18h'} left={0} overflow={'hidden'} className='accessChild grid grid-cols-4 gap-5'>
                    <Box mt={3} fontWeight={400} >
                      <img src={customImg1} alt="customImg1" className='max-w-full'/>
                      <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                      </Box>
                    </Box>
                    <Box mt={3} fontWeight={400} >
                      <img src={customImg2} alt="customImg2" />
                      <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                      </Box>
                    </Box>
                    <Box mt={3} fontWeight={400} >
                      <img src={customImg3} alt="customImg3" />
                      <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                      </Box>
                    </Box>
                    <Box mt={3} fontWeight={400} >
                      <img src={customImg4} alt="customImg4" />
                      <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
            </Flex>
          </Box>
          
            <Flex alignItems={'center'} justifyContent={'space-between'}>
                <Box display={{md: 'block', base: 'none'}}>
                  <Flex alignItems={'center'} gap={3}>
                    <Box bg={useColorModeValue('white', 'gray.700')}px={useColorModeValue(0, 6)} rounded={'full'}>
                      <Flex alignItems={'center'} gap={3}>
                        <Box>
                          <FaSearch className='text-xl'/>
                        </Box>
                        <Box>
                          <FaCartPlus className='text-xl'/>
                        </Box>
                        <Box>
                          <UserAuth/>
                        </Box>
                        <Box>
                          <AdminHeaderAuth/>
                        </Box>
                        {/* <Box>
                          <Settings/>
                        </Box> */}
                        </Flex>
                      </Box>
                  </Flex>
                </Box>
            </Flex>

            {/* menu slider */}
            <Box display={{base: 'block', md: 'none'}} width={'100%'}>
              <Box height={'100%'}>
                  <Flex alignItems={'center'} gap={{md: 3, base: 2}} position={'absolute'} top={'1.7rem'} right={'1rem'} cursor={'pointer'}>
                    {/* <Settings/> */}
                    <AdminHeaderAuth/>
                    <UserAuth/>
                    <Box  onClick={handleClick}>
                      {
                        !open ? (
                          <Flex alignItems={'center'} gap={3}>
                            <RiMenu3Line className='text-3xl'/>
                          </Flex>
                        ): (
                          <MdOutlineClose className='text-3xl'/>
                        )
                      }
                    </Box>
                  </Flex>
                  <Box position={'fixed'} top={'5rem'} right={0} zIndex={100} bg={'white'} height={'100%'} overflow={'hidden'} className={`${!open ? 'w-[0%]' : 'w-[70%]'} duration-200`}>
                      <SideMenus/>
                  </Box>
              </Box>
            </Box>
        </Flex>
      </Box>
    </Flex>
  )
}
