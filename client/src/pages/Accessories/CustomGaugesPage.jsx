import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import CustomGauges from '../../components/Accessories/CustomGauges';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const CustomGaugesContext = createContext();

export default function CustomGaugesPage() {
    const [customGauges, setCustomGauges] = useState({});

    useEffect(()=> {
        const CustomGuages = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setCustomGauges(data);
        } catch (error) {
            console.log(error);
        }
        }; CustomGuages();
    }, []);

  return (
    <Box>
      <Header/>
      <CustomGaugesContext.Provider value={customGauges}>
        <CustomGauges customGauges={customGauges}/>
      </CustomGaugesContext.Provider>
      <Footer/>
    </Box>
  )
}
