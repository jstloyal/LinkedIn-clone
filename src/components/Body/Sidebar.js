import { Avatar } from '@material-ui/core'
import React from 'react';
// import { Avatar } from '@material-ui/core';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h2>Adetayo Sunkanmi</h2>
        <h4>sunkanmi@mail.com</h4>
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
      </div>
    </div>
  )
}

export default Sidebar
