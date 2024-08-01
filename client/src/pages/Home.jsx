import React, { Suspense } from 'react'
import {Box, useColorModeValue } from '@chakra-ui/react';
// import AllBlogs from '';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import PopularBrand from '../components/PopularBrand';
import BlogLoader from '../components/Loaders/BlogLoader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeListOfCars from '../components/Cars/HomeListOfCars';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';

const AllBlogs = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/AllBlogs'))
    }, 3000);
  })
})

export default function Home() {
  return (
    <Box bg={useColorModeValue('gray.200')}>
      <Header/>
      <Box fontStyle={''} bg={useColorModeValue('', 'gray.800')}>
          <Hero/>
          <Section2/>
          <Section3/>
          <Box>
            <HomeListOfCars/>
          </Box>
          {/* <Section4/> */}
          <Suspense fallback={<BlogLoader/>}>
            <AllBlogs/>
          </Suspense>
          <Testimonial/>
          {/* <PopularBrand/> */}
      </Box>
      <Footer/>
    </Box>
  )
}
