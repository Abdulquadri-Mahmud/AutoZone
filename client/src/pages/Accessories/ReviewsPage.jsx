import React, { createContext, useEffect, useState } from 'react'
import Reviews from '../../components/Reviews'
import { Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

export const ReviewsContext = createContext();

export default function ReviewsPage() {

  const [review, setReview] = useState(null);

  const {accessoryId} = useParams();

  useEffect(() => {
    const getItem = async () => {
      const fetchItem = await fetch(``)
    }
    getItem();
  }, []);

  return (
    <Box>
        <ReviewsContext.Provider value={review}>
        <Reviews review={review}/>
      </ReviewsContext.Provider>
    </Box>
  )
}
