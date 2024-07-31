import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Hoods from '../../components/Accessories/Hoods';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const HoodContext = createContext();

export default function HoodPage() {
    const [hood, setHood] = useState({});

    useEffect(()=> {
        const Hood = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setHood(data);
        } catch (error) {
            console.log(error);
        }
        }; Hood();
    }, []);
  return (
    <Box>
      <Header/>
      <HoodContext.Provider value={hood}>
        <Hoods hood={hood}/>
      </HoodContext.Provider>
      <Footer/>
    </Box>
  )
}
