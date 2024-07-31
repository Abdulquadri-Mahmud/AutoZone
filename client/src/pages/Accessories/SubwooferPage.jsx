import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import Subwoofer from '../../components/Accessories/Subwoofer';
import Header from '../../components/Header';

export const SubwooferContext = createContext();

export default function SubwooferPage() {
    const [subwoofer, setSubwoofer] = useState({});

    useEffect(()=> {
        const amplifier = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setSubwoofer(data);
        } catch (error) {
            console.log(error);
        }
        }; amplifier();
    }, []);

  return (
    <Box>
        <Header/>
        <SubwooferContext.Provider value={subwoofer}>
            <Subwoofer subwoofer={subwoofer}/>
        </SubwooferContext.Provider>
    </Box>
  )
}
