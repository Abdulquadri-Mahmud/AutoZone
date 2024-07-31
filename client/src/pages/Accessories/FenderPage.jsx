import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react';
import Fender from '../../components/Accessories/Fender';
import Header from '../../components/Header';

export const FenderContext = createContext();

export default function FenderPage() {
    const [fender, setFender] = useState({});

    useEffect(()=> {
        const fender = async () => {
        try {
            const res = await fetch('/api/accessories/all-accessory');
            const data =  await res.json();
            setFender(data);
        } catch (error) {
            console.log(error);
        }
        }; fender();
    }, []);
  return (
    <Box>
        <Header/>
        <FenderContext.Provider value={fender}>
            <Fender fender={fender}/>
        </FenderContext.Provider>
    </Box>
  )
}
