import { Box, Modal, Typography, styled } from '@mui/material'
import  { GrGallery } from 'react-icons/gr';
import React, { useState } from 'react';
import { Add as AddIcon } from '@mui/icons-material';

const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center"  
})

const UserBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%"
  })

const AddModalDesktop = ({title}) => {

    const [open, setOpen] = useState(false);

  return (
    <>
        <li className="flex items-center my-2 cursor-pointer" onClick={ e => setOpen(true) }>
          <svg aria-label="New post" className="_ab6-" color="rgb(0, 0, 0)" fill="rgb(0, 0, 0)" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg> 
          <span className="ml-4 text-lg">Create</span>
        </li>
        <StyledModal
        open={open}
        arial-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={500} height={380} bgcolor={"background.default"} color={"text.primary"} borderRadius={5} sx={{margin: ".5rem", position: "relative"}}>
          <Box 
            onClick={ e => setOpen(false) }
            sx={{ position: "absolute", right: "5px", top: "5px", cursor: "pointer", zIndex: 999 }}
          >
            <AddIcon sx={{ transform: "rotate(45deg)" }} />
          </Box>
            <p className="text-center py-1">Create new post</p>
            <div className="w-full bg-gray-300" style={{ height: "1px" }}></div>
            <UserBox>
                <GrGallery size={60} />
                <Typography fontweight={500} variant="span" className="my-2">
                    Add photos and videos to create a new post
                </Typography>
                <span className="p-1 px-2 rounded-lg" style={{ backgroundColor: "#0095F6", color: "#fff" }}>Select from device</span>
            </UserBox>
        </Box>
      </StyledModal>
    </>
  )
}

export default AddModalDesktop
