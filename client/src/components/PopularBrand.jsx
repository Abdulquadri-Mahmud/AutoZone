import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brand1 from '../assets/brand/brand1.png';
import brand2 from '../assets/brand/brand2.png';
import brand3 from '../assets/brand/brand3.png';
import brand4 from '../assets/brand/brand4.png';
import brand5 from '../assets/brand/brand5.png';
import brand6 from '../assets/brand/brand6.png';

import br1 from '../assets/world-icon.png';
import br2 from '../assets/car-sold-icon.png';
import br3 from '../assets/tag-icon.png';
import br4 from '../assets/compare-icon.png';

function SampleNextArrow(props) {
  
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",
        background: 'rgb(59 130 246)', top: -30,
        right: 10,width: '30px',
        height: '30px',padding: 5 
        }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className='flex justify-center items-center bg-white p-2'>
            <div
              className={className}
              style={{...style, display: "block",
              background: 'rgb(59 130 246)', top: '9.7rem',
              left: '-0.1rem',
              width: '30px',
              height: '30px',
              padding: 5 
              }}
              onClick={onClick}
            />
        </div>
    );
  }

export default function PopularBrand() {
    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 6,
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
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            }
          ]
      };
  return (
    <Box pb={'4rem'} position={'relative'}>
        <Box maxW={{md: '80%', base: '100%'}} mx={'auto'} padding={'15px'} position={'relative'} bg={useColorModeValue('gray.200')}>
            <Box borderBottomWidth={2} borderBottomColor={'gray.400'}>
                <Box width={'300px'} padding={4} bg={useColorModeValue('blue.500', 'gray.700')}>
                    <Heading fontSize={25} fontWeight={500} color={'white'}>POPULAR BRANDS</Heading>
                </Box>
            </Box>
            <Slider {...settings}>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand1} alt="" />
                    </Box>
                </Box>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand2} alt="" />
                    </Box>
                </Box>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand3} alt="" />
                    </Box>
                </Box>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand4} alt="" />
                    </Box>
                </Box>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand5} alt="" />
                    </Box>
                </Box>
                <Box padding={{md:6, base: 2}}>
                    <Box borderWidth={2} borderColor={'blue.500'} rounded={'md'}>
                        <img src={brand6} alt="" />
                    </Box>
                </Box>
            </Slider>
        </Box>
        {/* <Box my={16} maxW={{md: '90%', base: '100%'}} mx={'auto'} px={{md: 3, base: 2}} className='grid grid-cols-1 md:place-items-center md:grid-cols-4 md:gap-6 gap-10'>
            <Flex gap={2} alignItems={'center'}>
                <Box><img src={br1} alt="" /></Box>
                <Box>
                    <Heading textAlign={'center'} fontSize={30} fontWeight={500}>World's #1</Heading>
                    <Text fontSize={16} textAlign={'center'} color={'gray.700'}>Largest Auto portal</Text>
                </Box>
            </Flex>
            <Flex gap={2} alignItems={'center'}>
                <Box><img src={br2} alt="" /></Box>
                <Box><Heading textAlign={'center'} fontSize={30} fontWeight={500}>Car Sold</Heading>
                    <Text fontSize={16} textAlign={'center'} color={'gray.700'}>Every 10 minutes</Text>
                </Box>
            </Flex>
            <Flex gap={2} alignItems={'center'}>
                <Box><img src={br3} alt="" /></Box>
                <Box><Heading textAlign={'center'} fontSize={30} fontWeight={500}>Offers</Heading>
                    <Text fontSize={16} textAlign={'center'} color={'gray.700'}>Stay updated pay less</Text>
                </Box>
            </Flex>
            <Flex gap={2} alignItems={'center'}>
                <Box><img src={br4} alt="" /></Box>
                <Box><Heading textAlign={'center'} fontSize={30} fontWeight={500}>Compare</Heading>
                    <Text fontSize={16} textAlign={'center'} color={'gray.700'}>Decode the right car</Text>
                </Box>
            </Flex>
        </Box> */}
    </Box>
  )
}
