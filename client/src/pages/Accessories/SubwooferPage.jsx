import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Subwoofer from '../../components/Accessories/Subwoofer';

export const SubwooferContext = createContext();

export default function SubwooferPage() {
    const [subwoofer, setSubwoofer] = useState({});

    useEffect(()=> {
        const amplifier = async () => {
        try {
            const res = await fetch('/api/accessories/car-subwoofer');
            const data =  await res.json();
            setSubwoofer(data);
        } catch (error) {
            console.log(error);
        }
        }; amplifier();
    }, []);

  return (
    <Box>
        <SubwooferContext.Provider value={subwoofer}>
            <Subwoofer subwoofer={subwoofer}/>
        </SubwooferContext.Provider>
    </Box>
  )
}
