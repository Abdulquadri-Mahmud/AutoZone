import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Section4() {
  return (
    <Flex justifyContent={'center'} my={'8vh'} gap={{md: 10, base: 5}} flexWrap={'wrap'} p={{md: 10, base: 2}} maxW={{md: '90%', base: '97%'}} mx={'auto'} position={'relative'} bg={useColorModeValue('white')}>
        <Flex justifyContent={'center' } alignItems={'center'} width={{md: '30%', base: '97%'}} px={3} py={8} bg={useColorModeValue('green.500')} color={'white'} rounded={5}>
            <Box>
                <Text textAlign={'center'} fontWeight={500} fontSize={16} >Are You Looking</Text>
                <Heading textAlign={'center'} my={4} fontWeight={500} fontSize={25}>To Buy A Car ?</Heading>
                <Text textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..</Text>
                <Flex justifyContent={'center'} mt={5}>
                    <Button rounded={3}><Link to={'/'}>SEARCH YOUR CAR</Link></Button>
                </Flex>
            </Box>
        </Flex>
        <Flex justifyContent={'center' } alignItems={'center'} width={{md: '30%', base: '97%'}} px={3} py={8} bg={useColorModeValue('green.500')} color={'white'} rounded={5}>
            <Box>
                <Text textAlign={'center'} fontWeight={500} fontSize={16} >Are You Looking</Text>
                <Heading textAlign={'center'} my={4} fontWeight={500} fontSize={25}>To Buy A Car ?</Heading>
                <Text textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..</Text>
                <Flex justifyContent={'center'} mt={5}>
                    <Button rounded={3}><Link to={'/'}>SEARCH YOUR CAR</Link></Button>
                </Flex>
            </Box>
        </Flex>
        <Flex justifyContent={'center' } alignItems={'center'} width={{md: '30%', base: '97%'}} px={3} py={8} bg={useColorModeValue('green.500')} color={'white'} rounded={5}>
            <Box>
                <Text textAlign={'center'} fontWeight={500} fontSize={16} >Are You Looking</Text>
                <Heading textAlign={'center'} my={4} fontWeight={500} fontSize={25}>To Buy A Car ?</Heading>
                <Text textAlign={'center'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..</Text>
                <Flex justifyContent={'center'} mt={5}>
                    <Button rounded={3}><Link to={'/'}>SEARCH YOUR CAR</Link></Button>
                </Flex>
            </Box>
        </Flex>
    </Flex>
  )
}
