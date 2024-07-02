import { Box, Button, Flex, Image, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function BlogDetailes() {
  const [blogId, setBlogId] = useState({});
  const { blogID } = useParams();

  const navigate = useNavigate();

  let dispatch = useDispatch();

  const { currentAdmin } = useSelector((state) => state.admin);

  useEffect(() => {
    const getSingBlog = async () => {
        const fetchBlogId = `/api/blogs/getSingleBlog/${blogID}`;
        const res = await fetch(fetchBlogId);
        
        const data = await res.json();
        console.log(data);

        setBlogId(data)
    }

    getSingBlog();

  }, []);

  const handleDelete = async () => {
    const fetchBlogId = `/api/blogs/deleteBlog/${blogID}`;
    const res = await fetch(fetchBlogId, {
      method: 'DELETE',
    });
    await res.json();
    navigate('/')
  }

  return (
    <Box padding={{md:'2rem', base:'2rem'}} my={'3rem'} bg={useColorModeValue('gray.200', 'gray.700')} fontWeight={500} color={useColorModeValue('black')}>
      <Box w={{md: '45%', base: '100%'}}>
        <Image src={blogId.imageUrl} width={'100%'} rounded={10}/>
      </Box>
      <Box mt={4} w={{md: '60%', base: '100%'}}>
        <Text fontSize={32} color={'blue.500'}>{blogId.title}</Text>
        <Text mt={4}>{blogId.body}</Text>
        {
          !currentAdmin ? (
            ''
          ) : ( 
            <>
              <Flex gap={4} mt={5}>
                <Button width={'150px'} bg={useColorModeValue('red.500','white')} color={useColorModeValue('white', 'black')} _hover={{bg: useColorModeValue('red.600', 'gray.200')}} transitionDuration={'0.3s'} onClick={handleDelete}>Delete Blog</Button>
                <Button width={'150px'} bg={'blue.500'} color={useColorModeValue('#fff', '#fff')} _hover={{bg: 'blue.600'}} transitionDuration={'0.3s'}>
                  <Link to={`/update-blog/${blogId._id}`}>
                    Update Blog
                  </Link>
                </Button>
              </Flex>
            </>
           )
        }
      </Box>
    </Box>
  )
}
