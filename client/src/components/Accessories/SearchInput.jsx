import React, { useEffect, useRef, useState } from 'react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverCloseButton,
    Box,
    Button,
    Flex,
    useColorModeValue,
    FormControl,
    Input,
} from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function SearchInput() {
    const initialFocusRef = useRef();
    const [searchTerm, setSearchTerm] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // fetch url using search params
        const urlParams = new URLSearchParams(window.location.search);
        // set search term
        urlParams.set('searchTerm', searchTerm);
        // get all the url from query and convert url params too string
        const searchQuery = urlParams.toString();
        // then navigate 
        navigate(`/search?${searchQuery}`)
    }

  return (
    <Box>
        <Popover initialFocusRef={initialFocusRef} placement='bottom' closeOnBlur={false}>
            <PopoverTrigger>
                <Button bg={'transparent'} _hover={{bg: 'transparent'}} px={0}>
                    <FaSearch className='text-xl hover:text-blue-500 duration-150'/>
                </Button>
            </PopoverTrigger>
            <PopoverContent>
            <PopoverCloseButton bg={useColorModeValue('blue.500', 'gray.200')} color={useColorModeValue('white', 'black')}/>
                <PopoverHeader textAlign={'center'} py={3}>
                    Find Your Right Car
                </PopoverHeader>
                <PopoverBody p={5}>
                    <form onSubmit={handleSubmit}>
                        <Input type="text" outline={'none'} border={'none'} bg={useColorModeValue('gray.200', 'gray.300')} p={4} rounded={3} color={useColorModeValue('black', 'black')} value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder='Type in your favorite car'/>
                        <Flex justifyContent={'center'} mt={4}>
                            <Button type='submit' width={'150px'} py={3} bg={useColorModeValue('blue.500', 'gray.300')} _hover={{bg: useColorModeValue('blue.400')}} color={useColorModeValue('white', 'black')}>Search</Button>
                        </Flex>
                    </form>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    </Box>
  )
}
