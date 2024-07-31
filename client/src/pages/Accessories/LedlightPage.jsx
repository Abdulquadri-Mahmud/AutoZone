import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Ledlight from '../../components/Accessories/Ledlight';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const LedlightContext = createContext();

export default function LedlightPage() {
    const [ledlight, setLedlight] = useState({});

    useEffect(()=> {
        const Ledlight = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setLedlight(data);
        } catch (error) {
            console.log(error);
        }
        }; Ledlight();
    }, []);

  return (
    <Box>
      <Header/>
      <LedlightContext.Provider value={ledlight}>
        <Ledlight ledlight={ledlight}/>
      </LedlightContext.Provider>
      <Footer/>
    </Box>
  )
}
