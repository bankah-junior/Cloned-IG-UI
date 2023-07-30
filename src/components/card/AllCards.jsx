import React from 'react';
import Card from './Card';
import BigHero from '../../assets/posts/Big-Hero-6.jpg';
import BMW from '../../assets/posts/bmw_i8.jpg';
import Brave from '../../assets/posts/brave.jpg';
import Gru from '../../assets/posts/gru.jpg';
import Rio from '../../assets/posts/rio.jpg';
import { post1, post2, post3, post4, post5 } from './postsData';

const AllCards = () => {
  return (
    <>
      <Card userImage={BigHero} location={post1.location} postText={post1.caption} userName={post1.userName} postDate={post1.date} postImage={BigHero} likes={post1.likes} comments={post1.comments} />
      <Card userImage={Gru} location={post2.location} postText={post2.caption} userName={post2.userName} postDate={post2.date} postImage={Gru} likes={post2.likes} comments={post2.comments} />
      <Card userImage={BMW} location={post3.location} postText={post3.caption} userName={post3.userName} postDate={post3.date} postImage={BMW} likes={post3.likes} comments={post3.comments} />
      <Card userImage={Brave} location={post4.location} postText={post4.caption} userName={post4.userName} postDate={post4.date} postImage={Brave} likes={post4.likes} comments={post4.comments} />
      <Card userImage={Rio} location={post5.location} postText={post5.caption} userName={post5.userName} postDate={post5.date} postImage={Rio} likes={post5.likes} comments={post5.comments} />
    </>
  )
}

export default AllCards
