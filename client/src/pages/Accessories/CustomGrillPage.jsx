import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import CustomGrill from '../../components/Accessories/CustomGrill';
import Header from '../../components/Header';

export const CustomGrillsContext = createContext();

export default function CustomGrillPage() {
    const [customGrill, setCustomGrill] = useState({});

    useEffect(()=> {
        const customGrill = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setCustomGrill(data);
        } catch (error) {
            console.log(error);
        }
        }; customGrill();
    }, []);
  return (
    <Box>
      <Header/>
      <CustomGrillsContext.Provider value={customGrill}>
        <CustomGrill customGrill={customGrill}/>
      </CustomGrillsContext.Provider>
    </Box>
  )
}
