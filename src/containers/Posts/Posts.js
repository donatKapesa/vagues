import React, { Component } from "react";
import Post from "./Post/Post";
import $ from "jquery";
import Aux from "../../hoc/Aux/Aux";

class Posts extends Component {
  
  render() {
    var renderPosts = <div>loading...</div>;

    if (!this.props.postsArray.length) {
      renderPosts = (
        <p>
          You haven't shared any music with your friends. What are you waiting
          for?
        </p>
      );
    } else {
      renderPosts = this.props.postsArray.map((post, index) => {
        // console.log(post);
        return (
          <Post
            key={index}
            caption={post.caption}
            embedCodeSource={post.embedCodeSource}
          />
        );
      });
    }

    return (
      <Aux>
        <div className="container posts-container">{renderPosts}</div>
      </Aux>
    );
  }
}

export default Posts;
