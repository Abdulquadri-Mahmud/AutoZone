import { Box } from '@chakra-ui/react';
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import StereoReview from '../../../components/Accessories/Reviews/StereoReview';

export const StereoReviewContext = createContext();

export default function StereoReviewPage() {
  const [review, setReview] = useState({});

  const {accessoryId} = useParams();

  useEffect(() => {
    const getItem = async () => {
      const fetchItem = await fetch(`/api/accessories/car-stereo/${accessoryId}`);
      const item = await fetchItem.json();
      setReview(item);
    }
    getItem();
  }, []);

  return (
    <Box>
      <StereoReviewContext.Provider value={review}>
        <StereoReview review={review}/>
      </StereoReviewContext.Provider>

    </Box>
  )
}
