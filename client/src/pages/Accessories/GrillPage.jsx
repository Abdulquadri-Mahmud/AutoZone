import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Grills from '../../components/Accessories/Grills';

export const GrillContext = createContext();

export default function GrillPage() {
  const [grill, setGrill] = useState({});

    useEffect(()=> {
        const Grill = async () => {
        try {
            const res = await fetch('/api/accessories/car-grill');
            const data =  await res.json();
            setGrill(data);
        } catch (error) {
            console.log(error);
        }
        }; Grill();
    }, []);
  return (
    <Box>
      <GrillContext.Provider value={grill}>
        <Grills grill={grill}/>
      </GrillContext.Provider>
    </Box>
  )
}