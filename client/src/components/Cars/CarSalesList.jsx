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

import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { CarListContext } from '../../pages/CarProducts';
import SaveCar from '../SaveCar';
import { model } from 'mongoose';

export default function CarSalesList() {
  const [cars, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const [modCars, setModCars] = useState([]);

  const [searchData, setSearchData] = useState({
    searchTerm : '',
    exteriorColor: '',
    interiorColor: '',
    condition: '',
    make : '', 
    model: '',
    location: '',
    transmission: '',
    sort: 'created_at',
    order: 'desc'
  });

  // console.log(cars);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);

    const searchTermFromUrl = urlParams.get('searchTerm');
    const exteriorColorFromUrl = urlParams.get('exteriorColor');
    const interiorColorFromUrl = urlParams.get('interiorColor');
    const conditionFromUrl = urlParams.get('condition');
    const makeFromUrl = urlParams.get('make');
    const modelFromUrl = urlParams.get('model');
    const locationFromUrl = urlParams.get('location');
    const transmissionFromUrl = urlParams.get('transmission');
    const sortFromUrl = urlParams.get('sort');
    const orderFromUrl = urlParams.get('order');

    if (searchTermFromUrl || exteriorColorFromUrl || interiorColorFromUrl ||
      conditionFromUrl || makeFromUrl || modelFromUrl || locationFromUrl ||
      transmissionFromUrl || sortFromUrl || orderFromUrl
    ) {
      setSearchData({ 
        searchTerm: searchTermFromUrl || '',
        exteriorColor : exteriorColorFromUrl || '',
        interiorColor : interiorColorFromUrl || '',
        condition: conditionFromUrl || '',
        make: makeFromUrl || '',
        model: modelFromUrl || '',
        location : locationFromUrl || '',
        transmission: transmissionFromUrl || '',
        sort: sortFromUrl || 'created_at',
        order: orderFromUrl || 'desc'
      });
    }

    const fetchData = async () => {
      setLoading(true);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/api/cars/search-car?${searchQuery}`)
      const data = await res.json();
      console.log(data);
      setCar(data);
      setLoading(false)
    };

    fetchData();

  }, [location.search]);

  let navigate = useNavigate();

  // const cars = useContext(CarListContext);

  const handleChange = (e) => {
    setSearchData({
      ...searchData,
      [e.target.id] : e.target.value
    });

    if (e.target.id === 'sort_order') {
      const sort = e.target.value.split('_')[0] || 'created_at';
      const order = e.target.value.split('_')[1] || 'desc';

      setSearchData({
        ...searchData,
        sort, order
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams();

    urlParams.set('searchTerm', searchData.searchTerm);
    urlParams.set('exteriorColor', searchData.exteriorColor);
    urlParams.set('interiorColor', searchData.interiorColor);
    urlParams.set('condition', searchData.condition);
    urlParams.set('make', searchData.make);
    urlParams.set('model', searchData.model);
    urlParams.set('location', searchData.location);
    urlParams.set('transmission', searchData.transmission);
    urlParams.set('sort', searchData.sort);
    urlParams.set('order', searchData.order);

    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const oldCars = localStorage.getItem("cars");
    if (oldCars) {
      setModCars(JSON.parse(oldCars));
    }
  }, []);
  
  const handleAddToCart = (car) => {
    const updatedModCars = [...modCars, car];
    setModCars(updatedModCars);
    localStorage.setItem("cars", JSON.stringify(updatedModCars));
  } 

  return (
    <Box my={{md: '2rem', base: '2rem'}}>
      <Flex justifyContent={'space-between'} flexWrap={'wrap'} width={'100%'} position={'relative'}>
        <Box  width={{lg:'300px', base: '100%'}} bg={useColorModeValue('gray.200', 'gray.700')} shadow={'md'}>
          <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} bg={useColorModeValue('blue.500')} shadow={'md'} height={'100px'}>
            <Heading fontSize={20} fontWeight={500} color={'white'} textAlign={'center'}>FIND YOUR RIGHT <br /> CAR</Heading>
          </Flex>
          <Box padding={{md: 2, base: 0}} bg={useColorModeValue('', 'gray.800')}>
            <form onSubmit={handleSubmit} bg={useColorModeValue('white', 'gray.800')} className='p-3 rounded-md flex md:flex-col flex-row flex-wrap items-start justify-start gap-2'>
              <Flex alignItems={'center'} justifyContent={'center'} flexWrap={'wrap'} gap={3} mt={0} width={{md: '100%', base: '100%'}}>
                <Box mt={{md:0, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Name:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} id='searchTerm' placeholder={'Name'} value={searchData.searchTerm}
                  onChange={handleChange} fontWeight={500} border={'none'} outline={'none'} _focus={'none'}/>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Exterior Color:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} placeholder={'Exterior Color'} fontWeight={500} border={'none'} outline={'none'} 
                  _focus={'none'} onChange={handleChange}  value={searchData.exteriorColor} id='exteriorColor'/>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '100%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Interior Color:</span>
                  <Input rounded={3} fontSize={14} bg={useColorModeValue('white', 'gray.700')} placeholder={'Interior Color'} fontWeight={500} border={'none'} outline={'none'} 
                  _focus={'none'} onChange={handleChange} value={searchData.interiorColor} id='interiorColor'/>
                </Box>
              </Flex>
              <Flex alignItems={'center'} justifyContent={'center'} width={'100%'} flexWrap={'wrap'} gap={3}>  
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="mt-2 font-medium text-center text-slate-500 text-sm">Condition:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} value={searchData.condition} id='condition'>
                    <option value="" className='font-medium text-black'></option>
                    <option value="new" className='font-medium text-black'>New</option>
                    <option value="used" className='font-medium text-black'>Used</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="font-medium text-center text-slate-500 text-sm">Make</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} value={searchData.make} id='make'>
                    <option className='font-medium text-black' value=""></option>
                    <option className='font-medium text-black' value="toyota">Toyota</option>
                    <option className='font-medium text-black' value="Honda">Honda</option>
                    <option className='font-medium text-black' value="Acura">Acura</option>
                    <option className='font-medium text-black' value="Audi">Audi</option>
                    <option className='font-medium text-black' value="Bentley">Bentley</option>
                    <option className='font-medium text-black' value="Mbw">Mbw</option>
                    <option className='font-medium text-black' value="Cadilac">Cadilac</option>
                    <option className='font-medium text-black' value="Hyundai">Hyundai</option>
                    <option className='font-medium text-black' value="Hummer">Hummer</option>
                    <option className='font-medium text-black' value="Infiniti">Infiniti</option>
                    <option className='font-medium text-black' value="Isuzu">Isuzu</option>
                    <option className='font-medium text-black' value="Ford">Ford</option>
                    <option className='font-medium text-black' value="Chevrolet">Chevrolet</option>
                    <option className='font-medium text-black' value="Lexus">Lexus</option>
                    <option className='font-medium text-black' value="Landrover">Land Rover</option>
                    <option className='font-medium text-black' value="Mercedes-Bnenz">Mercedes-Bnenz</option>
                    <option className='font-medium text-black' value="Mazda">Mazda</option>
                    <option className='font-medium text-black' value="Maserati">Maserati</option>
                    <option className='font-medium text-black' value="Peugeot">Peugeot</option>
                    <option className='font-medium text-black' value="Suzuki">Suzuki</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className="font-medium text-center text-slate-500 text-sm">Model</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} value={searchData.model} id='model'>
                    <option className='font-medium text-black' value=""></option>
                    <option className='font-medium text-black' value="Camry">Camry</option>
                    <option className='font-medium text-black' value="Honda City">Honda City</option>
                    <option className='font-medium text-black' value="Honda Accord">Honda Accord</option>
                    <option className='font-medium text-black' value="Honda Accord EX Sedan">Honda Accord EX Sedan</option>
                    <option className='font-medium text-black' value="Honda Accord Hybrid EX-L Sedan">Honda Accord Hybrid EX-L Sedan</option>
                    <option className='font-medium text-black' value="Honda Elevate">Honda Elevate</option>
                    <option className='font-medium text-black' value="Mercedes-Benz A-Class 200 Sedan">Mercedes-Benz A-Class 200 Sedan</option>
                    <option className='font-medium text-black' value="2022 Mercedes Benz A Class">Mercedes Benz A Class </option>
                    <option className='font-medium text-black' value="Mercedes-Benz A Class Berline AMG">Mercedes-Benz A Class Berline AMG</option>
                    <option className='font-medium text-black' value="Mercedes-Benz A Class Hatchback">Mercedes-Benz A Class Hatchback</option>
                    <option className='font-medium text-black' value="Mercedes-Benz B-Class 200 Mini Mpv">Mercedes-Benz B-Class 200 Mini Mpv</option>
                    <option className='font-medium text-black' value="Honda CR-V">Honda CR-V</option>
                    <option className='font-medium text-black' value="Cheverolet">Cheverolet</option>
                  </Select>
                </Box>
                {/* <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '48%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Year:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3}
                  onChange={handleChange} value={searchData.year} id='year'>
                    <option className='font-medium text-black' value="2017">2017</option>
                    <option className='font-medium text-black' value="2018">2018</option>
                    <option className='font-medium text-black' value="2019">2019</option>
                    <option className='font-medium text-black' value="2020">2020</option>
                    <option className='font-medium text-black' value="2021">2021</option>
                    <option className='font-medium text-black' value="2022">2022</option>
                    <option className='font-medium text-black' value="2023">2023</option>
                    <option className='font-medium text-black' value="2024">2024</option>
                  </Select>
                </Box> */}
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '80%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Location:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} value={searchData.location} id='location'>
                    <option className='font-medium text-black' value=""></option>
                    <option className='font-medium text-black' value="Lagos">Lagos</option>
                    <option className='font-medium text-black' value="Ogun">Ogun</option>
                    <option className='font-medium text-black' value="Oyo">Oyo</option>
                    <option className='font-medium text-black' value="Abuja">Abuja</option>
                    <option className='font-medium text-black' value="Osun">Osun</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '80%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Transmission:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} value={searchData.transmission} id='transmission'>
                    <option className='font-medium text-black' value=""></option>
                    <option className='font-medium text-black' value="Automatic">Automatic</option>
                    <option className='font-medium text-black' value="Manual">Manual</option>
                  </Select>
                </Box>
                <Box mt={{md: 2, base: 0}} width={{xl:'100%', md: '30%', base: '80%'}}>
                  <span className='font-medium text-slate-500 text-sm'>Sort:</span>
                  <Select bg={useColorModeValue('white', 'gray.700')} color={useColorModeValue('black')} fontWeight={500} border={'none'} rounded={3} fontSize={14}
                  onChange={handleChange} defaultValue={'created_at_desc'} id='sort_order'>
                    <option className='font-medium text-black' value="createdAt_desc">Latest</option>
                    <option className='font-medium text-black' value="createdAt_asc">Older</option>
                  </Select>
                </Box>
              </Flex>
              <Flex justifyContent={'center'} mt={4} width={'100%'}>
                <Button type='submit' bg={useColorModeValue('blue.500')} _hover={{bg: 'blue.400'}} width={'150px'} rounded={2} color={'white'}>SEARCH</Button>
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
                            <Box key={car._id} width={{lg: '32%',md: '45%', base: '100%'}} height={'400px'} overflowY={'scroll'} padding={3} shadow={'md'} 
                              rounded={5} borderWidth={1} borderColor={useColorModeValue('blue.', 'gray.600')} bg={useColorModeValue('white', 'gray.700')} borderRadi3s={5} position={'relative'} className='font-medium scroll'>
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
                                  <Button onClick={() => handleAddToCart(car)}><LuShoppingCart className='text-xl text-blue-500'/></Button>
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
