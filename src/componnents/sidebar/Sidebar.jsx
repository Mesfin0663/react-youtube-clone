import React from 'react'
import "./sidebar.css"
import { IconButton } from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { iconList } from './icons';
function Sidebar() {
  const selected = "Music";
  return (
    <div className='sidebar_container'>
       {/* <h1>sidebar</h1> */}
       {
        iconList.map((icon)=>(
          <div className={selected==icon.iconName?"sidebar_item selected":"sidebar_item"}>{icon.icon} <p>{icon.iconName}</p></div>

        ))
       }
    </div>
  )
}

export default Sidebar
