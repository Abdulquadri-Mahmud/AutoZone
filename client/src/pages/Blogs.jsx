import React, { Suspense, useEffect, useState } from 'react'

import BlogLoader from '../components/Loaders/BlogLoader';
import Header from '../components/Header';

export default function Blogs() {
  
  const ListOfBlogs = React.lazy(() => {
    return new Promise((resolve)=> {
      setTimeout(() => {
        resolve(import('../components/ListOfBlogs'));
      }, 3000)
    })
  });

  return (
    <>
      <Header/>
      <Suspense fallback={<BlogLoader/>}>
        <ListOfBlogs/>
      </Suspense>
    </>
  )
}
