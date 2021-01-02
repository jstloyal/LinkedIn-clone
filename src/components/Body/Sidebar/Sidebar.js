import { Avatar } from '@material-ui/core'
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/userSlice';
// import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => (
    <div className="recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img 
          src="https://images.unsplash.com/photo-1560345573-9f453083c335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjR8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60"
          alt="cover pics" 
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="stat_number">2,432</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="stat_number">1,232</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("reactjs")}
        {recentItems('JavaScript')}
        {recentItems('Ruby')}
        {recentItems('Ruby on Rails')}
      </div>
    </div>
  )
}

export default Sidebar
