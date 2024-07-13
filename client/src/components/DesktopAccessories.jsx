import React, { useState } from 'react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Stack,
    Box,
    Flex,
    Heading,
    useColorModeValue
  } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function DesktopAccessories() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = useState('top');

  return (
    <Box display={{md: 'block', base: 'none'}}>
        <Button colorScheme='blue' onClick={onOpen} color={useColorModeValue('black', 'white')} px={0} bg={'transparent'} _hover={{bg: 'tranparent'}} _focus={{bg: 'transparent'}}> Accessories </Button>
            <Drawer placement={placement} onClose={onClose} isOpen={isOpen} >
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader borderBottomWidth='1px' color={useColorModeValue('black', 'white')}>Accessories</DrawerHeader>
                <DrawerBody >
                <Flex gap={2} justifyContent={'space-between'} p={10} flexWrap={'wrap'}>
                    <Box >
                        <Box>
                            <Heading color={useColorModeValue('blue.500', 'gray.200')} fontSize={20} fontWeight={500}>AUDIO</Heading>
                        </Box>
                        <Stack mt={3} fontWeight={400} >
                            <Link to='/stereos' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Steroes</Link>
                            <Link to='/speakers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Speakers</Link>
                            <Link to='/amplifiers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Amplifires</Link>
                            <Link to='/subwoofers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Subwoofers</Link>
                            <Link to='/hoods' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Hoods</Link>
                        </Stack>
                    </Box>
                        {/* accessories 2 */}
                    <Box width={'0%'} padding={'2px'} rounded={'30px'} bg={'gray.200'} className='col-span-2' display={{md: 'block', base: 'none'}}></Box>
                    <Box   pl={{md: 5, base: 0}}>
                        <Box>
                            <Heading color={useColorModeValue('blue.500', 'gray.200')} fontSize={20} fontWeight={500}>BODY PARTS</Heading>
                        </Box>
                        <Stack mt={3} fontWeight={400} >
                            <Link to='/bumpers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Bumpers</Link>
                            <Link to='/doors' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Doors</Link>
                            <Link to='/fenders' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Fenders</Link>
                            <Link to='/grills' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Grilles</Link>
                        </Stack>
                    </Box>
                    <Box width={'0%'} padding={'2px'} rounded={'30px'} bg={'gray.200'} className='col-span-3' display={{md: 'block', base: 'none'}}></Box>
                    <Box  >
                        <Box>
                            <Heading color={useColorModeValue('blue.500', 'gray.200')} fontSize={20} fontWeight={500}>EXTERIOR</Heading>
                        </Box>
                        <Stack mt={3} fontWeight={400} >
                            <Link to='/body-kits' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Body Kits</Link>
                            <Link to='/custom-grills' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Custom Grilles</Link>
                            <Link to='/car-covers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Car Covers</Link>
                            <Link to='/offroadbumbers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Off-Road Bumpers</Link>
                        </Stack>
                    </Box>
                    <Box width={'0%'} padding={'2px'} rounded={'30px'} bg={'gray.200'} className='col-span-3' display={{md: 'block', base: 'none'}}></Box>
                    <Box   pl={{md: 5, base: 0}}>
                        <Box>
                            <Heading color={useColorModeValue('blue.500', 'gray.200')} fontSize={20} fontWeight={500}>INTERIOR</Heading>
                        </Box>
                        <Stack mt={3} fontWeight={400} >
                            <Link to='/custom-gauges' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Custom Gauges</Link>
                            <Link to='/dashkits' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Dash Kits</Link>
                            <Link to='/seat-covers' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Seat Covers</Link>
                            <Link to='/steeringwheels' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Steering Wheels</Link>
                            <Link to='/sunshades' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Sun Shades</Link>
                        </Stack>
                    </Box>
                    <Box width={'0%'} padding={'2px'} rounded={'30px'} bg={'gray.200'} className='col-span-3' display={{md: 'block', base: 'none'}}></Box>
                    <Box >
                        <Box>
                            <Heading color={useColorModeValue('blue.500', 'gray.200')} fontSize={20} fontWeight={500}>LIGHTING</Heading>
                        </Box>
                        <Stack mt={3} fontWeight={400} >
                            <Link to='/foglights' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Fog Lights</Link>
                            <Link to='/headlights' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Headlights</Link>
                            <Link to='/ledlights' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>LED Lights</Link>
                            <Link to='/offroadlights' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Off-Road Lights</Link>
                            <Link to='/signallights' className='hover:text-blue-500 duration-200 font-medium hover:translate-x-2 my-1'>Signal Lights</Link>
                        </Stack>
                    </Box>
                </Flex>
            </DrawerBody>
            </DrawerContent>
        </Drawer>
    </Box>
  )
}
