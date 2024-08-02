import { Box, Button, Flex, Heading, Image, Text, useColorModeValue } from '@chakra-ui/react'
import React, { Suspense, createContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

// import CarDetails from ''

import CarListLoader from '../components/Loaders/CarListLoader';
import Header from '../components/Header';

export const CarDetailsContext = createContext();

const ListOfCars = React.lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/ListOfCars'));
    }, 2000)
  })
})

const CarDetails = React.lazy(() => import('../components/Cars/CarDetails'));

export default function CarDetailsPage() {
  const {carID} = useParams();

  const [getCarId, setGetCarId] = useState({});

  useEffect(() => {
      try {
        const fetchCarId = async () => {
          const res = await fetch(`/api/cars/singlecarlists/${carID}`);
          const data = await res.json();
          setGetCarId(data);
        }
        fetchCarId();
      } catch (error) {
        console.log(error);
      }
    }, []);

  return (
    <Box bg={useColorModeValue('gray.200')}>
      <Header/>
      <CarDetailsContext.Provider value={getCarId}>
        <Suspense fallback={'loading'}>
          <CarDetails getCarId={getCarId}/>
        </Suspense>
      </CarDetailsContext.Provider>

      <Suspense fallback={<CarListLoader/>}>
        <ListOfCars/>
      </Suspense>
    </Box>
  )
}
