import { Box, Button, Flex, Heading, Select, useColorModeValue } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

export default function SearchHomepage() {

    const name = useRef();
    const condition = useRef();
    const make = useRef();
    const model = useRef();
    const location = useRef();
    const transmission = useRef();

    const [searchData, setSearchData] = useState({
        searchTerm : '',
        condition: '',
        make : '', 
        model: '',
        location: '',
        transmission: '',
    });

    const handleChange = (e) => {
        setSearchData({
            ...searchData,
            [e.target.id] : e.target.value
        });
    }

   return (
    <Box my={20} mx={{md: 0, base: 5}} zIndex={100}>
        <Box maxW={{md: '80%', base: '100%'}} mx={'auto'} rounded={5} bg={useColorModeValue('white', 'gray.700')} padding={{md: 6, base: 5}}>
            <Heading color={useColorModeValue('black', 'white')} textAlign={'center'} py={10} fontWeight={500} fontSize={30}>FIND YOUR RIGHT CAR</Heading>
            <form className='pb-10'>
                <Box className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 w-full'>
                    <Box color={useColorModeValue('black', 'gray.400')}>
                        <span className='font-normal text-sm'>Car Name:</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <input type="text" id='name' ref={name} onChange={handleChange} className='w-full border-0 outline-none bg-transparent input' placeholder='Car name'/>
                        </Box>
                    </Box>
                    <Box mt={0} color={useColorModeValue('black', 'gray.400')}>
                        <span className="font-normal text-center text-sm">Condition:</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <select ref={condition} className='w-full bg-transparent text-sm font-normal border-none outline-none'
                                onChange={handleChange} value={searchData.condition} id='condition'>
                                <option className='text-black' value="new">New</option>
                                <option className='text-black' value="used">Used</option>
                            </select>
                        </Box>
                    </Box>
                    <Box mt={0} color={useColorModeValue('black', 'gray.400')}>
                        <span className="font-normal text-center text-sm">Make</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <select ref={make} className='w-full bg-transparent text-sm  font-normal border-none outline-none'
                            onChange={handleChange} value={searchData.make} id='make'>
                                <option className='text-black' value="all">All Make</option>
                                <option className='text-black' value="Camry">Toyota</option>
                                <option className='text-black' value="Honda City">Honda City</option>
                                <option className='text-black' value="Honda">Honda Accord</option>
                                <option className='text-black' value="Honda">Honda Elevate</option>
                                <option className='text-black' value="Honda CR-V">Honda CR-V</option>
                                <option className='text-black' value="Mercedes Benz">Mercedes Benz</option>
                                <option className='text-black' value="Cheverolet">Cheverolet</option>
                            </select>
                        </Box>
                    </Box>
                    <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                        <span className="font-normal text-center text-sm">Model</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <select ref={model} className='w-full bg-transparent text-sm  font-normal border-none outline-none'
                                onChange={handleChange} value={searchData.model} id='model'>
                                <option className='text-black' value="all">All Model</option>
                                <option className='text-black' value="Corolla Cross">Corolla Cross</option>
                                <option className='text-black' value="Camry">Camry</option>
                                <option className='text-black' value="Honda City">Honda City</option>
                                <option className='text-black' value="Honda Accord">Honda Accord</option>
                                <option className='text-black' value="Honda Elevate">Honda Elevate</option>
                                <option className='text-black' value="Honda CR-V">Honda CR-V</option>
                                <option className='text-black font-semibold text-center disabled' >Mercedes Benz Models</option>
                                <option className='text-black' value="C-Class">C-Class</option>
                                
                                <option className='text-black font-semibold text-center disabled' >Cheverolet Models</option>
                                <option className='text-black' value="EQUINOX LS">EQUINOX LS</option>
                                <option className='text-black' value="Chevrolet Camaro">Chevrolet Camaro</option>
                                <option className='text-black' value="Chevrolet Corvette">Chevrolet Corvette</option>
                                <option className='text-black' value="Silverado">Silverado</option>
                                <option className='text-black' value="Trax Ls">Trax Ls</option>
                                <option className='text-black' value="Suzuki Carry">Suzuki Carry</option>
                                <option className='text-black' value="Chevrolet Aveo">Chevrolet Aveo</option>
                                <option className='text-black' value="Chevrolet Corvair">Chevrolet Corvair</option>
                                <option className='text-black' value="Chevrolet Colorado"> Chevrolet Colorado</option>
                                <option className='text-black' value="Chevrolet Spark">Chevrolet Spark</option>
                                <option className='text-black' value="Captiva">Captiva</option>
                            </select>
                        </Box>
                    </Box>
                    <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                        <span className='font-normal text-sm'>Location:</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <select ref={location} className='w-full bg-transparent text-sm  font-normal border-none outline-none'
                                onChange={handleChange} value={searchData.location} id='location'>
                                <option className='text-black' value="Lagos">Lagos</option>
                                <option className='text-black' value="Ogun">Ogun</option>
                                <option className='text-black' value="Oyo">Oyo</option>
                                <option className='text-black' value="Osun">Osun</option>
                                <option className='text-black' value="Abuja">Abuja</option>
                                <option className='text-black' value="Abuja">Kaduna</option>
                                <option className='text-black' value="Abuja">Delta</option>
                                <option className='text-black' value="Abuja">Kogi</option>
                                <option className='text-black' value="Abuja">Benue</option>
                            </select>
                        </Box>
                    </Box>

                    <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                        <span className='font-normal text-sm'>Transmission:</span>
                        <Box bg={useColorModeValue('gray.200', 'gray.800')} py={3} px={2} rounded={5}>
                            <select ref={transmission} className='w-full bg-transparent text-sm  font-normal border-none outline-none'
                                onChange={handleChange} value={searchData.transmission} id='transmission'>
                                <option className='text-black' value="automatic">Automatic</option>
                                <option className='text-black' value="manual">Manual</option>
                            </select>
                        </Box>
                    </Box>
                </Box>
                <Box pt={6} width={'200px'} mx={'auto'}>
                    <Button className='uppercase' bg={useColorModeValue('blue.500', 'gray.800')} rounded={3} _hover={{bg: 'blue.600'}} fontSize={18} color={'white'} width={'100%'} p={6}>Search Vehicla</Button>
                </Box>
            </form>
        </Box>
    </Box>
  )
}
