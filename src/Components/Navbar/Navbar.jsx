import React from 'react'
import './Navbar.scss'
import Navbarimg from '../../Images/malma.png'

// MUI

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';



const Navbar = () => {


// mui states



const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >

        <div className="close" onClick={toggleDrawer(anchor, true)}>
            <CloseIcon className='icons' />
          </div>


          
      <div className='navbar__container'>
        <div className='item'>Home</div>
        <div className='items'>About</div>
        <div className='items'>Research</div>

      </div>

    </Box>
  );




  return (
<>
    <div className='main_navbar'>

<div className='navbar_img'>
<img src={Navbarimg}/>

</div>




<div className='navbar_text'>

<div>Home</div>
<div>About</div>
<div>Research</div>

</div>



    </div>



    <div className='ham_nav'>






          {['right' ].map((anchor) => (
        <React.Fragment key={anchor}>
          <div className="burger" onClick={toggleDrawer(anchor, true)}>
          <div id="menu" class="menu_color">
	        <MenuIcon/>
  
</div>
          </div>


          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
</>



  );
}







export default Navbar;