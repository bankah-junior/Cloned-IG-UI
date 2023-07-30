import React from 'react';
import Suggestions from './Suggestions';
import frnd1 from '../../assets/users/friend4.jpg';
import frnd2 from '../../assets/users/friend5.jpg';
import frnd3 from '../../assets/users/friend6.jpg';
import frnd4 from '../../assets/users/friend7.jpg';
import { friend1, friend2, friend3, friend4 } from './suggestedUsers';
import { List, Typography } from '@mui/material';

const SuggestedLists = () => {
  return (
    <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <Typography variant="p" fontWeight={100} mt={4} mb={4}>Suggested for you</Typography>
            <Suggestions userName={friend1.userName} userImage={frnd1} />
            <Suggestions userName={friend2.userName} userImage={frnd2} />
            <Suggestions userName={friend3.userName} userImage={frnd3} />
            <Suggestions userName={friend4.userName} userImage={frnd4} />
        </List>
    </>
  )
}

export default SuggestedLists
