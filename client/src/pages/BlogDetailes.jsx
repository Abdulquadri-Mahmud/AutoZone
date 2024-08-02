import { Box, Button, Flex, Heading, Image, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaPinterest, FaTwitter } from 'react-icons/fa';
import { FaCalendarAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function BlogDetailes() {
  const [blog, setBlogId] = useState({});
  const { blogID } = useParams();
  const [recentBlog, setRecentBlog] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const getSingBlog = async () => {
        const fetchBlogId = `/api/blogs/getSingleBlog/${blogID}`;
        const res = await fetch(fetchBlogId);
        
        const data = await res.json();
        setBlogId(data)
    }

    getSingBlog();

  }, []);

  useEffect(() => {
    const allBlog = async () => {
      const res = await fetch('/api/blogs/getAllBlogs');

      const data = await res.json();

      setRecentBlog(data);
    }
    allBlog();
  }, []);

  const handleDelete = async () => {
    const fetchBlogId = `/api/blogs/deleteBlog/${blog}`;
    const res = await fetch(fetchBlogId, {
      method: 'DELETE',
    });
    await res.json();
    navigate('/')
  }

  return (
    <Box>
      <Header/>
      <Box bg={useColorModeValue('gray.200', 'gray.800')}>
        <Flex justifyContent={'center'} alignItems={'center'} backgroundPosition="center" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundImage={'/bg1.jpg'} h={'45vh'} w={'full'} bgBlendMode="multiply" className='blog'>
          <Box color={'white'}>
            <Heading textAlign={'center'} fontSize={{md: 45, base: 30}}>Blog Single</Heading>
            <Box mt={3} textAlign={'center'}>
              <Link to={'/'}>Home / </Link>
              <Link to={'/blog'}>Our Blog</Link>
            </Box>
          </Box>
        </Flex>
        <Flex maxW={{'2xl': '70%', xl: '90%', md: '90%', base: '100%'}} mx={'auto'} py={'10vh'} justifyContent={'center'} gap={5} flexWrap={'wrap'}>
          <Box padding={3} width={{md: '50%', base: '100%'}} fontWeight={500} rounded={5} color={useColorModeValue('black')} bg={useColorModeValue('white', 'gray.700')}>
            <Box>
              <Box >
                  <Image src={blog.imageUrl} width={'100%'}/>
              </Box>
              <Box p={0}>
                <Text fontSize={25} color={''} py={4}>{blog.title}</Text>
                <Flex justifyContent={'space-between'} alignItems={'center'} borderBottomWidth={1} borderTopWidth={1} borderColor={useColorModeValue('gray.300')} py={3}>
                  <Flex gap={2}>
                    <Text>Posted By:</Text>
                    <Text fontWeight={400} fontSize={14}>{blog.postedBy}</Text>
                  </Flex>
                  <Flex gap={2}>
                    <Text>Date Added:</Text>
                    <Text fontWeight={400} fontSize={14} className='flex items-center'><FaCalendarAlt/> {blog.date}</Text>
                  </Flex>
                </Flex>
                <Text mt={4} fontWeight={400}>{blog.body}</Text>
                {/* {
                  !currentAdmin ? (
                    ''
                  ) : ( 
                    <>
                      <Flex gap={4} mt={5}>
                        <Button width={'150px'} color={useColorModeValue('white', 'black')} _hover={{bg: useColorModeValue('red.600', 'gray.200')}} transitionDuration={'0.3s'} onClick={handleDelete}>Delete Blog</Button>
                        <Button width={'150px'} bg={'blue.500'} color={useColorModeValue('#fff', '#fff')} _hover={{bg: 'blue.600'}} transitionDuration={'0.3s'}>
                          <Link to={`/update-blog/${blog._id}`}>
                            Update Blog
                          </Link>
                        </Button>
                      </Flex>
                    </>
                  )
                } */}
              </Box>
            </Box>
            <Box mt={10}>
              <Image src='/bg1.jpg'/>
            </Box>
            <Box p={{md: 7, base: 4}} rounded={4} bg={'green.500'} color={'white'} fontWeight={400} my={7}>
              <Text>
                  Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales
              </Text>
            </Box>
            <Box mt={6} fontWeight={400}>
              <Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse porttitor nunc a sodales tempor. Mauris sed felis maximus, interdum metus vel, tincidunt diam. Nam ac risus vitae sem vehicula egestas. Sed velit nulla, viverra non commodo et, sodales id dui.
              </Text>
              <Text mt={6}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse facilisis ultricies tortor, nec sollicitudin lorem sagittis vitae. Curabitur rhoncus commodo rutrum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam nec lacus pulvinar, laoreet dolor quis, pellentesque ante. Cras nulla orci, pharetra at dictum consequat, pretium pretium nulla. Suspendisse
              </Text>
            </Box>
          <Flex mt={6}>
              <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'} width={'130px'} py={3} px={2} bg={'blue.300'}>
                  <FaFacebookF/>
                  <Text fontWeight={500}>Facebook</Text>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'110px'} py={3} px={2} bg={'teal.400'}>
                  <FaTwitter/>
                  <Text fontWeight={500}>Twitter</Text>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'80px'}  py={3} px={2} bg={'red.500'}>
                  <FaGooglePlusG className='text-xl'/>
                  <Text fontWeight={500}></Text>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'60px'} py={3} px={2} bg={'blue.500'}>
                  <FaLinkedinIn/>
                  <Text fontWeight={500}></Text>
              </Flex>
              <Flex justifyContent={'center'} alignItems={'center'} gap={1} color={'white'}width={'60px'} py={3} px={2} bg={'red.600'}>
                  <FaPinterest/>
                  <Text fontWeight={500}></Text>
              </Flex>
          </Flex>
          </Box>
          <Box width={{md: '45%', base: '100%'}} padding={3}>
            <Box p={{md: 10, base: 3}}  shadow={'xl'} rounded={'10'} mt={{md: 0, base:10}} bg={useColorModeValue('white', 'gray.700')}>
              <Heading fontWeight={500} fontSize={20} borderLeftWidth={4} borderColor={'green.500'} pl={2}>Recent Post</Heading>
              {
                recentBlog.length > 0 && recentBlog.map((recentBlog, index) => (
                  <Box key={index} my={8} borderBottomWidth={1} borderColor={'gray.300'} pb={8}>
                    <Flex gap={3}>
                        <Image boxSize={75} rounded={'full'} src={recentBlog.imageUrl}/>
                        <Stack>
                            <Text fontSize={16} fontWeight={500}>{recentBlog.title}</Text>
                            <Flex justifyContent={'space-between'} gap={5} alignItems={'center'}>
                              <Flex gap={2}>
                                <Text fontWeight={500}>Posted By:</Text>
                                <Text fontWeight={400} fontSize={14}>{blog.postedBy}</Text>
                              </Flex>
                              <Flex gap={2}>
                                <Text fontWeight={500}>Date Added:</Text>
                                <Text fontWeight={400} fontSize={14} className='flex items-center'><FaCalendarAlt/> {blog.date}</Text>
                              </Flex>
                            </Flex>
                            <Link to={`blogDetailes/${recentBlog._id}`} onClick={() => window.location.reload()} className='text-green-500 text-sm flex items-center gap-2'>Read More <FaLongArrowAltRight/></Link>
                        </Stack>
                    </Flex>
                  </Box>
                ))
              }
            </Box>
          </Box>
        </Flex>
      </Box>
      <Footer/>
    </Box>
  )
}
