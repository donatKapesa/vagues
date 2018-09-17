import React from 'react';
import profilePic from '../../../assets/donat_fb_dp.jpg';
import './userProfileImage.css';

const userProfileImage = (props) => (
    <img className="profilePic" src={profilePic} alt='No pic' />
)

export default userProfileImage;