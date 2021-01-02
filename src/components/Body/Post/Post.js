import { Avatar } from '@material-ui/core';
import React from 'react';
import './Post.css';

function Post({ name, description, message, photoUrl }) {
  return <div className="post">
      <div className="post_header">
        <Avatar />
        <div className="postInfo">
          <h2>Adetayo Sunkanmi</h2>
          <p>Description</p>
        </div>
      </div>
      <div className="post_body">
        <p>Message goes here</p>
      </div>
  </div>;
};

export default Post;
