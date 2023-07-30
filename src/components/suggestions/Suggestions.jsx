import React from 'react';
import { Typography, Avatar, ListItem, ListItemAvatar, ListItemText, Divider } from '@mui/material'

const SuggestionsCard = ({userImage, userName}) => {
  return (
    <>
        <ListItem sx={{ display: "flex", justifyContent: "space-between" }}>
            <div className="flex items-start">
                <ListItemAvatar>
                    <Avatar alt="Friend" src={userImage} />
                </ListItemAvatar>
                <ListItemText 
                    primary={userName}
                    secondary={
                    <React.Fragment>
                        <Typography sx={{ display: "inline" }} component="span" variant="body2" color="text.primary" >
                        {"Follows you"}
                        </Typography>
                    </React.Fragment>
                    }
                />
            </div>
            <div>
                <Typography component="p" color="blue"> Follow  </Typography>
            </div>
        </ListItem>
        <Divider variant="inset" component="li" />
    </>
  )
}

export default SuggestionsCard
