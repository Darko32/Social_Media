import './rightbar.css'
import { Redeem, Remove } from '@material-ui/icons';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@material-ui/core';
import { AuthContext } from '../../context/AuthContext';
import { Add } from "@material-ui/icons";


export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    

    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <Redeem className="birthdayImg" />
                    <span className="birthdayText"><b>Jems</b> and <b>3 other</b> have birthday today</span>
                </div>
                <img className="rightbarAd" src="/assets/3.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                
            </>
        )
    };

    const ProfileRightBar = () => {
        return (
            <>
                <h4 className="rightbarTitle">User information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship == 1 ? "Single" : user.relationship == 1 ? "Married" : "-"}</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightBar /> : <HomeRightBar />}
            </div>
        </div>
    )
}
