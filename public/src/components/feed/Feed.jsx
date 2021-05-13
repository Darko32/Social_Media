import './feed.css'
import Share from '../share/Share';
import Post from '../post/Post';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Feed({ username }) {
    const [posts, setPost] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
             ? await axios.get("/posts/profile/" + username) 
             : await axios.get("posts/timeline/6099237115998b13fc18af69")
            setPost(res.data);
        };
        fetchPosts();
    }, [username]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map(p => (
                    <Post key={p._id} post={p} />
                ))}


            </div>
        </div>
    )
}
