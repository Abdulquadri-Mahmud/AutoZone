import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    AlertDialogCloseButton,
    Box,
    Button,
    useDisclosure,
    Heading,
    Text,
    Flex,
  } from '@chakra-ui/react';

import { useRef } from 'react';

import customImg1 from '../assets/img/custom-img1.jpg';
import customImg2 from '../assets/img/custom-img2.jpg';
import customImg3 from '../assets/img/custom-img3.jpg';
import customImg4 from '../assets/img/custom-img4.jpg';

export default function Custom() {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

  return (
    <>
        <Button onClick={onOpen} bg={'transparent'} _hover={{bg: 'transparent'}} px={0}>Custom</Button>
        <AlertDialog motionPreset='slideInBottom'leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            <Flex gap={2} flexWrap={'wrap'}>
                <Box mt={1} fontWeight={400} width={'45%'} >
                    <img src={customImg1} alt="customImg1" className='max-w-full'/>
                    <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2} color={'gray.700'} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </Box>
                </Box> 
                <Box mt={1} fontWeight={400} width={'45%'} >
                    <img src={customImg2} alt="customImg2" />
                    <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2} color={'gray.700'} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </Box>
                </Box>
                <Box mt={1} fontWeight={400} width={'45%'} >
                    <img src={customImg3} alt="customImg2" />
                    <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2} color={'gray.700'} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </Box>
                </Box>
                <Box mt={1} fontWeight={400} width={'45%'} >
                    <img src={customImg4} alt="customImg2" />
                    <Box>
                        <Heading fontWeight={500} fontSize={20} textAlign={'center'}>SALE UP TO 30% OFF</Heading>
                        <Text textAlign={'center'} pt={2} color={'gray.700'} fontWeight={600}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
                    </Box>
                </Box>
            </Flex>
          </AlertDialogBody>
          {/* <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button colorScheme='red' ml={3}>
              Yes
            </Button>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
