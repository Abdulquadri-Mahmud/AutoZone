import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Ledlight from '../../components/Accessories/Ledlight';

export const LedlightContext = createContext();

export default function LedlightPage() {
    const [ledlight, setLedlight] = useState({});

    useEffect(()=> {
        const Ledlight = async () => {
        try {
            const res = await fetch('/api/accessories/car-ledlight');
            const data =  await res.json();
            setLedlight(data);
        } catch (error) {
            console.log(error);
        }
        }; Ledlight();
    }, []);

  return (
    <Box>
      <LedlightContext.Provider value={ledlight}>
        <Ledlight ledlight={ledlight}/>
      </LedlightContext.Provider>
    </Box>
  )
}
