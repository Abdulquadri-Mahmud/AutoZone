import React from 'react';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Box,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react'

import { IoMdSettings } from "react-icons/io";
import Themes from './Themes';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

export default function Settings() {
  return (
    <Box>
        <Menu>
            <MenuButton as={Button} bg={'transparent'} _hover={{bg: 'transparent'}}>
                <IoMdSettings className='text-2xl hover:bg-blue-500'/>
            </MenuButton>
            <MenuList px={3}>
                <MenuItem>
                    <Themes/>
                </MenuItem>
                <MenuItem rounded={'md'} height={'40px'} bg={useColorModeValue('gray.200', 'gray.200')} mt={2} color={useColorModeValue('', 'black')}>
                    <Link to={'/profile'}>Profile</Link>
                </MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}
