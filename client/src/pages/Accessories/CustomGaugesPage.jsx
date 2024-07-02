import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import CustomGauges from '../../components/Accessories/CustomGauges';

export const CustomGaugesContext = createContext();

export default function CustomGaugesPage() {
    const [customGauges, setCustomGauges] = useState({});

    useEffect(()=> {
        const CustomGuages = async () => {
        try {
            const res = await fetch('/api/accessories/car-custom-gauges');
            const data =  await res.json();
            setCustomGauges(data);
        } catch (error) {
            console.log(error);
        }
        }; CustomGuages();
    }, []);

  return (
    <Box>
      <CustomGaugesContext.Provider value={customGauges}>
        <CustomGauges customGauges={customGauges}/>
      </CustomGaugesContext.Provider>
    </Box>
  )
}
