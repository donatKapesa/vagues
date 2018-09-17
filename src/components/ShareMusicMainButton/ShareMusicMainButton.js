import React from 'react';

import './ShareMusicMainButton.css';

const ShareMusicMainButton = (props) => (
    <div onClick={props.clicked} className="addNewPost">
        <button id="new-post">Share music...</button>
    </div>
);

export default ShareMusicMainButton;