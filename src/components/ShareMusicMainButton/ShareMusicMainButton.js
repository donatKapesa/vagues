import React from 'react';

import './ShareMusicMainButton.css';

const ShareMusicMainButton = (props) => (
    <div onClick={props.clicked} className="addNewPost">
        <button class="waves-effect waves-light btn sign-in-button">Share music</button>
    </div>
);

export default ShareMusicMainButton;