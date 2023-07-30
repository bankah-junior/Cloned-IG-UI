import React from 'react';
import { IconButton, Checkbox, Avatar } from '@mui/material';
import { MoreVert, Favorite, FavoriteBorder, SentimentSatisfiedOutlined } from '@mui/icons-material';
import { TbSend } from 'react-icons/tb';
import { SlBubble } from 'react-icons/sl';
import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';

const Card = ({postText, userName, postDate, userImage, postImage, likes, comments, location}) => {
  return (
    <>
        <div class="flex flex-col my-8">
            <div class="top-card flex justify-between items-center px-4 mb-2">
                <div class="flex flex-start">
                    <Avatar sx={{ width: 40, height: 40, cursor: "pointer" }} src={userImage} />
                    <div class="flex flex-col ml-4">
                        <h3 class="font-semibold text-base">{userName}</h3>
                        <p className="text-sm">{location}</p>
                    </div>
                </div>
                <div>
                    <MoreVert size={20} className="cursor-pointer" />
                </div>
            </div>
            <div class="card-image">
                <img src={postImage} alt="post" />
            </div>
            <div class="card-icons flex justify-between px-4 my-2">
                <div class="card-icons-left flex items-center">
                    <Checkbox className='m-0 mr-2' icon={<FavoriteBorder size={20} />} checkedIcon={<Favorite sx={{color: "red"}} />} />
                    <SlBubble className='mr-4 cursor-pointer' size={20} />
                    <TbSend size={20} className="cursor-pointer" />
                </div>
                <div>
                    <IconButton>
                        <Checkbox className="m-0" icon={<BsBookmark size={20} />} checkedIcon={<BsFillBookmarkFill size={20} color="#cccccc" />} />
                    </IconButton>
                </div>
            </div>
            <div class="card-text px-4">
                <p class="likes font-semibold">{likes} likes</p>
                <span className="font-semibold">{userName} </span> <span>{postText}</span>
                <p class="comments-text">View all {comments} comments</p>
                <div class="flex justify-between items-center cursor-pointer">
                    <p>Add a comment</p>
                    <SentimentSatisfiedOutlined />
                </div>
                <p class="opacity-50">{postDate}</p>
            </div>
        </div>
    </>
  )
}

export default Card
