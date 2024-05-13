import React from 'react'
import Avatar from '@mui/material/Avatar';
import "./Suggestions.css"

function Suggestions() {
  return (
    <div className="suggestions">

      <div className="suggestions__title">
        Suggestions for You

      </div>
      <div className="suggestions__usernames">
        <div className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">hellopeople</span>
                <span className="relation">New to Instagram</span>

              </div>
            </div>
            <button className="follow_button">Follow</button>

        </div>

      </div>

      <div className="suggestions__usernames">
        <div className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">hellopeople</span>
                <span className="relation">New to Instagram</span>

              </div>
            </div>
            <button className="follow_button">Follow</button>

        </div>

      </div>

      <div className="suggestions__usernames">
        <div className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">hellopeople</span>
                <span className="relation">New to Instagram</span>

              </div>
            </div>
            <button className="follow_button">Follow</button>

        </div>

      </div>

      <div className="suggestions__usernames">
        <div className="suggestions__username">
            <div className="username__left">
              <span className="avatar">
                <Avatar>R</Avatar>
              </span>
              <div className="username__info">
                <span className="username">hellopeople</span>
                <span className="relation">New to Instagram</span>

              </div>
            </div>
            <button className="follow_button">Follow</button>

        </div>

      </div>  
    </div>
  )
}

export default Suggestions