import { Box, Button, Flex, Heading, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react';

import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

import { app } from '../firebase';

export default function CreateCarListing() {
    const [filesError, setFilesError] = useState(null);
    const [files, setFile] = useState(null);
    const [uploadImagePercentage, setUploadImagePercentage ] = useState(false);

    const [carForms, setCarForm] = useState({carimage: [],
        name: '',
        condition: 'new',
        make: 'all make',
        model: 'all model',
        loaction: 'lagos',
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
        })
    }

    const handleUpload = () => {
        if (files <= 0) {
            setFilesError('You must upload at least 1 image!');
            return;
        }

        if(files.length > 0 && files.length + carForms.carimage.length < 15){
            const storeImages = [];
            for (let i = 0; i < files.length; i++) {
                storeImages.push(getAllImageUrls(files[i]));
            }
            // after storing all files inside empty array we need to push them inside carforms
            //to do that we need to wait for the files to stored finished
            Promise.all(storeImages).then((urls) => {
                setCarForm({...carForms, carimage: carForms.carimage.concat(urls)});
            }).catch(() => {
                setFilesError('Image failed (2mb max per image)!')
            })
            console.log(storeImages);
            setFilesError(null)
        }else{
            setFilesError('You can only 15 images per listing!')
        }
    }

    const getAllImageUrls = async (file) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);

            const fileName = new Date().getTime() + file.name;

            const storageRef = ref(storage, fileName);

            const uploadTask = uploadBytesResumable(storageRef, file);

            uploadTask.on('state_changed', (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(uploadProgress);
                setUploadImagePercentage(uploadProgress);
            }, (error) => {
                reject(error)
            }, () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL)
                })
            });
        })
    }

  return (
    <Box maxW={{md: '90%', base: '100%'}} mx={{md: 'auto', base: 4}} mt={'3rem'} padding={4} bg={useColorModeValue('gray.200')}>
       <Flex flexWrap={'wrap'} gap={3} justifyContent={'space-between'}>
          <Flex padding={2} width={{md:'60%', base: '100%'}} bg={useColorModeValue('#fff', 'gray.700')} rounded={'md'} shadow={'md'}>
            <form className='p-2 flex justify-between gap-1 flex-wrap'>
                <Box width={'50%'}>
                    <Box>
                        <span className='font-medium text-slate-500 text-sm'>Car Name:</span>
                        <input type="text" id='name' onChange={handleChange} className='w-full border-0 outline-none bg-slate-200 p-2 mt-2 rounded' placeholder='Car name'/>
                    </Box>
                    <Box mt={4}>
                        <span className="font-medium text-center text-slate-500 text-sm">Condition:</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                            onChange={handleChange} id='condition'>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className="font-medium text-center text-slate-500 text-sm">Make</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                        onChange={handleChange} id='make' value={carForms.make}>
                            <option value="all">All Make</option>
                            <option value="Camry">Toyota</option>
                            <option value="Honda City">Honda City</option>
                            <option value="Honda">Honda Accord</option>
                            <option value="Honda">Honda Elevate</option>
                            <option value="Honda CR-V">Honda CR-V</option>
                            <option value="Cheverolet">Cheverolet</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className="font-medium text-center text-slate-500 text-sm">Model</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                            onChange={handleChange} id='model'>
                            <option value="all">All Model</option>
                            <option value="Corolla Cross">Corolla Cross</option>
                            <option value="Camry">Camry</option>
                            <option value="Honda City">Honda City</option>
                            <option value="Honda Accord">Honda Accord</option>
                            <option value="Honda Elevate">Honda Elevate</option>
                            <option value="Honda CR-V">Honda CR-V</option>
                            <option value="Cheverolet">Cheverolet</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Location:</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                            onChange={handleChange} id='location'>
                            <option value="Lagos">Lagos</option>
                            <option value="Ogun">Ogun</option>
                            <option value="Oyo">Oyo</option>
                            <option value="Osun">Osun</option>
                            <option value="Abuja">Abuja</option>
                            <option value="Abuja">Kaduna</option>
                            <option value="Abuja">Delta</option>
                            <option value="Abuja">Kogi</option>
                            <option value="Abuja">Benue</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Year:</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                            onChange={handleChange} id='year'>
                            <option value="2017">2015</option>
                            <option value="2017">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                        </select>
                    </Box>
                    <Box>
                        <span className='font-medium text-slate-500 text-sm'>Miles:</span>
                        <input type="text" onChange={handleChange} id='miles' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Miles'/>
                    </Box>
                </Box>
                <Box  width={'48%'}>
                    <Box>
                        <span className='font-medium text-slate-500 text-sm'>Car Price:</span>
                        <input type="text" onChange={handleChange} id='carprice' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Car price'/>
                    </Box>
                    <Box>
                        <span className='font-medium text-slate-500 text-sm'>Color:</span>
                        <input type="text" onChange={handleChange} id='colors' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Colors'/>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Deal:</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                        onChange={handleChange} id='deal'>
                        <option value="great">Great</option>
                        <option value="good">Good</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Exterior Color:</span>
                        <input type="text" onChange={handleChange} id='exteriorcolor' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Exterior Color'/>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Interior Color:</span>
                        <input type="text" onChange={handleChange} id='interiorcolor' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Car price'/>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Transmission:</span>
                        <select className='mt-2 w-full text-gray-600 bg-slate-200 text-sm p-2 font-medium border-none outline-none'
                            onChange={handleChange} id='transmission'>
                            <option value="automatic">Automatic</option>
                            <option value="manual">Manual</option>
                        </select>
                    </Box>
                    <Box mt={4}>
                        <span className='font-medium text-slate-500 text-sm'>Engine:</span>
                        <input type="text" onChange={handleChange} id='engine' className='w-full border-0 bg-slate-200 outline-none mt-2 p-2 rounded' placeholder='Car price'/>
                    </Box>
                </Box>
                <Flex justifyContent={'center'} mt={4} width={'full'}>
                    <textarea className='w-full h-[150px] outline-none border-slate-300 font-medium text-black rounded p-5' placeholder='Car Descriptions' onChange={handleChange} id='description'>

                    </textarea>
                </Flex>
                <Flex justifyContent={'center'} mt={4} width={'full'}>
                    <Button bg={useColorModeValue('blue.500')} _hover={{bg: 'blue.400'}} width={'150px'} rounded={2} color={'white'}>SEARCH</Button>
                </Flex>
            </form>
        </Flex>
            <Box width={{md: '35%', base: '100%'}} paddingTop={{md: 0, base: 7}}>
                <p><strong>Image: </strong><span className="font-normal">The first image will be the cover (max 6)</span></p>
                <Box width={'100%'} mt={4} height={'200px'} mx={'auto'} bg={'gray.50'} className='rounded'>
                    <input type="file" onChange={(e) => setFile(e.target.files)} className='outline-none border-0' typeof='file' id='file' accept='image/*' multiple/>
                    <img src="" />
                    {/* <Box >

                    </Box> */}
                </Box>
                <Box color={'red.500'} mt={3} fontWeight={500}>
                    {
                        filesError ? <>
                            {filesError}
                        </> : ''
                    }
                </Box>
                <Flex justifyContent={'center'} mt={5}>
                    <Button onClick={handleUpload} bg={useColorModeValue('blue.500')} color={'white'} _hover={{bg: 'blue.600'}}>Upload Images</Button>
                </Flex>
            </Box>
        </Flex>
    </Box>
  )
}
