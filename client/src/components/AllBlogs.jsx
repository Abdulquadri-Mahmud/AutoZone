import { useEffect, useState } from 'react'
import {Box, Flex, Heading, Text, Image, Button, useColorModeValue} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function AllBlogs() {

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
    <>
        <Box p={{md: '2rem', base: '0.5rem'}} py={{md: 10, base: 10}} mt={14} maxW={{md: '95%', base: '100%'}} mx={'auto'} rounded={10} bg={useColorModeValue('white', 'gray.700')}>
            <Box>
                <Box mb={10}>
                    <Text mb={2} textAlign={'center'}>WRead our latest news</Text>
                    <Heading fontWeight={500} fontSize={30} textAlign={'center'} color={useColorModeValue('black')}>LATEST NEWS</Heading>
                </Box>
                <Flex justifyContent={{md: 'center', base: 'start'}}  alignItems={{md: 'center', base: 'start'}}  mt={10} flexWrap={'wrap'} gap={5}>
                    {
                        blogs.length > 0 ? (
                            blogs.map((blog) => (
                                <Box className="blog" key={blog._id} width={{base: '100%', '2xl':'24%', md: '32%'}} h={{base: '100%', md:'100%'}} shadow={'md'} rounded={10} position={'relative'} bg={useColorModeValue('white', 'gray.800')} color={'black'}>
                                    <Flex padding={3} justifyContent={'center'} width={'100%'} height={{md: '250px', base: '250px'}}>
                                        {
                                            blog.imageUrl ? (
                                                <img src={blog.imageUrl}className='w-[100%] rounded-[5px] h-[100%]' alt='Blog image'/>
                                            ) : ''
                                        }
                                    </Flex>
                                    <Box roundedBottom={10}padding={3} color={useColorModeValue('black', 'white')}>
                                        <Text fontWeight={500} py={1} >{blog.title}</Text>
                                        {/* <Text fontWeight={500} textDecor={'underline'} color={'red.500'} >{blog.snippet}</Text>  */}
                                        <Text fontWeight={400} py={1} fontSize={14}>{blog.body.slice(0,150)} ...</Text>
                                        <Button height={'40px'} mt={4} bg={useColorModeValue('green.500', 'gray.200')} color={useColorModeValue('white', 'black')} _hover={{opacity: 0.7}}>
                                            <Link to={`/blogDetailes/${blog._id}`}>Read More</Link>
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
    </>
  )
}
