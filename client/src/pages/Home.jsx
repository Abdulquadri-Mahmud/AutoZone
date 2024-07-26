import React, { Suspense } from 'react'
import {Box, useColorModeValue } from '@chakra-ui/react';
// import AllBlogs from '';
import Hero from '../components/Hero';
import Testimonial from '../components/Testimonial';
import SearchHomepage from '../components/SearchHomepage';

import speakers from '../assets/img/speakers.png';
import schedule from '../assets/img/schedule.png';
import PopularBrand from '../components/PopularBrand';
import BlogLoader from '../components/Loaders/BlogLoader';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeListOfCars from '../components/Cars/HomeListOfCars';

const AllBlogs = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/AllBlogs'))
    }, 3000);
  })
})

export default function Home() {
  return (
    <>
      <Header/>
      <Box fontStyle={''} bg={useColorModeValue('gray.200', 'gray.800')}>
          <Hero/>
          <SearchHomepage/>
          <Box maxW={{md: '80%', base: '100%'}} mx={'auto'} padding={{md: 5, base: 2}} className='grid grid-cols-2 gap-5'>
            <Box>
              <img src={speakers} alt="speaker" />
            </Box>
            <Box>
              <img src={schedule} alt="speaker" />
            </Box>
          </Box>
          <Box>
            <HomeListOfCars/>
          </Box>
          <Suspense fallback={<BlogLoader/>}>
            <AllBlogs/>
          </Suspense>
          <Testimonial/>
          <PopularBrand/>
      </Box>
      <Footer/>
    </>
  )
}
