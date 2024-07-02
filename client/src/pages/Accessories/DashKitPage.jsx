import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import DashKit from '../../components/Accessories/DashKit';

export const DashKItsContext = createContext();

export default function DashKitPage() {
    const [dashkit, setDashKit] = useState({});

    useEffect(()=> {
        const DashKit = async () => {
        try {
            const res = await fetch('/api/accessories/car-dash-kits');
            const data =  await res.json();
            setDashKit(data);
        } catch (error) {
            console.log(error);
        }
        }; DashKit();
    }, []);

  return (
    <Box>
      <DashKItsContext.Provider value={dashkit}>
        <DashKit dashkit={dashkit}/>
      </DashKItsContext.Provider>
    </Box>
  )
}
