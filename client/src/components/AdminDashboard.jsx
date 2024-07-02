import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function AdminDashboard() {
  return (
    <Flex width={'100%'} height={{md: '100vh', base: '100%'}} bg={useColorModeValue('blue.500')} color={'white'} p={3}>
      <Box width={'250px'} >
        <Heading fontSize={30} fontWeight={500} textAlign={'center'}>Admin</Heading>
      </Box>
      <Box bg={useColorModeValue('white', '')} rounded={10} flex={'1'}>

      </Box>
    </Flex>
  )
}
