import React from 'react'
import { Box, Text,  Heading, Flex, Image} from '@chakra-ui/react';
import AboutPage from '../components/AboutPage';
import Header from '../components/Header';

export default function About() {
  return (
    <Box>
        <Header/>
        <AboutPage/>
    </Box>
  )
}
