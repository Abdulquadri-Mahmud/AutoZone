import { Box } from '@chakra-ui/react'
import React, { Suspense } from 'react'
import Loader from '../components/Loaders/CarGridLoader'
// import CarGrid from ''

const CarGrid =  React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/Cars/CarGrid'));
    }, 3000)
  })
});

export default function CarGridPage() {
  return (
    <Suspense fallback={<Loader/>}>
      <CarGrid/>
    </Suspense>
  )
}
