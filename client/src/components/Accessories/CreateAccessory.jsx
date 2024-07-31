import { Box, Flex,Button, Heading, useColorModeValue, Text, Image, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useState } from 'react';
import { MdAddPhotoAlternate } from 'react-icons/md';

import {
    Alert,
    AlertIcon,
    AlertDescription,
} from '@chakra-ui/react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogContent,
    AlertDialogOverlay,
} from '@chakra-ui/react';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';

export default function CreateAccessory() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    const name = useRef();
    const condition = useRef();
    const make = useRef();
    const model = useRef();
    const location = useRef();
    const year = useRef();
    const category = useRef();
    const price = useRef();
    const prevprice = useRef();
    const screenSize = useRef();
    const specialFeatures = useRef();
    const connectivityTech = useRef();
    const quantity = useRef();
    const waranty = useRef();
    const descriptions = useRef();

    const fileRef = useRef();

    const [accessoryForm, setAccessoryForm] = useState({accessoryImage: [],
        name: '',
        condition: 'new',
        make: 'Toyota',
        model: 'Corolla Cross',
        year: '2015',
        location: 'lagos',
        category: 'Steroes',
        price: '',
        prevprice: '',
        screenSize: '',
        specialFeatures: '',
        connectivityTech: '',
        quantity: '',
        waranty: '',
        descriptions: ''
    });

    const [filesError, setFilesError] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [files, setFile] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(false);

    const handleChange = (e) => {
        setAccessoryForm({
            ...accessoryForm,
            [e.target.id] : e.target.value
        })
    }

    
    const handleUpload = () => {
        if (files.length > 0 && files.length + accessoryForm.accessoryImage.length < 10) {
            setUploadProgress(true);
            setFilesError(false);
            
            const storeImages = [];

            for (let i = 0; i < files.length; i++) {
                storeImages.push(getAllImagesUrls(files[i]));
            }
            Promise.all(storeImages).then((urls) => {
                setAccessoryForm({
                    ...accessoryForm, accessoryImage: accessoryForm.accessoryImage.concat(urls)
                });
                setFilesError(false);
                setUploadProgress(false);

            }).catch((error) => {
                setFilesError('Error while uploading images!');
                setUploadProgress(false);
            });
        }else{
            setFilesError('You can only upload at 10 images per listing!');
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

   console.log(accessoryForm);
   console.log(files);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            const endpoint = '/api/accessories/create-accessory';

            const res = await fetch(endpoint, {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(accessoryForm)
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
        setAccessoryForm({
            ...accessoryForm,
            accessoryImage: accessoryForm.accessoryImage.filter((_, i) => i !== index)
        })
    }

  return (
    <Box>
        <Box maxW={{md: '100%', base: '100%'}} mx={{md: 'auto', base: 4}} py={{md: 5, base: 5}} px={{md: 5, base: 0}} bg={useColorModeValue('gray.200')} overflowY={'scroll'} className='scroll'>
        <Flex flexWrap={'wrap'} gap={3} flexDir={'column'} justifyContent={'space-between'}>
            <Flex justifyContent={'center'} flexWrap={'wrap'} padding={5} bg={useColorModeValue('blue.500', 'gray.700')} rounded={'md'} shadow={'md'}>
                <form onSubmit={handleSubmit} className=' flex justify-between gap-1 w-full flex-wrap'>
                    <Box width={{md: '49%', base: '97%'}}>
                        <Box color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Name:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" id='name' ref={name} onChange={handleChange} className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent input' placeholder='Car name'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Condition:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={condition} className='w-full bg-transparent text-sm  font-medium border-none outline-none'
                                    onChange={handleChange} id='condition'>
                                    <option className='text-black' value="new">New</option>
                                    <option className='text-black' value="used">Used</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Category</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={category} className='w-full bg-transparent text-sm   font-medium border-none outline-none'
                                onChange={handleChange} id='category' value={accessoryForm.category}>
                                    <option className='text-black' value="Steroes">Steroes</option>
                                    <option className='text-black' value="Amplifire">Amplifire</option>
                                    <option className='text-black' value="Speaker">Speaker</option>
                                    <option className='text-black' value="Subwoofers">Subwoofers</option>
                                    <option className='text-black' value="Hoods">Hoods</option>
                                    <option className='text-black' value="Bumpers">Bumpers</option>
                                    <option className='text-black' value="Doors">Doors</option>
                                    <option className='text-black' value="Fenders">Fenders</option>
                                    <option className='text-black' value="Grilles">Grilles</option>
                                    <option className='text-black' value="Body Kit">Body Kit</option>
                                    <option className='text-black' value="Custom Grilles">Custom Grilles</option>
                                    <option className='text-black' value="Car Covers">Car Covers</option>
                                    <option className='text-black' value="Offroad Bumper">Offroad Bumper</option>
                                    <option className='text-black' value="Custom Gauges">Custom Gauges</option>
                                    <option className='text-black' value="Dash Kits">Dash Kits</option>
                                    <option className='text-black' value="Seat Cover">Seat Cover</option>
                                    <option className='text-black' value="Steering Wheels">Steering Wheels</option>
                                    <option className='text-black' value="Sun Shades">Sun Shades</option>
                                    <option className='text-black' value="Fog Lights">Fog Lights</option>
                                    <option className='text-black' value="Headlights">Headlights</option>
                                    <option className='text-black' value="LED Lights">LED Lights</option>
                                    <option className='text-black' value="Off-Road Lights">Off-Road Lights</option>
                                    <option className='text-black' value="Signal Lights">Signal Lights</option>
                                </select>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Make</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={make} className='w-full bg-transparent text-sm   font-medium border-none outline-none'
                                onChange={handleChange} id='make' value={accessoryForm.make}>
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
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className="font-medium text-center text-sm">Model</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={model} className='w-full bg-transparent text-sm   font-medium border-none outline-none'
                                    onChange={handleChange} id='model'>
                                    <option className='text-black' value="Corolla Cross">Corolla Cross</option>
                                    <option className='text-black font-semibold text-center disabled' >Toyota Models</option>
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
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Location:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={location} className='w-full bg-transparent text-sm   font-medium border-none outline-none'
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
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Year:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <select ref={year} className='w-full bg-transparent text-sm   font-medium border-none outline-none'
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
                    </Box>

                    <Box width={{md: '49%', base: '97%'}}>
                        <Box color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Price:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={price} onChange={handleChange} id='price' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Car price'/>
                            </Box>
                        </Box>
                        <Box color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Old Price:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={prevprice} onChange={handleChange} id='prevprice' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Old price'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Screen Size:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={screenSize} onChange={handleChange} id='screenSize' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='screenSize'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Special Features:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={specialFeatures} onChange={handleChange} id='specialFeatures' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Special Features'/>
                            </Box>
                        </Box>
                        
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Connectivity Technology:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={connectivityTech} onChange={handleChange} id='connectivityTech' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Connectivity Technology'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Waranty:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={waranty} onChange={handleChange} id='waranty' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Waranty'/>
                            </Box>
                        </Box>
                        <Box mt={4} color={useColorModeValue('white', 'gray.400')}>
                            <span className='font-medium text-sm'>Quantity:</span>
                            <Box bg={useColorModeValue('white', 'gray.800')} color={useColorModeValue('black', 'gray.400')} py={3} px={2} rounded={5}>
                                <input type="text" ref={quantity} onChange={handleChange} id='quantity' className='w-full border-0 outline-none placeholder:text-gray-600 placeholder:text-sm bg-transparent' placeholder='Quantity'/>
                            </Box>
                        </Box>
                    </Box>
                    <Flex justifyContent={'center'} mt={4} color={useColorModeValue('black', 'gray.400')} width={'full'} bg={useColorModeValue('white', 'gray.800')} py={3} px={2} rounded={5}>
                        <textarea className='w-full h-[150px] outline-none border-0 font-medium rounded p-5 bg-transparent placeholder:text-gray-600' ref={descriptions} placeholder='Car Descriptions' onChange={handleChange} id='descriptions'>

                        </textarea>
                    </Flex>

                    {/* upload images section */}
                    <Box width={'100%'} mt={8} py={5} rounded={8} bg={useColorModeValue('white', 'gray.800')} p={{md: 5, base: 2}}>
                        <Flex justifyContent={'space-around'} flexWrap={'wrap'} gap={5} maxW={'100%'} mx={'auto'}>
                            <Box width={{md: '45%', base: '97%'}}>
                                <Flex justifyContent={'center'} alignItems={'center'} height={'250px'} position={'relative'} rounded={5} bg={useColorModeValue('blue.500', 'gray.700')}>
                                    <Box>
                                        <input type="file" onChange={(e) => setFile(e.target.files)} ref={fileRef} id="accessoryImage"  accept='image/*' className='hidden' multiple/>
                                    </Box>
                                    <Flex justifyContent={'center'} alignItems={'center'} width={'100%'} p={3}>
                                        <Image maxW={'200px'} rounded={5} src={accessoryForm.accessoryImage[0]}/>
                                    </Flex>
                                    <Box position={'absolute'}  onClick={() => fileRef.current.click()} cursor={'pointer'} color={useColorModeValue('white', 'gray.100')}>
                                        <MdAddPhotoAlternate className='text-3xl'/>
                                    </Box>
                                </Flex>
                                <Flex justifyContent={'center'} width={'100%'} mt={6}>
                                    <Button type='button' onClick={handleUpload} bg={useColorModeValue('blue.500', 'gray.700')} color={useColorModeValue('white', 'gray.100')} _hover={{color: useColorModeValue('black', 'gray.800')}} width={'300px'} 
                                        rounded={2}>
                                        {
                                            uploadProgress ? 'Uploading...' : 'Upload Image'
                                        }
                                    </Button>
                                </Flex>
                            </Box>
                            <Box color={useColorModeValue('white')} width={{md: '45%', base: '97%'}}>
                                <Box width={'100%'} height={'250px'} overflowY={'scroll'} className='scroll' bg={useColorModeValue('blue.500', 'gray.700')} rounded={5}>
                                    {
                                        accessoryForm.accessoryImage.length > 0 && accessoryForm.accessoryImage.map((url, index) => (
                                            <Flex key={index} justifyContent={'space-between'} alignItems={'center'} width={'100%'} my={2} bg={useColorModeValue('white', 'gray.600')} py={3} px={2} rounded={5}>
                                                <Box py={1}>
                                                    <Image src={url} maxW={'60px'} rounded={5}/>
                                                </Box>
                                                <Box>
                                                    <Button onClick={() => handleRemoveImage(index)} bg={useColorModeValue('white', 'gray.700')} color={'red.500'}>Delete</Button>
                                                </Box>
                                            </Flex>
                                        ))
                                    }
                                </Box>
                                <Box width={'100%'} mt={6}>
                                    {
                                        filesError ? (
                                            <Alert status='error' mt={2} rounded={3} height={'40px'}>
                                                <AlertIcon />
                                                <AlertDescription>{filesError && filesError}</AlertDescription>
                                            </Alert>
                                        ) : ''
                                    }
                                </Box>
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
