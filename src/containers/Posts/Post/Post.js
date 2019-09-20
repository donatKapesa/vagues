import React from "react";
import "./Post.css";
import PosterProfile from "../../../components/PosterProfile/PosterProfile";

const post = ({ caption, embedCodeSource }) => (
  <div className="post">
    <div className="card">
      <div className="card-body">
        <h5 className="card-caption">{caption}</h5>
        <div className="embed-iframe">
          <iframe
            title="embed"
            src={embedCodeSource}
            width="498"
            height="400"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
          />
        </div>
      </div>
      <div className="card-footer">
        <a href="#like" className="card-link link">
          Like
        </a>
        <a href="#comment" className="card-link link">
          Comment
        </a>
        <a href="#repost" className="card-link link">
          Repost
        </a>
      </div>
    </div>
  </div>
);

export default post;
