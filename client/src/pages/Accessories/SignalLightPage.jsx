import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import SignalLight from '../../components/Accessories/SignalLight';
import Header from '../../components/Header';

export const SignallightContext = createContext();

export default function SignalLightPage() {
    const [signallight, setSignallight] = useState({});

    useEffect(()=> {
        const Signallight = async () => {
        try {
            const res = await fetch('/api/accessories/car-signallight');
            const data =  await res.json();
            setSignallight(data);
        } catch (error) {
            console.log(error);
        }
        }; Signallight();
    }, []);

  return (
    <Box>
      <Header/>
      <SignallightContext.Provider value={signallight}>
        <SignalLight signallight={signallight}/>
      </SignallightContext.Provider>
    </Box>
  )
}
