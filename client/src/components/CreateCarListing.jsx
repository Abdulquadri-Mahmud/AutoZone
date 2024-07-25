import { Box, Flex,Button, Heading, useColorModeValue, Text, Image, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import AdminThemes from './AdminThemes'
import { FaHome } from 'react-icons/fa'
import { useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../firebase';

import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
} from '@chakra-ui/react'

  
export default function CreateCarListing() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const name = useRef();
    const condition = useRef();
    const make = useRef();
    const model = useRef();
    const location = useRef();
    const year = useRef();
    const miles = useRef();
    const price = useRef();
    const color = useRef();
    const deal = useRef();
    const exteriorColor = useRef();
    const interiorColor = useRef();
    const transmission = useRef();
    const engine = useRef();

    const fileRef = useRef();

    const [filesError, setFilesError] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [files, setFile] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(false);
    const [carForms, setCarForm] = useState({carimage: [],
        name: '',
        condition: 'new',
        make: 'all make',
        model: 'all model',
        location: 'lagos',
        year: 'year',
        price: '',
        deal: 'great',
        miles: '',
        colors: '',
        exteriorColor: '',
        interiorColor: '',
        transmission: 'automatic',
        engine: '',
        description: ''
    });

    const handleChange = (e) => {
        setCarForm({
            ...carForms,
            [e.target.id] : e.target.value
        });
    }
    console.log(carForms);

   const handleUpload = (e) => {
        if (files.length > 0 && files.length + carForms.carimage.length < 30) {
            setUploadProgress(true);
            setFilesError(false);
            
            const storeImages = [];

            for (let i = 0; i < files.length; i++) {
                storeImages.push(getAllImagesUrls(files[i]));
            }
            Promise.all(storeImages).then((urls) => {
                setCarForm({
                    ...carForms, carimage: carForms.carimage.concat(urls)
                });
                setFilesError(false);
                setUploadProgress(false);

            }).catch((error) => {
                setFilesError('Error while uploading images!');
                setUploadProgress(false);
            });
        }else{
            setFilesError('You can only upload at 20 images per listing!');
            setUploadProgress(false);
        }
   }

   const getAllImagesUrls = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);

            const fileName = new Date().getTime() + file.name;

            const storageRef = ref(storage, fileName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                // setUploadProgress(progress);
                console.log(progress);
            }, (error) => {
                reject(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                })
            })
        })
   }


    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const checkname = name.current.value === '';
        const checkcondition = condition.current.value === '';
        const checkmake = make.current.value === '';
        const checkmodel = model.current.value === '';
        const checklocation = location.current.value === '';
        const checkyear = year.current.value === '';
        const checkmiles = miles.current.value === '';
        const checkprice = price.current.value === '';
        const checkcolor = color.current.value === '';
        const checkdeal = deal.current.value === '';
        const checkexteriorColor = exteriorColor.current.value === '';
        const checkinteriorColor = interiorColor.current.value === '';
        const checktransmission = transmission.current.value === '';
        const checkengine = engine.current.value === '';
        
        try {
            setLoading(true);

            if (checkname) {
                setError('Name input field is required!');
                return;
            };
            if (checkcondition) {
                setError('Condition input field is required!');
                return;
            };
            if (checkmake) {
                setError('Make input field is required!');
                return;
            };
            if (checkmodel) {
                setError('Model input field is required!');
                return;
            };
            if (checklocation) {
                setError('Location input field is required!');
                return;
            };
            if (checkyear) {
                setError('Year input field is required!');
                return;
            };
            if (checkmiles) {
                setError('Miles input field is required!');
                return;
            };
            if (checkprice) {
                setError('Price input field is required!');
                return;
            };
            if (checkcolor) {
                setError('Color input field is required!');
                return;
            };
            if (checkdeal) {
                setError('Deal input field is required!');
                return;
            };
            if (checkexteriorColor) {
                setError('Exterior Color input field is required!');
                return;
            };
            if (checkinteriorColor) {
                setError('Interior Color input field is required!');
                return;
            };
            if (checktransmission) {
                setError('Transmission input field is required!');
                return;
            };
            if (checkengine) {
                setError('Engine input field is required!');
                return;
            };

            const url = `/api/cars/uploadcar`;

            const res = await fetch(url, {
                method: 'POST', 
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(carForms)
            });

            const data = await res.json();

            if (data.success === false) {
                setError(data.message);
                setLoading(false);
                setSuccess(false);
                return;
            }

            setError(false);
            setLoading(false);
            setSuccess(true);

        } catch (error) {
            setError(true);
            setLoading(false);
            setSuccess(false);
        }
    }

   const handleRemoveImage = (index) => {
    setCarForm({
        ...carForms, carimage: 
        carForms.carimage.filter((_, i) => i !== index)
    })
   }

  return (
    <Box>
        <Flex justifyContent={'space-between'} bg={useColorModeValue('blue.500', 'gray.700')} p={4} color={'black'}>
            <Heading fontSize={25} fontWeight={500} fontFamily={'oblique'} color={useColorModeValue('white', 'gray.400')} >Create Car Listings</Heading>
            <Flex gap={1} alignItems={'center'} bg={'white'} pr={4} rounded={5}>
                <AdminThemes/>
                <FaHome className='text-2xl'/>
            </Flex>
        </Flex>
        <Box maxW={{md: '100%', base: '100%'}} mx={{md: 'auto', base: 4}} py={{md: 5, base: 5}} px={{md: 5, base: 0}} bg={useColorModeValue('white')} height={{'2xl' : '90vh' ,md:'580px'}} overflowY={'scroll'} className='scroll'>
        <Flex flexWrap={'wrap'} gap={3} flexDir={'column'} justifyContent={'space-between'}>
            <Flex justifyContent={'center'} flexWrap={'wrap'} padding={5} bg={useColorModeValue('blue.500', 'gray.700')} rounded={'md'} shadow={'md'}>
                <form onSubmit={handleSubmit} className=' flex justify-between gap-1 w-full flex-wrap'>
                    <Box width={'49%'}>
                        <Box color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Car Name:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" id='name' ref={name} onChange={handleChange} className='w-full border-0 outline-none bg-transparent input' placeholder='Car name'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Condition:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={condition} className='w-full bg-transparent text-sm font-medium border-none outline-none'
                                    onChange={handleChange} id='condition'>
                                    <option className='text-black' value="new">New</option>
                                    <option className='text-black' value="used">Used</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Make</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={make} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                onChange={handleChange} id='make' value={carForms.make}>
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
                            <span className="font-medium text-center text-sm">Model</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={model} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                    onChange={handleChange} id='model'>
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
                            <span className='font-medium text-sm'>Location:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={location} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                    onChange={handleChange} id='location'>
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
                            <span className='font-medium text-sm'>Year:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={year} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                    onChange={handleChange} id='year'>
                                    <option className='text-black' value="2017">2015</option>
                                    <option className='text-black' value="2017">2016</option>
                                    <option className='text-black' value="2017">2017</option>
                                    <option className='text-black' value="2018">2018</option>
                                    <option className='text-black' value="2019">2019</option>
                                    <option className='text-black' value="2020">2020</option>
                                    <option className='text-black' value="2021">2021</option>
                                    <option className='text-black' value="2022">2022</option>
                                    <option className='text-black' value="2023">2023</option>
                                    <option className='text-black' value="2024">2024</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Miles:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={miles} onChange={handleChange} id='miles' className='w-full border-0 outline-none bg-transparent' placeholder='Miles'/>
                            </Box>
                        </Box>
                    </Box>
                    <Box  width={'49%'}>
                        <Box>
                            <span className='font-medium text-sm'>Car Price:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={price} onChange={handleChange} id='price' className='w-full border-0 outline-none bg-transparent' placeholder='Car price'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Color:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={color} onChange={handleChange} id='colors' className='w-full border-0 outline-none bg-transparent' placeholder='Colors'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Deal:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={deal} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                onChange={handleChange} id='deal'>
                                    <option className='text-black' value="great">Great</option>
                                    <option className='text-black' value="good">Good</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Exterior Color:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={exteriorColor} onChange={handleChange} id='exteriorColor' className='w-full border-0 outline-none bg-transparent' placeholder='Exterior Color'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Interior Color:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={interiorColor} onChange={handleChange} id='interiorColor' className='w-full border-0 outline-none bg-transparent' placeholder='Interior Color'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Transmission:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <select ref={transmission} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                    onChange={handleChange} id='transmission'>
                                    <option className='text-black' value="automatic">Automatic</option>
                                    <option className='text-black' value="manual">Manual</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('black', 'gray.400')}>
                            <span className='font-medium text-sm'>Engine:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                                <input type="text" ref={engine} onChange={handleChange} id='engine' className='w-full border-0 outline-none bg-transparent' placeholder='Engine'/>
                            </Box>
                        </Box>
                    </Box>
                    <Flex justifyContent={'center'} mt={4} color={useColorModeValue('black', 'gray.400')} width={'full'} bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                        <textarea className='w-full h-[150px] outline-none border-0 font-medium rounded p-5 bg-transparent' placeholder='Car Descriptions' onChange={handleChange} id='description'>

                        </textarea>
                    </Flex>

                    {/* upload images section */}
                    <Box width={'100%'} mt={8} py={5} rounded={8} bg={useColorModeValue('white', 'gray.800')} p={{md: 5, base: 2}}>
                        <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={5} maxW={'100%'} mx={'auto'}>
                            <Flex justifyContent={'center'} gap={5} alignItems={'center'} width={{md: '300px', base: '97%'}} height={'250px'} position={'relative'} rounded={5} bg={useColorModeValue('blue.500', 'gray.700')}>
                                <Box>
                                    <input type="file" onChange={(e) => setFile(e.target.files)} ref={fileRef} id="carimage"  accept='image/*' className='hidden' multiple/>
                                </Box>
                                <Box p={3}>
                                    <Image maxW={'100%'} rounded={5} src={carForms.carimage[0]}/>
                                </Box>
                                <Box position={'absolute'}  onClick={() => fileRef.current.click()} cursor={'pointer'} color={useColorModeValue('white', 'gray.100')}>
                                    <MdAddPhotoAlternate className='text-3xl'/>
                                </Box>
                            </Flex>
                            <Box color={useColorModeValue('white')} width={{md: '60%', base: '97%'}} height={'250px'} overflowY={'scroll'} className='scroll' bg={useColorModeValue('blue.500', 'gray.700')} rounded={5}>
                                <Box width={'100%'}>
                                    {
                                        carForms.carimage.length > 0 && carForms.carimage.map((url, index) => (
                                            <Flex key={index} justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={2} bg={useColorModeValue('white', 'gray.600')} py={3} px={2} rounded={5}>
                                                <Box>
                                                    <Image src={url} maxW={'100px'} rounded={5}/>
                                                </Box>
                                                <Box>
                                                    <Button onClick={() => handleRemoveImage(index)} bg={useColorModeValue('white', 'gray.700')} color={'red.500'}>Delete</Button>
                                                </Box>
                                            </Flex>
                                        ))
                                    }
                                </Box>
                            </Box>
                        </Flex>
                        <Flex justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'} mt={4} width={'full'}>
                            <Box width={{md: '45%', base: '97%'}}>
                                <Button type='button' onClick={handleUpload} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('white', 'gray.100')} _hover={{color: useColorModeValue('black', 'gray.800')}} width={'300px'} 
                                    rounded={2}>
                                    {
                                        uploadProgress ? 'Uploading...' : 'Upload Image'
                                    }
                                </Button>
                            </Box>
                            <Box width={{md: '45%', base: '97%'}}>
                                {
                                    filesError ? (
                                        <Alert status='error' mt={2} rounded={3} height={'40px'}>
                                            <AlertIcon />
                                            <AlertDescription>{filesError && filesError}</AlertDescription>
                                        </Alert>
                                    ) : ''
                                }
                            </Box>
                        </Flex>
                    </Box>
                    {/* alert error message */}
                    {
                        error ? (
                            <Alert status='error' mt={2} rounded={5}>
                                <AlertIcon />
                                <AlertDescription>{error && error}</AlertDescription>
                            </Alert>
                        ) : ''
                    }
                    {/* alert success message */}
                    <Box>
                        {
                            success ? (
                                <>
                                    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
                                    <AlertDialogOverlay>
                                        <AlertDialogContent>
                                        <AlertDialogBody>
                                            Car Listing Created Successfully
                                        </AlertDialogBody>
                                        <AlertDialogFooter>
                                            <Button ref={cancelRef} onClick={onClose}>
                                            Ok
                                            </Button>
                                        </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialogOverlay>
                                    </AlertDialog>
                                </>
                            ) : ''
                        }
                    </Box>
                    {/* Submit Button */}
                    <Flex justifyContent={'center'} mt={4} width={'full'}>
                        <Button type='submit' onClick={onOpen} bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.100')} _hover={{color: useColorModeValue('black', 'gray.100')}} width={'150px'} rounded={2}>
                            {
                                loading ? 'Creating...' : 'Create Listings'
                            }
                        </Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    </Box>
    </Box>
  )
}
