import './rightbar.css'
import { Redeem } from '@material-ui/icons';
import { Users } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({ profile }) {
    const HomeRightBar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <Redeem className="birthdayImg" />
                    <span className="birthdayText"><b>Jems</b> and <b>3 other</b> have birthday today</span>
                </div>
                <img className="rightbarAd" src="/assets/3.jpg" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u => (
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        )
    };

    const ProfileRightBar = () => {
        return(
            <>
            <h4 className="rightbarTitle">User information</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From:</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friends</h4>
            <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="./assets/4.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="./assets/5.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
                <img src="./assets/6.jpg" alt="" className="rightbarFollowingImg" />
                <span className="rightbarFollowingName">John Carter</span>
            </div>
            
            </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile? <ProfileRightBar/>: <HomeRightBar/>}
            </div>
        </div>
    )
}