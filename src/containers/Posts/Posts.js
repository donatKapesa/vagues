import React, { Component } from "react";
import Post from "./Post/Post";
import $ from "jquery";
import Aux from "../../hoc/Aux/Aux";

class Posts extends Component {
  state = {
    postsArray: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    $.ajax({
      url: "https://music-blog-app.firebaseio.com/users/user/posts.json",
      success: response => {
        if (response) {
          console.log(response);
          // convert object of objects to array of objects
          const responseArray = Object.keys(response).map(
            postIdFromFirebase => response[postIdFromFirebase]
          );
          this.setState({
            postsArray: responseArray
          });
        }
      },
      error: error => {
        console.log(error);
      }
    });
  };

  render() {
    var renderPosts = <div>loading...</div>;

    if (!this.state.postsArray.length) {
      renderPosts = (
        <p>
          You haven't shared any music with your friends. What are you waiting
          for?
        </p>
      );
    } else {
      renderPosts = this.state.postsArray.map((post, index) => {
        console.log(post);
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
