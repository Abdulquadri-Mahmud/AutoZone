import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from '../components/Header'
import CarSalesList from '../components/Cars/CarSalesList'

export default function SearchPage() {
  return (
    <Box>
        <Header/>
        <CarSalesList/>
    </Box>
  )
}
