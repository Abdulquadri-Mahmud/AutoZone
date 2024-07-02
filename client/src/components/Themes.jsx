import { useColorMode } from '@chakra-ui/react';
import { useColorModeValue } from '@chakra-ui/react';
import { Box, Button, Text } from '@chakra-ui/react';
import { MoonIcon,SunIcon } from '@chakra-ui/icons';

export default function Themes() {
    const {colorMode, toggleColorMode } = useColorMode();

  return (
    <Box width={'100%'}>
      <Button width={'100%'} textAlign={'start'}  onClick={toggleColorMode} color={useColorModeValue('black', 'black')}
       bg={useColorModeValue('gray.200', 'gray.200')} height={'40px'}>
        {
            colorMode === 'light' ? 
            <span className='text-start'>
              {/* <MoonIcon color={useColorModeValue('black', 'white')}/>  */}
              Dark
            </span> : 
            <span className='text-start'>
              {/* <SunIcon color={useColorModeValue('black', 'white')}/> */}
              Light
            </span>
        }
      </Button>
    </Box>
  )
}
