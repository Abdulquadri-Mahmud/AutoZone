import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { CartButtonContext } from '../Cars/CarGrid'

export default function CartButton() {
    const {userCart} = useContext(CartButtonContext);
    console.log(userCart );
    let emptyCart = []

   const handleAddToCart = () => {
    emptyCart.push(userCart);
    console.log(emptyCart);
   } 
  return (
    <Button onClick={handleAddToCart}>Add To Cart</Button>
  )
}
