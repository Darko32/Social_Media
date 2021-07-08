import './post.css';
import React from 'react'
import { MoreVert, ThumbUp, Favorite } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

export default function Post({ post, onDeletePost, onUpdatePost }) {
    
    const [postToEdit, setPostToEdit] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser } = useContext(AuthContext);
    const [user, setUser] = useState({});

   
    useEffect(() => {
        const fetchUser = async () => {
            const res = await axios.get(`/users?userId=${post.userId}`)
            setUser(res.data);
        };
        fetchUser();
    }, [post.userId]);

    const handleEditPost = (e) => {
        const value = e.target.value
        setPostToEdit(prevState => {
            prevState.desc = value
            return prevState
        })
    }

    

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`profile/${user.username}`}>
                            <img className="postProfileImg"
                                src={user.profilePicture ? PF + user.profilePicture : PF + "avatar.jpg"}
                                alt="" />
                        </Link>
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    {!postToEdit && (
                        <React.Fragment>
                            <span className="postText">{post.desc}</span>


                            <img className="postImg" src={PF + post.img} alt="" />
                        </React.Fragment>
                    )}
                    {postToEdit && (
                        <React.Fragment>
                            <textarea defaultValue={postToEdit.desc} onChange={handleEditPost} />
                            <button onClick={() => {
                                onUpdatePost(post._id, postToEdit.desc)
                                setPostToEdit(null)
                            }}>
                                Update
                            </button>
                        </React.Fragment>
                    )}
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <ThumbUp htmlColor="blue" className="likeIcon" />
                        <Favorite htmlColor="red" className="likeIcon" />
                        <span className="postLikeCounter">1 people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{post.comment} comments</span>
                    </div>

                    <div>
                        {!postToEdit && (
                            <button
                                type="button"
                                onClick={() => setPostToEdit(post)}
                            >
                                Edit
                            </button>
                        )}

                        {postToEdit && (
                            <button
                                type="button"
                                onClick={() => setPostToEdit(null)}
                            >
                                Cancel
                            </button>
                        )}
                    </div>

                    <div>
                        <button
                            type="button"
                            onClick={() => onDeletePost(post._id)}
                        >
                            Delete
                        </button>
                    </div>

                </div>
            </div>

        </div>
    )
}
