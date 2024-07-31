import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Stereos from '../../components/Accessories/Stereos';
import Header from '../../components/Header';

export const StereosContext = createContext();

export default function StereosPage() {
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
      <StereosContext.Provider value={item}>
        <Stereos item={item}/>
      </StereosContext.Provider>
    </Box>
  )
}
