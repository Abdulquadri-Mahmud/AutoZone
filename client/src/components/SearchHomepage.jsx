import { Box, Button, Flex, Heading, Select, useColorModeValue } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';

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
    <Box width={'360px'} bg={''} className=''>
        <Flex justifyContent={'center'} bg={useColorModeValue('green.500', 'gray.700')} roundedBottom={'100%'} height={'80px'} w={'full'} className='searchbg'>
            <Heading fontWeight={500} pt={5} color={'white'} fontSize={25} className='uppercase'>Search the right car</Heading>
        </Flex>
        <Box p={5}>
            <form>
                <Box bg={useColorModeValue('gray.200', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                    <input type="text" id='name' ref={name} onChange={handleChange} className='w-full border-0 outline-none bg-transparent input' placeholder='Car name'/>
                </Box>
                <Box mt={6} bg={useColorModeValue('gray.200', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                    <select ref={make} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                    onChange={handleChange} id='make'>
                        <option className='text-black' value="">Make</option>
                        <option className='text-black' value="Toyota">Toyota</option>
                        <option className='text-black' value="Farrari">Farrari</option>
                        <option className='text-black' value="BMW">BMW</option>
                        <option className='text-black' value="Ford">Ford</option>
                        <option className='text-black' value="Acura">Acura</option>
                        <option className='text-black' value="Bentley">Bentley</option>
                        <option className='text-black' value="Mazda">Mazda</option>
                        <option className='text-black' value="Lamborghini">Lamborghini</option>
                        <option className='text-black' value="Mercedes Benz">Mercedes Benz</option>
                        <option className='text-black' value="Cheverolet">Cheverolet</option>
                        <option className='text-black' value="Jeep">Jeep</option>
                    </select>
                </Box>
                <Box mt={6} bg={useColorModeValue('gray.200', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                    <select ref={model} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                        onChange={handleChange} id='model'>
                        <option className='text-black' value="">Model</option>
                        <option className='text-black font-semibold text-center disabled' >Toyota Models</option>
                        <option className='text-black' value="Corolla Cross">Corolla Cross</option>
                        <option className='text-black' value="Camry">Camry</option>
                        <option className='text-black' value="Honda City">Honda City</option>
                        <option className='text-black' value="Honda Accord">Honda Accord</option>
                        <option className='text-black' value="Honda Elevate">Honda Elevate</option>
                        <option className='text-black' value="Honda CR-V">Honda CR-V</option>

                        <option className='text-black font-semibold text-center disabled' >Mercedes Benz Models</option>
                        <option className='text-black' value="C-Class">C-Class</option>
                        <option className='text-black' value="G-class Suv">G-class Suv</option>
                        <option className='text-black' value="GLE Coupe">GLE Coupe</option>
                        <option className='text-black' value="Gla">Gla</option>
                        <option className='text-black' value="EQE SUV">EQE SUV</option>
                        <option className='text-black' value="GLB">GLB</option>
                        <option className='text-black' value="GLC Coupe">GLC Coupe</option>

                        <option className='text-black font-semibold text-center disabled' >Ferrari Models</option>
                        <option className='text-black' value="SF90 Stradale">SF90 Stradale</option>
                        <option className='text-black' value="296 GTB">296 GTB</option>
                        <option className='text-black' value="Ferrari Roma">Ferrari Roma</option>
                        <option className='text-black' value="Purosangue">Purosangue</option>
                        <option className='text-black' value="SF90 Spider">SF90 Spider</option>
                        <option className='text-black' value="812 GTS">812 GTS</option>
                        <option className='text-black' value="Ferrari F8">Ferrari F8</option>
                        <option className='text-black' value="Ferrari 12Cilindri">Ferrari 12Cilindri</option>
                        <option className='text-black' value="Ferrari Roma Spider">Ferrari Roma Spider</option>
                        
                        <option className='text-black font-semibold text-center disabled' >Cheverolet Models</option>

                        <option className='text-black' value="EQUINOX LS">EQUINOX LS</option>
                        <option className='text-black' value="EQUINOX LS">EQUINOX LS</option>
                        <option className='text-black' value="Camaro">Camaro</option>
                        <option className='text-black' value="Chevrolet Corvette">Chevrolet Corvette</option>
                        <option className='text-black' value="Silverado">Silverado</option>
                        <option className='text-black' value="Trax Ls">Trax Ls</option>
                        <option className='text-black' value="Traverse">Traverse</option>
                        <option className='text-black' value="Suzuki Carry">Suzuki Carry</option>
                        <option className='text-black' value="Chevrolet Aveo">Chevrolet Aveo</option>
                        <option className='text-black' value="Chevrolet Corvair">Chevrolet Corvair</option>
                        <option className='text-black' value="Chevrolet Colorado"> Chevrolet Colorado</option>
                        <option className='text-black' value="Chevrolet Spark">Chevrolet Spark</option>
                        <option className='text-black' value="Captiva">Captiva</option>
                        <option className='text-black' value="Blaza">Blaza</option>
                        <option className='text-black' value="Blaza EV">Blaza EV</option>
                    </select>
                </Box>
                <Box mt={6}>
                    <Button fontWeight={500} py={6} rounded={3} _hover={{bg: 'blue.600'}} bg={useColorModeValue('green.500', 'gray.700')} color={useColorModeValue('white', 'black')} fontSize={18} width={'full'} className='uppercase'>Search</Button>
                </Box>
            </form>
            <Box mt={6} textAlign={'center'} fontWeight={500} color={'red.500'}>
                <Link>ADVANCED SEARCH</Link>
            </Box>
        </Box>
    </Box>
  )
}
