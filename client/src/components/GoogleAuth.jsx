import { Box, Button } from '@chakra-ui/react'
import React from 'react'

export default function GoogleAuth() {
  return (
    <Box width={'100%'} mt={2}>
        <Button bg={'red.600'} _hover={{opacity:'0.9'}} color={'#fff'} className='w-full p-2 uppercase'>Sign In With Google</Button>
    </Box>
  )
}
