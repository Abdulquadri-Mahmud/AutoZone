import { Box, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <div>
            <div
              className={className}
              style={{...style, display: "none",
              }}
              onClick={onClick}
            />
        </div>
    );
  }

import car1 from '/car1.jpg';
import car2 from '/car2.jpg';
import car3 from '/car3.jpg';
import car4 from '/car4.jpg';
import car5 from '/car5.jpg';

export default function Section2() {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                // dots: true
              }
            }
          ]
      };
  return (
    <Box maxW={{'2xl': '80%',md: '100%', base: '100%'}} mt={16} mx={'auto'} overflow={'hidden'}>
        {/* <Box maxW={{md: '50%', base: '95%'}} mx={'auto'} mb={10}>
          <Heading color={'black'} fontWeight={500} fontSize={{md: 40, base: '30'}} textAlign={'center'}>BUY NOW <br /> OR WAIT FOR YOUR DREAM CAR</Heading>
        </Box> */}
        <Slider {...settings}>
            <Box>
                <Image  src={car1}/>
                <Flex justifyContent={'center'} alignItems={'center'} py={6} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black', '')} _hover={{bg: useColorModeValue('green.400', ''), color: 'white'}} borderRightColor={useColorModeValue('gray.300')} borderLeftWidth={1} borderRightWidth={1} className='duration-200'>
                    <Heading fontWeight={500} fontSize={{md: 20, base: 16}}>TOYOTA AVALON HYBRID</Heading>
                </Flex>
            </Box>
            <Box>
                <Image  src={car2}/>
                <Flex justifyContent={'center'} alignItems={'center'} py={6} bg={useColorModeValue('green.500', 'white')} color={useColorModeValue('white', 'black')} _hover={{bg: useColorModeValue('green.400', ''), color: 'black'}} borderRightColor={useColorModeValue('gray.300')} borderLeftWidth={1} borderRightWidth={1} className='duration-200'>
                    <Heading fontWeight={500} fontSize={{md: 20, base: 16}}>TOYOTA AVALON HYBRID</Heading>
                </Flex>
            </Box>
            <Box>
                <Image  src={car3}/>
                <Flex justifyContent={'center'} alignItems={'center'} py={6} bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black', '')} _hover={{bg: useColorModeValue('green.400', ''), color: 'white'}} borderRightColor={useColorModeValue('gray.300')} borderLeftWidth={1} borderRightWidth={1} className='duration-200'>
                    <Heading fontWeight={500} fontSize={{md: 20, base: 16}}>TOYOTA AVALON HYBRID</Heading>
                </Flex>
            </Box>
       </Slider>
    </Box>
  )
}
