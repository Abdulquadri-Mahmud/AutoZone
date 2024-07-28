import React from 'react'
import {Box, Flex, Heading,Text, Stack, Button, useColorModeValue } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '/car-bg.jpeg';
import img2 from '/car2.jpg';
import img3 from '/car1.jpg';

import { Link } from 'react-router-dom';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none",
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none", 
            
        }}
        onClick={onClick}
      />
    );
  }

export default function Hero() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Box h={{md:'90vh', base: '100vh'}} w={'full'} >
        <Slider {...settings}>
            <Box position={'relative'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img1})`} h={{md:'90vh', base: '100vh'}} w={'full'} className='deep'>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="gray.900" opacity={0.4} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 2, md:10}} zIndex={20}>
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '50%'}} p={6} rounded={8} className='herotext'>
                        <Heading color={'white'} bg={'blue.500'} p={3} width={{md:'50%', base: '70%'}} rounded={5} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '2xl' }} >TOP BRANDS 20221</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={400} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>MORDEN-CLASSIC</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={600} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '5xl', md: '7xl'}} >INCREDIBLE</Heading>
                        <Text color={'gray.700'} fontWeight={500}>GET 40% OFF ON SELECTED ITEMS</Text>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:0, base: 0}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={useColorModeValue('blue.500','gray.700')} color={'white'} _hover={{bg : useColorModeValue('blue.600','gray.600')}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="top" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img2})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="gray.900" opacity={0.4} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 2, md:10}} zIndex={20}  >
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '50%'}} p={6} rounded={8} className='herotext'>
                        <Heading color={'white'} bg={'blue.500'} p={3} width={{md:'50%', base: '70%'}} rounded={5} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '2xl' }} >TOP BRANDS 20221</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={400} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>MORDEN-CLASSIC</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={600} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '5xl', md: '7xl'}} >INCREDIBLE</Heading>
                        <Text color={'gray.700'} fontWeight={500}>GET 40% OFF ON SELECTED ITEMS</Text>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:0, base: 0}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={useColorModeValue('blue.500','gray.700')} color={'white'} _hover={{bg : useColorModeValue('blue.600','gray.600')}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="left" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img3})`} h={{md:'90vh', base: '100vh'}} w={'full'}>
                <Box position="absolute" top={0} left={0} w="full" h="full" bg="gray.900" opacity={0.4} bgBlendMode="multiply"/>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 2, md:10}} zIndex={20}  >
                    <Stack flexDirection={'column'} w={{base:'full',md: '100%', xl: '50%'}} p={6} rounded={8} className='herotext'>
                      <Heading color={'white'} bg={'blue.500'} p={3} width={{md:'50%', base: '70%'}} rounded={5} zIndex={20} fontWeight={500} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '2xl', md: '2xl' }} >TOP BRANDS 20221</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={400} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>MORDEN-CLASSIC</Heading>
                        <Heading color={'white'} zIndex={20} fontWeight={600} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '5xl', md: '7xl'}} >INCREDIBLE</Heading>
                        <Text color={'gray.700'} fontWeight={500}>GET 40% OFF ON SELECTED ITEMS</Text>
                        <Text color={'white'} zIndex={10} fontSize={{md:16, base: 16}} pt={{md:0, base: 0}} fontWeight={500}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                        </Text>
                        <Flex gap={4} mt={8}>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={useColorModeValue('blue.500','gray.700')} color={'white'} _hover={{bg : useColorModeValue('blue.600','gray.600')}}>
                              <Link to='/about'>Read More</Link>
                            </Button>
                            <Button w={{base: 200, md: 200}} height={'45px'} bg={'whiteAlpha.400'} color={'white'} _hover={{bg: 'whiteAlpha.500'}}>
                              <Link to='/contact'>Contact Us</Link>
                            </Button>
                        </Flex>
                    </Stack>
                </Flex>
            </Box>
            
        </Slider>
    </Box>
  )
}
