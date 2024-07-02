import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react'
import { MdAdminPanelSettings } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function AdminHeaderAuth() {
    const { currentUser } = useSelector((state) => state.user);
    const { currentAdmin } = useSelector((state) => state.admin);
  return (
    <>
        {
            currentUser ? (
                <>
                </>
            ) : currentAdmin ? (
                <>
                    <Link to={'/admin-dashboard'}>
                        <Button bg={'gray.200'} color={useColorModeValue('black')} _hover={{bg: 'gray.100'}}>Dashboard</Button>
                    </Link>
                    {/* <Link to={'/createblog'}>
                        <Button bg={'gray.200'} color={useColorModeValue('black')} _hover={{bg: 'gray.100'}}>Create Blog</Button>
                    </Link> */}
                </>
            ) : (
                <>
                    <Link to={'/admin'}>
                        <MdAdminPanelSettings className='text-2xl'/>
                    </Link>
                </>
            )
        }
    </>
  )
}
