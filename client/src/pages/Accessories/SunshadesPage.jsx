import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Sunshades from '../../components/Accessories/Sunshades';
import Header from '../../components/Header';

export const SunshadesContext = createContext();

export default function SunshadesPage() {
    const [sunshades, setSunshades] = useState({});

    useEffect(()=> {
        const Sunshades = async () => {
        try {
            const res = await fetch('/api/accessories/car-sunshades');
            const data =  await res.json();
            setSunshades(data);
        } catch (error) {
            console.log(error);
        }
        }; Sunshades();
    }, []);

  return (
    <Box>
      <Header/>
      <SunshadesContext.Provider value={sunshades}>
        <Sunshades sunshades={sunshades}/>
      </SunshadesContext.Provider>
    </Box>
  )
}
