import { Box, styled } from '@mui/material';
import React from 'react';
import { Story, AllCards, SuggestedLists } from '../../components/index';

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  flex: 4,
  marginBottom: "1rem"
}));

const SuggetBox = styled(Box)(({ theme }) => ({
  flex: 2.5,
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: { display: "flex" },
  [theme.breakpoints.down("sm")]: { display: "none" }
}));

const year = new Date().getFullYear();

const Home = () => {
  return (
    <Box flex={4} height={"100vh"} >
      <Box className="flex">
        <MainBox>
          <Story />
          <AllCards />
        </MainBox>
        <SuggetBox>
          <SuggestedLists />
          <footer className="ml-8 mt-2 text-gray-400">
            <div>
              <a href="#about">About •</a>
              <a href="#help">Help •</a>
              <a href="#Press">Press •</a>
              <a href="#api">API •</a>
              <a href="#jobs">Jobs •</a>
              <a href="#privacy">Privacy •</a>
              <a href="#terms">Terms •</a>
              <a href="#locations">Locations •</a>
              <a href="#language">Language •</a>
              <a href="#metaVerified">Meta Verified</a>
            </div>
            <p className='mt-4'> &copy; {year} INSTAGRAM FROM META </p>
          </footer>
        </SuggetBox>
      </Box>
    </Box>
  )
}

export default Home
