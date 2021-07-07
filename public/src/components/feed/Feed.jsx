import './feed.css'
import Share from '../share/Share';
import Post from '../post/Post';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

export default function Feed({ username }) {
    const [posts, setPost] = useState([]);
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const fetchPosts = async () => {
            const res = username
                ? await axios.get("/posts/profile/" + username)
                : await axios.get("posts/timeline/" + user._id)
            setPost(res.data.sort((p1, p2) => {
                return new Date(p2.createdAt) - new Date(p1.createdAt)
            }));
        };
        fetchPosts();
    }, [username, user._id]);

    const onDeletePost = async (id) => {
        try {
            await axios.delete(`/posts/${id}`)

            setPost(prevState => {
                const postIndex = prevState.findIndex(p => p._id === id)
                if (postIndex !== -1) {
                    prevState.splice(postIndex, 1)
                }
                return [...prevState];
            })
        } catch (e) {
            console.log(e)
        }
    }

    const onUpdatePost = async (id, newPostContent) => {
        try {
            await axios.put(`/posts/${id}`, {
                desc: newPostContent
            })

            setPost(prevState => {
                const postIndex = prevState.findIndex(p => p._id === id)
                if (postIndex !== -1) {
                    prevState[postIndex].desc = newPostContent
                }
                return [...prevState];
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="feed">
            <div className="feedWrapper">
            {(!username || username === user.username) && <Share />}
                {posts.map(p => (
                    <Post key={p._id} post={p}
                        onDeletePost={onDeletePost}
                        onUpdatePost={onUpdatePost}
                    />
                ))}


            </div>
        </div>
    )
}
