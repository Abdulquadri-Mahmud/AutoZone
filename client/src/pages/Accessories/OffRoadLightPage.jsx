import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import OffRoadLight from '../../components/Accessories/OffRoadLight';

export const OffRoadlightContext = createContext();

export default function OffRoadLightPage() {
    const [offroadlight, setOffRoadlight] = useState({});

    useEffect(()=> {
        const OffRoadlight = async () => {
        try {
            const res = await fetch('/api/accessories/car-offroadlight');
            const data =  await res.json();
            setOffRoadlight(data);
        } catch (error) {
            console.log(error);
        }
        }; OffRoadlight();
    }, []);

  return (
    <Box>
      <OffRoadlightContext.Provider value={offroadlight}>
        <OffRoadLight offroadlight={offroadlight}/>
      </OffRoadlightContext.Provider>
    </Box>
  )
}
