import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Speaker from '../../components/Accessories/Speaker';
import Header from '../../components/Header';

export const SpeakerContext = createContext();

export default function SpeakerPage() {
    const [speaker, setSpeaker] = useState({});

  useEffect(()=> {
    const speaker = async () => {
      try {
        const res = await fetch('/api/accessories/car-speaker');
        const data =  await res.json();
        setSpeaker(data);
      } catch (error) {
        console.log(error);
      }
    }
    speaker();
  }, []);

  return (
    <Box>
      <Header/>
      <SpeakerContext.Provider value={speaker}>
        <Speaker speaker={speaker}/>
      </SpeakerContext.Provider>
    </Box>
  )
}
