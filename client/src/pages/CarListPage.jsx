import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import CarListLoader from '../components/Loaders/CarListLoader';
import CarList from '../components/Cars/CarList'

// const CarList = React.lazy(() => import('../components/Cars/CarList'))

export default function CarListPage() {

  return (
    <Box>
      <CarList/>
    </Box>
  )
}
