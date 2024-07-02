import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Headlight from '../../components/Accessories/Headlight';

export const HeadlightContext = createContext();

export default function HeadlightPage() {
    const [headlight, setHeadlight] = useState({});

    useEffect(()=> {
        const Headlight = async () => {
        try {
            const res = await fetch('/api/accessories/car-headlight');
            const data =  await res.json();
            setHeadlight(data);
        } catch (error) {
            console.log(error);
        }
        }; Headlight();
    }, []);

  return (
    <Box>
      <HeadlightContext.Provider value={headlight}>
        <Headlight headlight={headlight}/>
      </HeadlightContext.Provider>
    </Box>
  )
}
