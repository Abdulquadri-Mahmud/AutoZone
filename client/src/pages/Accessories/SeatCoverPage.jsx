import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import SeatCover from '../../components/Accessories/SeatCover';

export const SeatCoverContext = createContext();

export default function SeatCoverPage() {
    const [seatcover, setSeatCover] = useState({});

    useEffect(()=> {
        const SeatCover = async () => {
        try {
            const res = await fetch('/api/accessories/car-seat-cover');
            const data =  await res.json();
            setSeatCover(data);
        } catch (error) {
            console.log(error);
        }
        }; SeatCover();
    }, []);

  return (
    <Box>
      <SeatCoverContext.Provider value={seatcover}>
        <SeatCover seatcover={seatcover}/>
      </SeatCoverContext.Provider>
    </Box>
  )
}
