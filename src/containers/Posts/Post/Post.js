import React from 'react';
import './Post.css';
import PosterProfile from '../../../components/PosterProfile/PosterProfile';

const post = (props) => (
    <div className="post">
        <PosterProfile />
        <div className="card">
            <div className="card-body">
                <h5 className="card-caption">{props.caption}</h5>
                <div className="embed-iframe">
                    <iframe title="embed" src={props.embedSrcLink} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </div>
            </div>
            <div className="card-footer">
                <a href="#like" className="card-link link">Like</a>
                <a href="#comment" className="card-link link">Comment</a>
                <a href="#repost" className="card-link link">Repost</a>
            </div>
        </div>
    </div>
)

export default post;