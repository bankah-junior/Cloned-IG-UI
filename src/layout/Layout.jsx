import React from 'react'
import { Navbar } from '../components/index';
import Router from '../router/Routers';
import { Stack } from '@mui/material';

const Layout = () => {
  return (
    <Stack sx={{ flexDirection: { xs: "column", sm: "row" }, gap: 4 }} justifyContent="space-between">
      <Navbar />
      <Router />
    </Stack>
  )
}

export default Layout
