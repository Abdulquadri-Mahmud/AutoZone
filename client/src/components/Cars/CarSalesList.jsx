import { Box, Flex, Button, Heading, Text, useColorModeValue, TabIndicator, Image, Stack, FormControl, Input, Select } from '@chakra-ui/react'


// import {Link} from 'react-router-dom';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { BsGrid3X3GapFill } from "react-icons/bs";
import { FaListUl } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSpeedometer } from "react-icons/io";

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CarListContext } from '../../pages/CarProducts';
import SaveCar from '../SaveCar';

export default function CarSalesList() {

  const [searchTerm, setSearchTerm] = useState('');

  const [carStatus, setCarStatus] = useState('New')
  const [carModel, setCarModel] = useState('Toyota')
  const [carLocation, setCarLocation] = useState('Lagos')
  const [carYear, setCarYear] = useState('2017');

  const cars = useContext(CarListContext);

  const carSearch = {
    carStatus, carModel, carLocation, carYear
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const searchTermFromUrl = urlParams.get('searchTerm');

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search]);
    console.log(searchTerm)

  return (
    <Box my={{md: '2rem', base: '2rem'}}>
      <Flex justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'} position={'relative'}>
        <Box  width={{lg:'300px', base: '100%'}} bg={useColorModeValue('gray.200', 'gray.700')} shadow={'md'}>
          <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} bg={useColorModeValue('blue.500')} shadow={'md'} height={'100px'}>
            <Heading fontSize={20} fontWeight={500} color={'white'} textAlign={'center'}>FIND YOUR RIGHT <br /> CAR</Heading>
          </Flex>
          <Box padding={{md: 2, base: 0}} bg={useColorModeValue('', 'gray.800')}>
            <form bg={useColorModeValue('white', 'gray.800')} className='p-3 rounded-md flex md:flex-col flex-row flex-wrap items-start justify-start gap-2'>
              <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} gap={3} mt={0} width={{md: '100%', base: '100%'}}>
                <Box mt={{md:0, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Name:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} placeholder={'Name'} value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} fontWeight={500} border={'none'} outline={'none'} _focus={'none'}/>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Exterior Color:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} placeholder={'Exterior Color'} fontWeight={500} border={'none'} outline={'none'} _focus={'none'}/>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '100%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Interior Color:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} placeholder={'Interior Color'} fontWeight={500} border={'none'} outline={'none'} _focus={'none'}/>
                </Box>
              </Flex>
              <Flex alignItems={'center'} justifyContent={'center'} width={'100%'} flexWrap={'wrap'} gap={3}>  
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="mt-2 font-medium text-center text-slate-500 text-sm">Condition:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14} onChange={(e) => setCarStatus(e.target.value)} value={carStatus}>
                    <option value="new" className='font-medium text-black'>New</option>
                    <option value="used" className='font-medium text-black'>Used</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="font-medium text-center text-slate-500 text-sm">Make</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={(e) => setCarModel(e.target.value)} value={carModel}>
                    <option className='font-medium text-black' value="all">All Make</option>
                    <option className='font-medium text-black' value="Camry">Camry</option>
                    <option className='font-medium text-black' value="Honda">Honda City</option>
                    <option className='font-medium text-black' value="Honda">Honda Accord</option>
                    <option className='font-medium text-black' value="Honda">Honda Elevate</option>
                    <option className='font-medium text-black' value="Honda CR-V">Honda CR-V</option>
                    <option className='font-medium text-black' value="Cheverolet">Cheverolet</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="font-medium text-center text-slate-500 text-sm">Model</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={(e) => setCarModel(e.target.value)} value={carModel}>
                    <option className='font-medium text-black' value="all">All Model</option>
                    <option className='font-medium text-black' value="Camry">Camry</option>
                    <option className='font-medium text-black' value="Honda">Honda City</option>
                    <option className='font-medium text-black' value="Honda">Honda Accord</option>
                    <option className='font-medium text-black' value="Honda">Honda Elevate</option>
                    <option className='font-medium text-black' value="Honda CR-V">Honda CR-V</option>
                    <option className='font-medium text-black' value="Cheverolet">Cheverolet</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Year:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3}
                  onChange={(e) => setCarYear(e.target.value)} value={carYear}>
                    <option className='font-medium text-black' value="new">Year</option>
                    <option className='font-medium text-black' value="2017">2017</option>
                    <option className='font-medium text-black' value="2018">2018</option>
                    <option className='font-medium text-black' value="2019">2019</option>
                    <option className='font-medium text-black' value="2020">2020</option>
                    <option className='font-medium text-black' value="2021">2021</option>
                    <option className='font-medium text-black' value="2022">2022</option>
                    <option className='font-medium text-black' value="2023">2023</option>
                    <option className='font-medium text-black' value="2024">2024</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '80%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Location:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={(e) => setCarLocation(e.target.value)} value={carLocation}>
                    <option className='font-medium text-black' value="Lagos">Lagos</option>
                    <option className='font-medium text-black' value="Ogun">Ogun</option>
                    <option className='font-medium text-black' value="Oyo">Oyo</option>
                    <option className='font-medium text-black' value="Abuja">Abuja</option>
                    <option className='font-medium text-black' value="Osun">Osun</option>
                  </Select>
                </Box>
              </Flex>
              <Flex justifyContent={'center'} mt={4} width={'100%'}>
                <Button bg={useColorModeValue('blue.500')} _hover={{bg: 'blue.400'}} width={'150px'} rounded={2} color={'white'}>SEARCH</Button>
              </Flex>
            </form>
          </Box>
        </Box>
        <Box bg={useColorModeValue('gray.200')} flex={'1'} ml={{md: 5, base: 0}} padding={{md: 3, base: 0}} shadow={'lg'} position={'relative'}>
          <Flex>
            <Box>
              <Tabs position={'relative'} variant='unstyled'>
                <TabList py={1} mb={'1em'} width={'150px'}>
                  <Tab width={'70px'} color={'white'} bg={useColorModeValue('blue.500', 'gray.700')} _hover={{bg: useColorModeValue('blue.600', 'gray.800')}}>
                    <BsGrid3X3GapFill className='text-xl'/>
                  </Tab>
                  <Tab width={'70px'} color={'white'} bg={useColorModeValue('blue.500', 'gray.700')} _hover={{bg: useColorModeValue('blue.600', 'gray.800')}}>
                    <FaListUl className='text-xl'/>
                  </Tab>
                </TabList>
                <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
                <TabPanels>
                  <TabPanel>
                    <Flex justifyContent={'start'} flexWrap={'wrap'} gap={2}>
                      {
                        cars.length > 0 ? (
                          cars.map((car) => (
                            <Box key={car._id} width={{md: '32%', base: '100%'}} padding={3} shadow={'md'} 
                              rounded={5} borderWidth={1} borderColor={useColorModeValue('blue.', 'gray.600')} bg={useColorModeValue('white', 'gray.700')} borderRadi3s={5} position={'relative'} className='font-medium'>
                              <Box width={'100%'} mt={4} position={'relative'}>
                                <Image src={car.carimage[0]} alt={car.name} maxW={'100%'} objectFit={'contain'}></Image>
                                <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.200')} px={2} py={1} rounded={4}>
                                  <Text className='text-sm'>{car.carimage.length} Photos</Text>
                                </Box>
                              </Box>
                              <Flex justifyContent={'space-between'} mt={4}>
                                <Text><span>{car.year} </span>{car.name}</Text>
                                <Text className='flex items-center gap-1 text-sm'><span className='text-gray-500'><IoIosSpeedometer/></span> {car.miles} miles</Text>
                              </Flex>
                              <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Box bg={useColorModeValue('blue.500','gray.700')} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
                                  <Text>{car.condition}</Text>
                                </Box>
                                <Box  position={'absolute'} top={2} right={2}>
                                  {/* <SaveCar/> */}
                                </Box>
                              </Flex>
                              <Flex gap={1} className="rate" mt={2}>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-yellow-300'/>
                                <IoStar className='text-gray-300'/>
                              </Flex>
                              <Flex justifyContent={'space-between'} mt={{md: 6, base: 4}}>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Exterior Color: <span className='font-medium'>{car.exteriorColor}</span></Text>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Interior Color: <span className='font-medium'>{car.interiorColor}</span></Text>
                              </Flex>
                              <Flex justifyContent={'space-between'} mt={2}>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Make: <span className='font-medium'>{car.make}</span></Text>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Model: <span className='font-medium'>{car.model}</span></Text>
                              </Flex>
                              <Flex justifyContent={'space-between'} mt={2}>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Transmission: <span className='font-medium'>{car.transmission}</span></Text>
                                <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Deal: <span className='font-medium'>{car.deal}</span></Text>
                              </Flex>
                              <Flex justifyContent={'space-between'} mt={2}>
                                <Text className='flex items-center gap-1 font-bold'>Price: <span className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</span></Text>
                                <Text className='flex items-center gap-1 font-bold'><span className='flex items-center font-medium'><IoLocationOutline className='text-red-500'/>{car.location}</span></Text>
                              </Flex>
                              <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                <Box>
                                  <Link to={`/car-details/${car._id}`} className='text-blue-500'>Review</Link>
                                </Box>
                                <Box>
                                  <Button><LuShoppingCart className='text-xl text-blue-500'/></Button>
                                </Box>
                              </Flex>
                            </Box>
                          ))
                        ) : (
                          <Box>
                            <Text fontSize={20} fontWeight={500} textAlign={'center'}>No car availables </Text>
                          </Box>
                        )
                      }
                    </Flex>
                  </TabPanel>
                  <TabPanel>
                    <Flex flexDir={'column'} color={'gray.700'} gap={2} maxW={'100%'} mx={'auto'}>
                      {
                        cars.length > 0 ? (
                          cars.map((car) => (
                            <Flex gap={{md: 10, base: 3}} justifyContent={'start'} flexWrap={'wrap'} rounded={5} key={car._id} bg={useColorModeValue('white')} mb={3} padding={3} position={'relative'}>
                              <Box width={{md: '30%', base: '100%'}} bg={useColorModeValue('white')} mt={4} position={'relative'}>
                                <Image src={car.carimage[0]} alt={car.name} maxW={'100%'} height={'250px'} objectFit={'contain'}></Image>
                                <Box position={'absolute'} bottom={0} bg={useColorModeValue('gray.100')} px={2} py={1} rounded={4}>
                                  <Text className='text-sm font-medium'>{car.carimage.length} Photos</Text>
                                </Box>
                              </Box>
                              <Box width={{md: '30%', base: '100%'}} >
                                <Flex justifyContent={'space-between'} mt={4}>
                                  <Heading fontSize={30} fontWeight={500}><span>{car.year} </span>{car.name}</Heading>
                                  <Text className='flex items-center gap-1 text-sm text-gray-500 font-medium'><span className='text-gray-400'><IoIosSpeedometer/></span> {car.miles} miles</Text>
                                </Flex>
                                <Flex gap={1} className="rate" mt={2}>
                                    <IoStar className='text-yellow-300'/>
                                    <IoStar className='text-yellow-300'/>
                                    <IoStar className='text-yellow-300'/>
                                    <IoStar className='text-yellow-300'/>
                                    <IoStar className='text-gray-300'/>
                                  </Flex>
                                  <Box mt={4} rounded={5} bg={useColorModeValue('gray.100', '')} height={'150px'} p={4} width={'full'}>
                                    <Text fontWeight={500}>{car.description.slice(0, 150)}...</Text>
                                  </Box>
                              </Box>
                              <Box width={{md: '30%', base: '100%'}} >
                                <Flex justifyContent={'space-between'} mt={{md: 6, base: 4}}>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Exterior Color: <span className='font-medium'>{car.exteriorColor}</span></Text>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Interior Color: <span className='font-medium'>{car.interiorColor}</span></Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} mt={2}>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Make: <span className='font-medium'>{car.make}</span></Text>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Model: <span className='font-medium'>{car.model}</span></Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} mt={2}>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Transmission: <span className='font-medium'>{car.transmission}</span></Text>
                                  <Text color={useColorModeValue('gray.600', 'gray.200')} fontSize={13} className='font-bold'>Deal: <span className='font-medium'>{car.deal}</span></Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} mt={2}>
                                  <Text className='flex items-center gap-1 font-bold' color={useColorModeValue('gray.600', 'gray.200')}>Price: <spa3 className='flex items-center font-medium'><BsCurrencyDollar className='text-sm'/>{car.price}</spa3></Text>
                                  <Text className='flex items-center gap-1 font-bold' color={useColorModeValue('gray.600', 'gray.200')}><span class3ame='flex items-center font-medium'><IoLocationOutline className='text-red-500'/>{car.location}</span></Text>
                                </Flex>
                                <Flex justifyContent={'space-between'} alignItems={'center'} pt={3} mt={2} borderTop={'2px'} borderTopColor={'gray.300'}>
                                  <Box bg={'gray.100'} p={2} rounded={4}>
                                    <Link to={`/car-details/${car._id}`} className='text-red-500 font-medium'>Review</Link>
                                  </Box>
                                  <Box>
                                    <Button><LuShoppingCart className='text-xl text-red-500'/></Button>
                                  </Box>
                                </Flex>
                              </Box>
                              <Box bg={'red.500'} px={3} py={1} color={'white'}  position={'absolute'} top={2} rounded={3} left={2}>
                                <Text>{car.condition}</Text>
                              </Box>
                            </Flex>
                          ))
                        ) : (
                          <Box>
                            <Text>No blogs to display</Text>
                          </Box>
                        )
                      }
                    </Flex>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}
