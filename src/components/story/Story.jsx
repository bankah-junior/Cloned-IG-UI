import { Avatar, Badge, Stack, styled } from '@mui/material'
import React from 'react';
import user from '../../assets/users/user.jpg';
import friend1 from '../../assets/users/friend1.png';
import friend2 from '../../assets/users/friend2.jpg';
import friend3 from '../../assets/users/friend3.jpg';
import friend4 from '../../assets/users/friend4.jpg';
import { HiPlusCircle } from 'react-icons/hi';

const BadgeIcon = styled("span")(({ theme }) => ({
    width: 25,
    height: 25,
    backgroundColor: "white",
    borderRadius: "50%",
    border: `2px solid ${theme.palette.background.paper}`,
}));

const Story = () => {
  return (
    <Stack direction="row" spacing={2} sx={{ padding: "2rem 1rem 0 1rem" }}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        badgeContent={
          <BadgeIcon><HiPlusCircle size={20} color="#0095F6" /></BadgeIcon>
        }
      >
        <Avatar alt="user" src={user} sx={{ width: 53, height: 53 }} />
      </Badge>
      <div class="w-14 p-1 h-14 rounded-full flex justify-center items-center" style={{backgroundColor: "rgba(215,0,187)", background: "linear-gradient(50deg, rgba(215,0187,1) 36%, rgba(254,175,61,1) 60%)"}}>
        <div class="bg-white p-1 rounded-full">
            <div class="rounded-full">
              <Avatar alt="friend" src={friend1} sx={{ width: 50, height: 50 }} />
            </div> 
        </div>
      </div>
      <div class="w-14 p-1 h-14 rounded-full flex justify-center items-center" style={{backgroundColor: "rgba(215,0,187)", background: "linear-gradient(50deg, rgba(215,0187,1) 36%, rgba(254,175,61,1) 60%)"}}>
        <div class="bg-white p-1 rounded-full">
            <div class="rounded-full">
              <Avatar alt="friend" src={friend2} sx={{ width: 50, height: 50 }} />
            </div> 
        </div>
      </div>
      <div class="w-14 p-1 h-14 rounded-full flex justify-center items-center" style={{backgroundColor: "rgba(215,0,187)", background: "linear-gradient(50deg, rgba(215,0187,1) 36%, rgba(254,175,61,1) 60%)"}}>
        <div class="bg-white p-1 rounded-full">
            <div class="rounded-full">
              <Avatar alt="friend" src={friend3} sx={{ width: 50, height: 50 }} />
            </div> 
        </div>
      </div>
      <div class="w-14 p-1 h-14 rounded-full flex justify-center items-center" style={{backgroundColor: "rgba(215,0,187)", background: "linear-gradient(50deg, rgba(215,0187,1) 36%, rgba(254,175,61,1) 60%)"}}>
        <div class="bg-white p-1 rounded-full">
            <div class="rounded-full">
              <Avatar alt="friend" src={friend4} sx={{ width: 50, height: 50 }} />
            </div> 
        </div>
      </div>
    </Stack>
  )
}

export default Story
