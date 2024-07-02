import {Box, Flex, Heading, Text, Image, Button, useColorModeValue, Input} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import img from '/car4.jpg';
import { color } from 'framer-motion';
import { FaPhoneVolume } from 'react-icons/fa';

export default function Footer() {
  return (
    <Box mt={'3rem'} bg={useColorModeValue('blue.700', 'gray.800')} color={'white'}>
      <Box position={'relative'} backgroundPosition="left" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={`url(${img})`} h={{md:'40vh', base: '45vh'}} w={'full'}>
        <Box position="absolute" top={0} left={0} w="full" h="full" bg="#0f0f0f" opacity={0.8} bgBlendMode="multiply"/>
        <Box width={'100%'} position={'absolute'} top={'50%'} left={'50%'} className='translate-x-[-50%] translate-y-[-50%]'>
          <Heading fontWeight={500} fontSize={25} textAlign={'center'}>NEWSLETTER</Heading> 
          <Heading fontWeight={500} fontSize={{md: 30, base: 20}} color={'white'} textAlign={'center'} pt={3}>GET NOFITFIED OF ANY UPDATES!</Heading>
          <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} gap={1} px={{base: 4, md: 0}} mt={4}>
            <Input w={{md: '50%', base: '90%'}} height={'55.7px'} bg={useColorModeValue('gray.200', 'gray.200')} type="email" className='py-4 md:w-[50%] sm:w-[90%] w-full pl-5 outline-none border-0 rounded-none text-black font-medium' placeholder='Enter your email address'/>
            <Button py={7} rounded={'none'} px={{base: 6, md: 8}} bg={'blue.500'} color={'white'} _hover={{bg: 'blue.600'}}>SUBSCRIBE</Button>
          </Flex>
        </Box>
      </Box>
      <Box padding={{md: 10, base: 3}} className='grid grid-cols-1 md:place-items-center place-items-start md:grid-cols-4 gap-4'>
        <Box>
          <Heading fontWeight={500} fontSize={20}>SHOWROOM</Heading>
          <Box>
            <Text className='my-5'>1 Akin Ogunlewe, Ikorodu, Lagos, Nigeria.</Text>
            <Link to={'tel:+2347047594667'}>
              <Flex alignItems={'center'} gap={2} className='mt-3'>
                <FaPhoneVolume className=''/>
                <Text fontSize={16}>+234 704 7594 667</Text>
              </Flex>
            </Link>
            <Box my={5}>
              <Link to={'mailto:carblog@carblog.com'}>carblog@carblog.com</Link>
            </Box>
            <Box>
              <Text>Mon - Fri : 09am to 06pm</Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Heading fontWeight={500} fontSize={20}>QUICK LINKS</Heading>
          <Flex flexDirection={'column'} gap={2}>
            <Link to={'/'}  className='mt-5 hover:text-red-500 duration-150'>Blog</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150' >FAQs</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150' >Payment</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150' >Shipment</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150' >Where is my order</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150' >Return policy</Link>
          </Flex>
        </Box>
        <Box>
          <Heading fontWeight={500} fontSize={20}>STYLE ADVISOR</Heading>
          <Flex flexDirection={'column'} gap={2}>
            <Link to={'/'}  className='mt-5 hover:text-red-500 duration-150'>Your Account</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>Information</Link> 
            <Link to={'/'} className='hover:text-red-500 duration-150'>Address</Link> 
            <Link to={'/'} className='hover:text-red-500 duration-150'>Discount</Link> 
            <Link to={'/'} className='hover:text-red-500 duration-150'>Order History</Link> 
            <Link to={'/'} className='hover:text-red-500 duration-150'>Additional Information</Link> 
          </Flex>
        </Box>
        <Box>
          <Heading fontWeight={500} fontSize={20}>INFORMATION</Heading>
          <Flex flexDirection={'column'} gap={2}>
            <Link to={'/'}  className='mt-5 hover:text-red-500 duration-150'>Site Map</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>Search Terms</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>Advance Search</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>About Us</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>Contact Us</Link>
            <Link to={'/'} className='hover:text-red-500 duration-150'>Suppliers</Link>
          </Flex>
        </Box>
      </Box>
    </Box>
  )
}
