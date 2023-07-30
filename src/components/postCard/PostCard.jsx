import React from 'react';
import { Card, CardHeader, Avatar, CardMedia, IconButton, CardContent, Typography, CardActions, Checkbox } from '@mui/material';
import { MoreVert, Favorite, FavoriteBorder, SentimentSatisfiedOutlined } from '@mui/icons-material';
import { TbSend } from 'react-icons/tb';
import { SlBubble } from 'react-icons/sl';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';


const PostCard = ({postText, userName, postDate, userImage, postImage, likes, comments}) => {
  return (
    <div>
      <Card sx={{margin: "1rem 0"}}>
        <CardHeader
          avatar={
            <Avatar sx={{ width: 40, height: 40, cursor: "pointer" }} src={userImage} aria-label="recipe" />
          }
          action={
            <IconButton aria-label="settings">
              <Checkbox icon={<MoreVert size={23} />} checkedIcon={<MoreVert size={23}  />} />
            </IconButton>
          }
          title={userName}
          subheader={postDate}
        />
        <CardMedia 
          component="img"
        //   sx={{height: {xs: "50%", sm: "400"}}}
            className="w-full"
          image={postImage}
          alt={userName}
        />
        <CardActions disablePadding sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <IconButton>
                <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}} />} />
            </IconButton>
            <IconButton>
                <Checkbox icon={<SlBubble size={23} />} checkedIcon={<SlBubble size={23}  />} />
            </IconButton>
            <IconButton>
                <Checkbox icon={<TbSend size={23} />} checkedIcon={<TbSend size={23} />} />
            </IconButton>
          </div>
          <div>
            <IconButton>
                <Checkbox icon={<BsBookmark size={23} />} checkedIcon={<BsFillBookmarkFill size={23} color="yellow" />} />
            </IconButton>
          </div>
        </CardActions>
        <CardContent>
            <Typography variant="p" color="text.primary"> <b>{likes} likes</b> </Typography>
            <Typography variant="body2" color="text.secondary"> 
                <b className='text-black'>{userName}</b> {postText}
            </Typography>
            <Typography variant="p" color="text.secondary">View all {comments} comments </Typography>
            <Typography variant="div" color="text.secondary" className="flex justify-between items-center w-full">
                <Typography variant="p" color="text.secondary">Add a comment </Typography>
                <Typography variant="span" color="text.secondary"> <SentimentSatisfiedOutlined /> </Typography>
            </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default PostCard
