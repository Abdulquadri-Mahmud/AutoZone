import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import CarCover from '../../components/Accessories/CarCover';

export const CarCoverContext = createContext();

export default function CarCoverPage() {
    const [carCover, setCarCover] = useState({});

    useEffect(()=> {
        const CarCover = async () => {
        try {
            const res = await fetch('/api/accessories/car-car-cover');
            const data =  await res.json();
            setCarCover(data);
        } catch (error) {
            console.log(error);
        }
        }; CarCover();
    }, []);

  return (
    <Box>
      <CarCoverContext.Provider value={carCover}>
        <CarCover carCover={carCover}/>
      </CarCoverContext.Provider>
    </Box>
    )
}