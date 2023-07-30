import React from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { Box } from '@mui/material';

const Navbar = () => {return (
    <Box flex={1.3} sx={{ height: { xs: "100%", md: "100vh" } }} >
      <DesktopNav />
      <MobileNav />
    </Box>
  )
}

export default Navbar
