import React, { createContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { Box } from '@chakra-ui/react'
import AdminDashboard from '../components/AdminDashboard'

export const AdminDashboardContext = createContext();

export default function AdminDashboardPage() {

  const [cars, setCars] = useState({});
  useEffect(() => {
    const fetCars = async () => {
      try {
        const res = await fetch('/api/cars/allcarlists');

        const data = await res.json();
        setCars(data);
      } catch (error) {
        // setError(error);
        console.log(error);
      }
  }

  fetCars();

  }, []);
  return (
    <Box>
      <AdminDashboardContext.Provider value={cars}>
        <AdminDashboard cars={cars}/>
      </AdminDashboardContext.Provider>
    </Box>
  )
}
