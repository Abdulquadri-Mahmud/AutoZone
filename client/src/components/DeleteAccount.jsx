import { Box, Button, Flex, Spinner, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'

export default function DeleteAccount() {
    const {currentUser, loading, error} = useSelector((state) => state.user);

    const handleDelete = async () => {
        try {
          
        } catch (error) {
          
        }
      }

  return (
    <div>
        
    </div>
  )
}
