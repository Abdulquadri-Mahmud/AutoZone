import { Box, Button, Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function BlogLoader() {
    const [blogs, setBlogs] = useState({ });

    useEffect(() => {
        const getAllBlogs = async () => {
            try {
                const res = await fetch('/api/blogs/getAllBlogs');
                const data = await res.json();
                setBlogs(data);
            } catch (error) {
                console.log(error);
            }
        }
        getAllBlogs();
    }, []);
  return (
    <Box p={{md: '2rem', base: '0.5rem'}} py={{md: 10, base: 10}} mt={14} maxW={{md: '95%', base: '100%'}} mx={'auto'} rounded={10} bg={useColorModeValue('gray.200', 'gray.800')} shadow={'md'}>
        <Box width={{md: '300px', base: '70%'}} bg={useColorModeValue('gray.300', 'gray.700')} p={4} borderBottomWidth={1} borderBottomColor={'gray.300'}>
            <Heading p={2} width={'170px'} bg={useColorModeValue('gray.200')}></Heading>
        </Box>
        <Flex justifyContent={{md: 'center', base: 'start'}} alignItems={{md: 'center', base: 'start'}}  mt={10} flexWrap={'wrap'} gap={3}>
        {
            blogs.length > 0 ? (
                blogs.map((blog) => (
                    <Box className="blog" key={blog._id} padding={3} width={{base: '100%', md:'32%'}} h={{base: '100%', md:'100%'}} rounded={10} position={'relative'} bg={useColorModeValue('white', 'gray.700')} color={'black'}>
                        <Box width={'100%'} height={{md: '250px', base: '250px'}} bg={useColorModeValue('gray.300')} rounded={8}></Box>
                        <Box>
                            <Text width={'200px'} mt={3} p={2} bg={'gray.300'}></Text>
                            <Text width={'100%'} mt={2} height={'120px'} bg={'gray.300'}></Text>
                            <Button height={'40px'} mt={4} rounded={0} bg={useColorModeValue('gray.300', 'gray.200')}>
                                <Text width={'150px'} p={2} bg={'gray.200'}></Text>
                            </Button>
                        </Box>
                    </Box>
                ))
            ) : (
                <Text></Text>
            )
        }
        </Flex>
    </Box>
  )
}
