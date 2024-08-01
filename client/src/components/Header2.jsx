import React, { useContext, useEffect, useState } from 'react'
import {Box, Flex, Heading, Button, useColorModeValue,Avatar, Text, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Themes from './Themes';
import Sidemenu from './Sidemenu';
import { FaCartPlus, FaFacebookF, FaRegClock, FaSearch, FaSignInAlt } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { RiMenu3Line } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
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
import Carts from './Add Cart/Carts';
import SearchInput from './Accessories/SearchInput';

export default function Header2() {
  return (
    <Box color={'white'} p={6} className='glass' position={'sticky'} top={0}>
        <Flex>
            <Box>
                <Heading fontWeight={500} fontSize={{md:30, base: 25}} fontStyle={'inherit'}>AutoZone</Heading>
            </Box>
            <Box>

            </Box>
        </Flex>
    </Box>
  )
}
