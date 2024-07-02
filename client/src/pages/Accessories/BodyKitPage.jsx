import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import BodyKit from '../../components/Accessories/BodyKit';

export const BodyKitContext = createContext();

export default function BodyKitPage() {
  const [bodyKit, setBodyKit] = useState({});

  useEffect(()=> {
    const amplifier = async () => {
      try {
          const res = await fetch('/api/accessories/car-body-kit');
          const data =  await res.json();
          setBodyKit(data);
      } catch (error) {
          console.log(error);
      }
    }; amplifier();
  }, []);

  return (
    <Box>
      <BodyKitContext.Provider value={bodyKit}>
        <BodyKit bodyKit={bodyKit}/>
      </BodyKitContext.Provider>
    </Box>
  )
}
