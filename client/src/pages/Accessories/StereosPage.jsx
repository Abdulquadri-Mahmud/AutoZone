import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Stereos from '../../components/Accessories/Stereos';

export const StereosContext = createContext();

export default function StereosPage() {
    const [stereo, setStereo] = useState({});
  useEffect(()=> {
    const Stereo = async () => {
      try {
        const res = await fetch('/api/accessories/car-stereo');
        const data =  await res.json();
        setStereo(data);
      } catch (error) {
        console.log(error);
      }
    }
    Stereo();
  }, []);

  return (
    <Box>
      <StereosContext.Provider value={stereo}>
        <Stereos stereo={stereo}/>
      </StereosContext.Provider>
    </Box>
  )
}
