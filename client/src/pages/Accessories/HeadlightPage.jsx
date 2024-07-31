import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Headlight from '../../components/Accessories/Headlight';
import Header from '../../components/Header';

export const HeadlightContext = createContext();

export default function HeadlightPage() {
    const [headlight, setHeadlight] = useState({});

    useEffect(()=> {
        const Headlight = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setHeadlight(data);
        } catch (error) {
            console.log(error);
        }
        }; Headlight();
    }, []);

  return (
    <Box>
      <Header/>
      <HeadlightContext.Provider value={headlight}>
        <Headlight headlight={headlight}/>
      </HeadlightContext.Provider>
    </Box>
  )
}
