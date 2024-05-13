import React, {useState} from 'react';
import "./Timeline.css";
import Suggestions from './Suggestions';
import Post from "./posts/Post";


function Timeline() {
    const [posts, setPosts] = useState([
        {
            user: "robertAmundson", 
            postImage:"https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?cs=srgb&dl=pexels-jplenio-1632790.jpg&fm=jpg", 
            likes: 1029,
            timestamp: "2w",
        },
        {
            user: "maxCory", 
            postImage:"https://www.surfholidays.com/assets/images/blog/2017-12-21-Old-School-Longboarding.jpg", 
            likes: 1010,
            timestamp: "2w",
        },
        {
            user: "natePierce", 
            postImage:"https://www.nps.gov/articles/images/37579352874_d3126d2a4e_o.jpg?maxwidth=650&autorotate=false", 
            likes: 1012,
            timestamp: "2w",
        }
    ])
  return (
    <div className="timeline">
        <div className="timeline__left">
            <div className="timeline__posts">
            {posts.map((post) => (
            <Post user={post.user} 
            postImage={post.postImage} 
            likes={post.likes} 
            timestamp={post.timestamp}/>
        ))}
            </div>
        </div>
        <div className="timeline__right">
            <Suggestions />
        </div>
    </div>
  )
}

export default Timeline;