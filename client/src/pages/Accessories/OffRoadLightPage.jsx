import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import OffRoadLight from '../../components/Accessories/OffRoadLight';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const OffRoadlightContext = createContext();

export default function OffRoadLightPage() {
    const [offroadlight, setOffRoadlight] = useState({});

    useEffect(()=> {
        const OffRoadlight = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setOffRoadlight(data);
        } catch (error) {
            console.log(error);
        }
        }; OffRoadlight();
    }, []);

  return (
    <Box>
      <Header/>
      <OffRoadlightContext.Provider value={offroadlight}>
        <OffRoadLight offroadlight={offroadlight}/>
      </OffRoadlightContext.Provider>
      <Footer/>
    </Box>
  )
}
