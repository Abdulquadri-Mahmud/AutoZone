import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

export default function AdminThemes() {
    const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width={'100%'}>
      <Button width={'100%'} textAlign={'start'}  onClick={toggleColorMode} color={useColorModeValue('black', 'black')}
       bg={'transparent'} height={'40px'}>
        {
            colorMode === 'light' ? 
            <span className='text-start'>
              <MoonIcon color={useColorModeValue('black', 'white')}/> 
            </span> : 
            <span className='text-start'>
              <SunIcon fontWeight={500} color={useColorModeValue('white', 'black')}/>
            </span>
        }
      </Button>
    </Box>
  )
}
