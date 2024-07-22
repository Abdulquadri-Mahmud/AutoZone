import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Door from '../../components/Accessories/Door';
import Header from '../../components/Header';

export const DoorContext = createContext();

export default function DoorPage() {
    const [door, setDoor] = useState({});

    useEffect(()=> {
        const amplifier = async () => {
        try {
            const res = await fetch('/api/accessories/car-door');
            const data =  await res.json();
            setDoor(data);
        } catch (error) {
            console.log(error);
        }
        }; amplifier();
    }, []);

  return (
    <Box>
        <Header/>
        <DoorContext.Provider value={door}>
            <Door door={door}/>
        </DoorContext.Provider>
    </Box>
  )
}
