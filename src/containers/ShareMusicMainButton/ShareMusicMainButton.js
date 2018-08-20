import React, { Component } from 'react';

import './ShareMusicMainButton.css';

class NewPostButton extends Component {
    render() {
        return(
            // <div class="circle"></div>
            <div onClick={this.props.clicked} className="addNewPost">
                <button id="new-post">Share music...</button>
            </div>
        )
    }
}

export default NewPostButton;