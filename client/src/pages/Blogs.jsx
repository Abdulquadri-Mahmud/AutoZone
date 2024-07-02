import React, { Suspense, useEffect, useState } from 'react'

import BlogLoader from '../components/Loaders/BlogLoader';

export default function Blogs() {
  
  const ListOfBlogs = React.lazy(() => {
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(import('../components/ListOfBlogs'));
      }, 3000)
    })
  });

  return (
    <Suspense fallback={<BlogLoader/>}>
      <ListOfBlogs/>
    </Suspense>
  )
}
