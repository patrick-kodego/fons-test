import React from 'react';
import { useState } from 'react';
import './Sidebar.css';
import { SidebarData } from '../data/Data';
import { List } from 'react-bootstrap-icons';
import { motion } from 'framer-motion';
import {MDBBtn} from 'mdb-react-ui-kit'

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: 0,
    },
    false: {
      left: '-60%',
    },
  };

  return (
    <>
      <motion.div
        className='Sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div
          className='bars'
          style={expanded ? { left: '60' } : { left: '5%' }}
          onClick={() => setExpanded(!expanded)}
        >
          <List />
        </div>
        <div className='logo'>
          <img
            src='https://cdn.cdnlogo.com/logos/g/97/google-comparison-shopping-services-css.svg'
            alt=''
            className='auth-header-logo-img'
          />
          <span>
            {' '}
            Aplha <span>Code</span>{' '}
          </span>
        </div>

        <div className='menu'>
          {SidebarData.map((item, index) => {
            return (
              <div
                className={selected === index ? 'menuItem active' : 'menuItem'}
                key={index}
                onClick={() => setSelected(index)}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
