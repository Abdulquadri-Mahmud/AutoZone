import React from 'react'
import {Box, Flex, Heading,Text, Stack, Button, useColorModeValue, Image } from '@chakra-ui/react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from '/bg1.jpg';
import img2 from '/bg2.jpg';
import img3 from '/bg3.jpg';

import { Link } from 'react-router-dom';
import SearchHomepage from './SearchHomepage';
import Header2 from './Header2';

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
        // autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
  return (
    <Box h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'}>
        <Slider {...settings}>
            <Box position={'relative'} backgroundPosition="top" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img1})`} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
                <Flex justifyContent={'space-around'} alignItems={'center'} height={'100%'} padding={{base: 4, md:10}} zIndex={20} >
                  <Box width={{md: '50%'}} className='glass' p={8} rounded={10}>
                    <Heading color={'white'} fontWeight={400} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '3xl', md: '4xl'}} mt={2}>MORDEN-CLASSIC</Heading>
                    <Heading color={'white'} fontWeight={600} textAlign={{md: 'start', base: 'start'}} fontSize={{ base: '5xl', md: '7xl'}} >INCREDIBLE</Heading>
                    <Text color={'white'} py={5} fontWeight={500}>GET 40% OFF ON SELECTED ITEMS</Text>
                    <Text color={'white'} fontSize={{md:16, base: 16}} pt={{md:0, base: 0}} fontWeight={500}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolore iste placeat nemo eligendi facere voluptas hic dolorum sint quae? Dicta, illum. Dolore ullam velit suscipit non quo, cupiditate sint... 
                    </Text>
                    <Button w={{base: 170, md:170}} height={'40px'} mt={5} bg={useColorModeValue('green.500', 'gray.800')} color={'white'} rounded={3}>
                      <Link to='/about'>Read More</Link>
                    </Button>
                  </Box>
                  <Box>
                    <SearchHomepage/>
                  </Box>
                </Flex>
                
            </Box>
            <Box position={'relative'} backgroundPosition="right" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img2})`} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
                <Box position="absolute" top={0} left={0} w="full" h="full" opacity={0.4} />
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 4, md:10}} zIndex={20}  >
                  <Box>
                    <SearchHomepage/>
                  </Box>
                </Flex>
            </Box>
            <Box position={'relative'} backgroundPosition="left" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img3})`} h={{'2xl': '90vh',md:'100vh', base: '100vh'}} w={'full'} bgBlendMode="multiply" className='deep'>
                <Flex justifyContent={'start'} alignItems={'center'} h={'full'} padding={{base: 4, md:10}} zIndex={20}  >
                  <Box>
                    <SearchHomepage/>
                  </Box>
                </Flex>
            </Box>
            
        </Slider>
    </Box>
  )
}
