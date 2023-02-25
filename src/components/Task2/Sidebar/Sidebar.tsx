import React from 'react';
import './Sidebar.css';
import Avatar from '@mui/material/Avatar';
import { ArrowBackOutlined } from '@mui/icons-material';

const HomeIcon = require('../../../assets/home.png');

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebar__container'>
        <div className='sidebar__container1'>
          <ArrowBackOutlined
            sx={{ fontSize: '38px', marginBottom: '35px', fontWeight: '10px' }}
          />
          <img
            src={HomeIcon}
            style={{ width: '30px', height: '30px', marginLeft: '6px' }}
            alt='pic.png'
          />
        </div>
        <div className='sidebar__container2'>
          <Avatar sx={{ bgcolor: '#1D4ED8', fontSize: '13px' }}>NT</Avatar>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
