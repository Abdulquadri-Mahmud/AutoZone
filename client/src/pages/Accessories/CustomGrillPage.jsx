import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import CustomGrill from '../../components/Accessories/CustomGrill';

export const CustomGrillsContext = createContext();

export default function CustomGrillPage() {
    const [customGrill, setCustomGrill] = useState({});

    useEffect(()=> {
        const customGrill = async () => {
        try {
            const res = await fetch('/api/accessories/car-custom-grill');
            const data =  await res.json();
            setCustomGrill(data);
        } catch (error) {
            console.log(error);
        }
        }; customGrill();
    }, []);
  return (
    <Box>
      <CustomGrillsContext.Provider value={customGrill}>
        <CustomGrill customGrill={customGrill}/>
      </CustomGrillsContext.Provider>
    </Box>
  )
}
