import { Box, Button, DrawerFooter, Flex, Heading, Image, Text, useColorModeValue, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { MdAddShoppingCart } from "react-icons/md";
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { BsCurrencyDollar } from 'react-icons/bs'
import { CartContext } from '../Cars/CarList';

// import { emptyCart } from '../Cars/CarList';

export default function Carts() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = useRef();

    const [carts, setCarts] = useState({});
    // const carts = useContext(CartContext);
    // console.log(carts);
    useEffect(() => {
        const getCart = window.localStorage.getItem('cars');
        if (getCart) {
            setCarts(JSON.parse(getCart));
        }
    }, []);
    
    // console.log(carts);
    const totatlPrice = 0;

  return (
    <Box cursor={'pointer'}>
        <Button ref={btnRef} onClick={onOpen} colorScheme='white' position={'relative'}>
            <Text color={useColorModeValue('black', 'white')}>
                <MdAddShoppingCart className='text-xl'/>
            </Text>
            {
                carts.length > 0 ? (
                    <Text position={'absolute'} top={-1} right={2} color={'blue.500'}>{`${carts.length}`}</Text>
                ) : (
                    <Text position={'absolute'} top={-1} right={2} color={'blue.500'}>{`${carts.length}`}</Text>
                )
            }
        </Button>
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef} size={{md: 'lg', base: 'sm'}}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader fontSize={25}>Your Cart</DrawerHeader>
                <DrawerBody>
                    {/* {
                        carts.length > 0 ? (
                            carts.map((cart) => (
                                <Flex alignItems={'center'} justifyContent={'space-between'} gap={3} key={cart._id} width={'100%'} bg={useColorModeValue('gray.200', 'gray.800')} p={2} mb={2} rounded={4}>
                                    <Flex alignItems={'center'} gap={3}>
                                        <Image src={cart.carimage} objectFit={'contain'} boxSize={'100px'}/>
                                        <Text fontWeight={500} fontSize={14}>{cart.name}</Text>
                                    </Flex>
                                    <Flex flexDir={'column'} alignItems={'center'}>
                                        <Text fontWeight={500} fontSize={14}>Price</Text>
                                        <Text fontWeight={500} fontSize={14} className='flex items-center'><BsCurrencyDollar/>{cart.price}.00</Text>
                                    </Flex>
                                    <Flex flexDir={'column'} alignItems={'center'}>
                                        <Text fontWeight={500} fontSize={14}>Quantity</Text>
                                    </Flex>
                                </Flex>
                            ))
                        ): (
                            <Heading fontWeight={500} fontSize={20} textAlign={'center'} mt={20}>Your Cart Is Empty!</Heading>
                        )
                    } */}
                </DrawerBody>
                <DrawerFooter>
                    <Box mb={10}>
                        <Heading fontWeight={500} fontSize={20}>Total: </Heading>
                        {/* <Text>${`${carts.price}`}.00</Text>  */}
                    </Box>
                </DrawerFooter>
            </DrawerContent>
      </Drawer>
    </Box>
  )
}