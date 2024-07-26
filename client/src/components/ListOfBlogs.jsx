import { useEffect, useState } from 'react'
import {Box, Flex, Heading, Text, Image, Button, useColorModeValue} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function ListOfBlogs() {
    const [blogs, setBlogs] = useState({ });

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                // setLoading(true);

                const res = await fetch('/api/blogs/getAllBlogs');
        
                const data = await res.json();
    
                setBlogs(data);
                // setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getAllBlogs();

    }, []);
  return (
    <Box p={{md: '0rem', base: '0.5rem'}} py={{md: 10, base: 10}} mt={5} maxW={{md: '95%', base: '100%'}} mx={'auto'} rounded={10} bg={useColorModeValue('gray.200', 'gray.700')} shadow={'md'}>
        <Box>
            <Box width={{md: '300px', base: '70%'}} ml={useColorModeValue(5, 6)} bg={useColorModeValue('blue.500', 'gray.800')} rounded={5} p={4} borderBottomWidth={1} borderBottomColor={useColorModeValue('gray.300', 'gray.500')}>
                <Heading fontWeight={500} fontSize={22} color={'white'}>All BLOG POST</Heading>
            </Box>
            <Flex justifyContent={{md: 'center', base: 'start'}} alignItems={{md: 'center', base: 'start'}}  mt={5} flexWrap={'wrap'} gap={3}>
                {
                    blogs.length > 0 ? (
                        blogs.map((blog) => (
                            <Box className="blog" key={blog._id} width={{base: '100%', md:'32%'}} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} bg={useColorModeValue('white', 'gray.700')}
                            color={'black'} borderWidth={1} borderColor={useColorModeValue('', 'gray.600')}>
                                <Flex padding={3} justifyContent={'center'} width={'100%'} height={{md: '250px', base: '250px'}}>
                                    {
                                        blog.imageUrl ? (
                                            <img src={blog.imageUrl}className='w-[100%] rounded-[5px] h-[100%]' alt='Blog image'/>
                                        ) : ''
                                    }
                                </Flex>
                                <Box roundedBottom={10}padding={3} color={useColorModeValue('black', 'white')} bg={useColorModeValue('white', 'gray.700')}>
                                    <Text fontWeight={500} py={1} color={''} fontSize={20} textDecor={'underline'}>{blog.title}</Text>
                                    <Text py={1} className='font-normal' fontSize={14}>{blog.body.slice(0,200)} ...</Text>
                                    <Button height={'40px'} mt={4} bg={useColorModeValue('blue.500', 'gray.200')} rounded={3} color={useColorModeValue('white', 'black')} _hover={{opacity: 0.7}}>
                                        <Link to={`/blogDetailes/${blog._id}`} className='font-normal'>Read More</Link>
                                    </Button>
                                </Box>
                            </Box>
                        ))
                    ) : (
                        <Text>No blogs to display</Text>
                    )
                }
            </Flex>
        </Box>
    </Box>
  )
}
