import React from 'react'
import {Box, Flex, Heading, Text, Image, Button, useColorModeValue} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import carImg from '../assets/img/car-remove.png';
import member1 from '../assets/img/member1.png';
import member2 from '../assets/img/member2.png';
import member3 from '../assets/img/member3.png';

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

export default function Testimonial() {
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
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      }
    ]
  };
  return (
    <Box my={'5rem'} py={10} position={'relative'} bgGradient='linear(blue.700, gray.800)' height={'100%'}>
      <Heading color={'white'} textAlign={'center'} py={6} fontWeight={500} fontSize={35}>Customers Review</Heading>
      <Box w={{md:'85%', base: '100%'}} mx={'auto'} bg={''} color={useColorModeValue('white')}>
        <Slider {...settings}>
          <Box width={'100%'} padding={{md: 6, base: 2}}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} p={4} className='testimonial' rounded={10}>
              <Box justifyContent={'center'} alignItems={'center'} width={'150px'} rounded={'full'} padding={2} bg={'gray.300'}>
                <img src={member1} alt="" className='max-w-full rounded-full'/>
              </Box>
              <Box mt={5}>
                <Heading fontWeight={500} fontSize={25} textAlign={'center'} pb={3}>Smith Jhon</Heading>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium et ipsam est dolore reiciendis ea labore tempora omnis facere sequi cupiditate neque ex, voluptatibus magnam aut soluta quasi ratione!</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={'100%'} padding={{md: 6, base: 2}}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} p={4} className='testimonial' rounded={10}>
              <Box justifyContent={'center'} alignItems={'center'} width={'150px'} rounded={'full'} padding={2} bg={'gray.300'}>
                <img src={member2} alt="" className='max-w-full rounded-full'/>
              </Box>
              <Box mt={5}>
                <Heading fontWeight={500} fontSize={25} textAlign={'center'} pb={3}>Sahara Anderson</Heading>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium et ipsam est dolore reiciendis ea labore tempora omnis facere sequi cupiditate neque ex, voluptatibus magnam aut soluta quasi ratione!</Text>
              </Box>
            </Flex>
          </Box>
          <Box width={'100%'} padding={{md: 6, base: 2}}>
            <Flex flexDir={'column'} justifyContent={'center'} alignItems={'center'} p={4} className='testimonial' rounded={10}>
              <Box justifyContent={'center'} alignItems={'center'} width={'150px'} rounded={'full'} padding={2} bg={'gray.300'}>
                <img src={member3} alt="" className='max-w-full rounded-full'/>
              </Box>
              <Box mt={5}>
                <Heading fontWeight={500} fontSize={25} textAlign={'center'} pb={3}>Stephen Smith</Heading>
                <Text textAlign={'center'}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laudantium et ipsam est dolore reiciendis ea labore tempora omnis facere sequi cupiditate neque ex, voluptatibus magnam aut soluta quasi ratione!</Text>
              </Box>
            </Flex>
          </Box>
        </Slider>
      </Box>
    </Box>
  )
}
