import { Box, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { GiSteeringWheel } from "react-icons/gi";
import { BiMessageRoundedDetail } from "react-icons/bi";

export default function Section3() {
  return (
    <Box mt={'10vh'} p={{md: 5, base: 0}} maxW={{'2xl': '70%',md: '90%', base: '97%'}} mx={'auto'}>
        <Box>
            <Text fontSize={20} textAlign={'center'}>Welcome To Our Website</Text>
            <Heading my={3} textAlign={'center'} fontWeight={500} fontSize={35} className='uppercase'>Car Dealership</Heading>
            <Flex justifyContent={'center'}>
                <Box width={'100px'} height={1} bg={useColorModeValue('gray.300')}></Box>
            </Flex>
            <Box width={{md: '70%', base: '100%'}} mx={'auto'}>
                <Text fontSize={16} my={3} textAlign={'center'}> Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the been when an unknown printer.</Text>
            </Box>
        </Box>
        <Flex mt={14} flexWrap={'wrap'} justifyContent={'center'} gap={3}>
            <Box width={{xl: '23%',md: '45%', base: '47%'}} bgImage={'/car1.jpg'} bgRepeat={'no-repeat'} px={4} py={10} bgPos={'center'} bgSize={'cover'} className='section3'>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box>

                    </Box>
                </Flex>
                <Text textAlign={'center'} fontSize={20} py={5}>ALL BRANDS</Text>
                <Text fontSize={14} fontWeight={400} textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</Text>
                
            </Box>
         <Box width={{xl: '23%',md: '45%', base: '47%'}} bgImage={'/car2.jpg'} bgRepeat={'no-repeat'} px={4} py={10} bgPos={'center'} bgSize={'cover'} className='section3'>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box>

                    </Box>
                </Flex>
                <Text textAlign={'center'} fontSize={20} py={5}>FREE SUPPORT</Text>
                <Text fontSize={14} fontWeight={400} textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</Text>
                
            </Box>
         <Box width={{xl: '23%',md: '45%', base: '47%'}} bgImage={'/car3.jpg'} bgRepeat={'no-repeat'} px={4} py={10} bgPos={'center'} bgSize={'cover'} className='section3'>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box>

                    </Box>
                </Flex>
                <Text textAlign={'center'} fontSize={20} py={5}>DEALERSHIP</Text>
                <Text fontSize={14} fontWeight={400} textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</Text>
                
            </Box>
         <Box width={{xl: '23%',md: '45%', base: '47%'}} bgImage={'/car4.jpg'} bgRepeat={'no-repeat'} px={4} py={10} bgPos={'center'} bgSize={'cover'} className='section3'>
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Box>

                    </Box>
                </Flex>
                <Text textAlign={'center'} fontSize={20} py={5}>AFFORDABLE</Text>
                <Text fontSize={14} fontWeight={400} textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and type setting industry.</Text>
                
            </Box>
        </Flex>
    </Box>
  )
}
