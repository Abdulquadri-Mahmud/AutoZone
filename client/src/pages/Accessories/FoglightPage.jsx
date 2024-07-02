import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Foglight from '../../components/Accessories/Foglight';

export const FoglightsContext = createContext();

export default function FoglightPage() {
    const [foglight, setFoglight] = useState({});

    useEffect(()=> {
        const Foglights = async () => {
        try {
            const res = await fetch('/api/accessories/car-foglight');
            const data =  await res.json();
            setFoglight(data);
        } catch (error) {
            console.log(error);
        }
        }; Foglights();
    }, []);

  return (
    <Box>
      <FoglightsContext.Provider value={foglight}>
        <Foglight foglight={foglight}/>
      </FoglightsContext.Provider>
    </Box>
  )
}
