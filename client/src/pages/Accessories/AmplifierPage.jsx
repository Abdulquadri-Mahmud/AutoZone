import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Amplifier from '../../components/Accessories/Amplifier';
import Header from '../../components/Header';


export const AmplifierContext = createContext();

export default function AmplifierPage() {
    const [amplifier, setAmplifier] = useState({});

    useEffect(()=> {
        const amplifier = async () => {
        try {
            const res = await fetch('/api/accessories/car-amplifier');
            const data =  await res.json();
            setAmplifier(data);
        } catch (error) {
            console.log(error);
        }
    }
    amplifier();
    }, []);
    
    return (
    <Box>
      <Header/>
      <AmplifierContext.Provider value={amplifier}>
        <Amplifier amplifier={amplifier}/>
      </AmplifierContext.Provider>
    </Box>
  )
}
