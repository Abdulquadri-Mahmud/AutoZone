import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Bumper from '../../components/Accessories/Bumper';
import Header from '../../components/Header';

export const BumpersContext = createContext();

export default function BumperPage() {
    const [bumpers, setBumpers] = useState({});

    useEffect(()=> {
        const Bumpers = async () => {
            try {
                const res = await fetch('/api/accessories/car-bumper');
                const data =  await res.json();
                setBumpers(data);
            } catch (error) {
                console.log(error);
            }
            }; Bumpers();
    }, []);

  return (
    <Box>
        <Header/>
        <BumpersContext.Provider value={bumpers}>
            <Bumper bumpers={bumpers}/>
        </BumpersContext.Provider>
    </Box>
  )
}
