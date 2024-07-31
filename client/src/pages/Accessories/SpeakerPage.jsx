import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Speaker from '../../components/Accessories/Speaker';
import Header from '../../components/Header';

export const SpeakerContext = createContext();

export default function SpeakerPage() {
  const [item, setItems] = useState({});
  useEffect(()=> {
    const fetchItems = async () => {
      try {
        const res = await fetch('/api/accessories/all-accessory');
        const data =  await res.json();
        setItems(data);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchItems();
  }, []);

  return (
    <Box>
      <Header/>
      <SpeakerContext.Provider value={item}>
        <Speaker item={item}/>
      </SpeakerContext.Provider>
    </Box>
  )
}
