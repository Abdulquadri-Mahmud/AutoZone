import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Hoods from '../../components/Accessories/Hoods';

export const HoodContext = createContext();

export default function HoodPage() {
    const [hood, setHood] = useState({});

    useEffect(()=> {
        const Hood = async () => {
        try {
            const res = await fetch('/api/accessories/car-hoods');
            const data =  await res.json();
            setHood(data);
        } catch (error) {
            console.log(error);
        }
        }; Hood();
    }, []);
  return (
    <Box>
      <HoodContext.Provider value={hood}>
        <Hoods hood={hood}/>
      </HoodContext.Provider>
    </Box>
  )
}
