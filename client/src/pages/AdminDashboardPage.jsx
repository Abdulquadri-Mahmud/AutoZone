import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box } from '@chakra-ui/react'
import AdminDashboard from '../components/AdminDashboard'

export default function AdminDashboardPage() {

  const [cars, setCars] = useState({});
    useEffect(() => {
      const fetchData = () => {
        
      }
    })
  return (
    <Box>
        <AdminDashboard/>
    </Box>
  )
}
