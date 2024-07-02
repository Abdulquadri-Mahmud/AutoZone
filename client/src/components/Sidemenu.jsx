import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, useColorMode, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Sidemenu() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [placement, setPlacement] = React.useState('right');

    const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Box fontWeight={500}>
        <Button colorScheme='blue' onClick={onOpen} bg={'transparent'} _hover={{bg: 'transparent'}}><HamburgerIcon fontSize={'35px'} color={'white'}/></Button>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton bg={useColorModeValue('green.600', 'white')} color={useColorModeValue('white', 'gray.800')} fontSize={'16px'}/>
                <DrawerHeader borderBottomWidth='1px' fontSize={'20px'}>AutoBlog</DrawerHeader>
                <DrawerBody>
                    <Flex mt={'5rem'} alignItems={'start'} flexDir={'column'} gap={8} fontWeight={600}>
                        <Link className='hover:text-blue-700 duration-200 hover:underline' to='/'>Home</Link>
                        <Link className='hover:text-blue-700 duration-200 hover:underline' to='/'>About</Link>
                        <Link className='hover:text-blue-700 duration-200 hover:underline' to='/blogs'>Blogs</Link>
                        <Link className='hover:text-blue-700 duration-200 hover:underline' to='/create-blog'>New Blog</Link>
                        <Link className='hover:text-blue-700 duration-200 hover:underline' to='/create-blog'>My Profile</Link>
                    </Flex>
                    <Box mt={5} bg={useColorModeValue('gray.200', 'gray.700')}>
                        <Button width={'full'} onClick={toggleColorMode} color={useColorModeValue('black', 'white')}
                            rounded={5} bg={useColorModeValue('gray.200', 'gray.800')} className=''>
                            {
                                colorMode === 'light' ? 
                                <span >
                                    <MoonIcon color={useColorModeValue('black', 'white')}/> <span>Dark</span> 
                                </span> : 
                                <span>
                                    <SunIcon color={useColorModeValue('black', 'white')}/> <span>Light</span>
                                </span>
                            }
                        </Button>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}
