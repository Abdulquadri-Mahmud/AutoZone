import { Box, Heading } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

export default function 
PageNotFound() {
  return (
    <>
      <Header/>
      <Box textAlign={'center'} my={'5rem'}>
          <Heading paddingBottom={10}>PageNotFound</Heading>
          <Link to={'/'} className='text-blue-500 pt-10'>Back to home page</Link>
      </Box>
    </>
  )
}
