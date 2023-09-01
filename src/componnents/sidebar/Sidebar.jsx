import React, { useContext } from 'react'
import "./sidebar.css"
import { IconButton } from '@mui/material'
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import { iconList } from './icons';
import { TitleContext } from '../../context/TitleContext';
function Sidebar() {
  const selected = "Music";
  const {title,setTitle} = useContext(TitleContext)

  return (
    <div className='sidebar_container'>
       {/* <h1>sidebar</h1> */}
       {
        iconList.map((icon)=>(
          <div className={title==icon.iconName?"sidebar_item selected":"sidebar_item"} onClick={()=>setTitle(icon.iconName)}>{icon.icon} <p>{icon.iconName}</p></div>

        ))
       }
    </div>
  )
}

export default Sidebar
