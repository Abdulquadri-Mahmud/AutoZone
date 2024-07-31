import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Amplifier from '../../components/Accessories/Amplifier';
import Header from '../../components/Header';


export const AmplifierContext = createContext();

export default function AmplifierPage() {
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
      <AmplifierContext.Provider value={item}>
        <Amplifier item={item}/>
      </AmplifierContext.Provider>
    </Box>
  )
}
