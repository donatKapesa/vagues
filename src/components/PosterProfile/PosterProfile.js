import React from 'react';
import './PosterProfile.css';
import UserProfileImage from '../../containers/User/userProfileImage/userProfileImage';

const posterProfile = () => (
    <span className="profile-of-poster">
        <div className="profile-pic-div">
            <UserProfileImage />
        </div>
        <div className="username">
            <a className="link" href="user-profile">black iverson</a>
        </div>
        <div className="timeStamp text-muted">
            8hrs ago
        </div>
    </span>
)

export default posterProfile;