import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import CarListLoader from '../components/Loaders/CarListLoader';
// import CarList from ''

const CarList = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/Cars/CarList'))
    }, 1000);
  })
})

export default function CarListPage() {

  return (
    <Box>
      <Suspense fallback={<CarListLoader/>}>
        <CarList/>
      </Suspense>
    </Box>
  )
}
