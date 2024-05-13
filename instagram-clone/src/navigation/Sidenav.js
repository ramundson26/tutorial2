import React from 'react'
import "./Sidenav.css"
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MenuIcon from '@mui/icons-material/Menu';


function Sidenav() {
  return (
    <div className="sidenav">
        <img className = "sidenav__logo"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5uK_2FAtG4jpoO6hxUBii4tKF5UonQImpG1LitH3tw&s" />
        <div className="sidenav__buttons">

            <button className="sidenav__button">
                <HomeIcon/>
                <span>Home</span>
            </button>
        
            <button className="sidenav__button">
                <SearchIcon/>
                <span>Search</span>
            </button>
        
            <button className="sidenav__button">
                <ExploreIcon/>
                <span>Explore</span>
            </button>
        
            <button className="sidenav__button">
                <SlideshowIcon/>
                <span>Reels</span>
            </button>
        
            <button className="sidenav__button">
                <ChatBubbleIcon/>
                <span>Messages</span>
            </button>
        
            <button className="sidenav__button">
                <FavoriteBorderIcon/>
                <span>Notifications</span>
            </button>
        
            <button className="sidenav__button">
                <AddCircleOutlineIcon/>
                <span>create</span>
            </button>

        </div>

        <div className="sidenav__more">
            <button className="sidenav__button">
                <MenuIcon/>
                <span>More</span>
            </button>
        </div>

    </div>
  )
}

export default Sidenav