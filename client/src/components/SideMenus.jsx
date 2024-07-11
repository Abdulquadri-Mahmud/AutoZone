import { Box, Flex, Heading, Menu, MenuButton, MenuItem, Button, MenuList, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

import { Link } from 'react-router-dom';
import Custom from './Custom';
import Accessories from './Accessories';

export default function SideMenus() {
  return (
    <Box>
        <Flex alignItems={'start'} pl={5} pt={0} flexDir={'column'} gap={3} mt={16} fontWeight={600}>
            <Link to='/' className=''>Home</Link>
            <Box>
                <Accessories/>
            </Box>
            <Box>
                <Menu>
                    <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                        _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} as={Button}>
                        Listing
                    </MenuButton>
                    <MenuList width={'100px'} px={3} border={'none'} boxShadow={'md'} bg={'blue.500'}>
                        <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                            <Link to='/car-grid' className=''>Car Grid</Link>
                        </MenuItem>
                        <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                            <Link to={'/car-list'}>Car List</Link>
                        </MenuItem>
                        <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                            <Link to={'/'}>Car Detail</Link>
                        </MenuItem>
                        <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                            <Link to={'/accessories-list'}>Accessories List</Link>
                        </MenuItem>
                        <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                            <Link to={'/accessories-list'}>Accessories Grid</Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        <Box>
            <Menu>
                <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                    _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} as={Button}>
                    Blogs
                </MenuButton>
                <MenuList width={'100px'} px={3} border={'none'} boxShadow={'md'} bg={'blue.500'}>
                    <MenuItem my={2} _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to='/' className=''>Blog List</Link>
                    </MenuItem>
                    <MenuItem _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/'}>Blog Details</Link>
                    </MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Box>
            <Menu>
                <MenuButton bg={'transparent'} _hover={{bg: 'transparent'}}
                    _expanded={{ bg: 'transparent' }}_focus={{ boxShadow: 'transparent' }}px={0} as={Button}>
                    Pages
                </MenuButton>
                <MenuList width={'100px'} px={2} border={'none'} boxShadow={'md'} bg={'blue.500'}>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to='/about' className=''>About Us</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/'}>Cart Page</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/'}>Check Out</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/'}>Dahsboard</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/'}>Contact Us</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>
                        <Link to={'/signin'}>Sign In</Link>
                    </MenuItem>
                    <MenuItem my={1}  _hover={{bg: 'white', color: 'black'}} bg={'transparent'} color={useColorModeValue('white', 'white')} rounded={'sm'} py={2} px={2}>Quick View</MenuItem>
                </MenuList>
            </Menu>
        </Box>
        <Box className='accessParent'>
            <Custom/>
        </Box>
    </Flex>
</Box>
  )
}
