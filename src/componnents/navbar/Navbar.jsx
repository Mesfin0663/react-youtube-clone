import React from 'react'
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import "./navbar.css"
function Navbar() {
  return (
    <div className='nav_container'>
       <div className='nav_wrapper'>
        <a href="/" className='nav_logo'><div className='icon_button_box'><PlayCircleIcon style={{ fontSize: 40,color: 'red'  }} /> <p>HaTube</p> </div></a>
        <div className='nav_search'>        <input  type='text' placeholder='Search for videos' />
        <SearchIcon/>
</div>
        <nav>
            <ul>
                <li><a href=""></a>Home</li>
                <li><a href=""></a>About</li>
                <li><a href=""></a>Contact</li>
             
            </ul>
        </nav>
       </div>
    </div>
  )
}

export default Navbar
