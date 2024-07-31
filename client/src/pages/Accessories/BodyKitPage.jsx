import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import BodyKit from '../../components/Accessories/BodyKit';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const BodyKitContext = createContext();

export default function BodyKitPage() {
  const [bodyKit, setBodyKit] = useState({});

  useEffect(()=> {
    const amplifier = async () => {
      try {
          const res = await fetch('/api/accessories/all-accessory');
          const data =  await res.json();
          setBodyKit(data);
      } catch (error) {
          console.log(error);
      }
    }; amplifier();
  }, []);

  return (
    <Box>
      <Header/>
      <BodyKitContext.Provider value={bodyKit}>
        <BodyKit bodyKit={bodyKit}/>
      </BodyKitContext.Provider>
      <Footer/>
    </Box>
  )
}
