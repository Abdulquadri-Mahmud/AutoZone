import { Box } from '@chakra-ui/react'
import React, { Suspense, createContext, useEffect, useState } from 'react';

import Loader from '../components/Loaders/CarGridLoader';
import CarSalesList from '../components/Cars/CarSalesList';
import Header from '../components/Header';

export const CarListContext = createContext();

// const CarSalesList = React.lazy(() => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(import('../components/Cars/CarSalesList'))
//     }, 3000);
//   })
// })

export default function CarProducts() {
  const [cars, setCars] = useState({ });

  useEffect(() => {
    
    const fetchCarList = async () => {  
      
      try {
        const res = await fetch('/api/cars/allcarlists');

        const data = await res.json();
        setCars(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchCarList();
  }, [])
  
  return (
    <Box>
      <Header/>
      <CarListContext.Provider value={cars}>
          <CarSalesList cars={cars}/>
        {/* <Suspense fallback={<Loader/>}>
        </Suspense> */}
      </CarListContext.Provider>
    </Box>
  )
}