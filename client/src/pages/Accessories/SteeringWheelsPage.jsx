import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import SteeringWheels from '../../components/Accessories/SteeringWheels';
import Header from '../../components/Header';

export const SteeringWheelsContext = createContext();

export default function SteeringWheelsPage() {
    const [steeringwheels, setSteeringWheels] = useState({});

    useEffect(()=> {
        const SteeringWheels = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setSteeringWheels(data);
        } catch (error) {
            console.log(error);
        }
        }; SteeringWheels();
    }, []);

  return (
    <Box>
      <Header/>
      <SteeringWheelsContext.Provider value={steeringwheels}>
        <SteeringWheels steeringwheels={steeringwheels}/>
      </SteeringWheelsContext.Provider>
    </Box>
  )
}
