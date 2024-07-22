import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import OffRoadBumper from '../../components/Accessories/OffRoadBumper';
import Header from '../../components/Header';

export const OffRoadBumberContext = createContext();

export default function OffRoadBumperPage() {
    const [offroadbumber, setOffRoadBumber] = useState({});

    useEffect(()=> {
        const OffRoadBumber = async () => {
        try {
            const res = await fetch('/api/accessories/car-offroadbumper');
            const data =  await res.json();
            setOffRoadBumber(data);
        } catch (error) {
            console.log(error);
        }
        }; OffRoadBumber();
    }, []);
  return (
    <Box>
      <Header/>
      <OffRoadBumberContext.Provider value={offroadbumber}>
        <OffRoadBumper offroadbumber={offroadbumber}/>
      </OffRoadBumberContext.Provider>
    </Box>
  )
}
