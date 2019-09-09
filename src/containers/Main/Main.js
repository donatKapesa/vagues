import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Posts from "../Posts/Posts";
import ShareMusicMainButton from "../../components/ShareMusicMainButton/ShareMusicMainButton";
import NewPost from "../NewPost/NewPost";
import Modal from "../../components/UI/Modal/Modal";

import $ from "jquery";

export class Main extends Component {
  state = {
    addingNewPost: false,
    postsArray: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  addingNewPostHandler = () => {
    this.setState({ addingNewPost: true });
  };

  cancelAddingNewPostHandler = () => {
    this.setState({ addingNewPost: false });
  };

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

  sharedNewPostHandler = (caption, embedCodeSource) => {
    var newPost = {
      caption: caption,
      embedCodeSource: embedCodeSource
    };

    $.ajax({
      type: "POST",
      url: "https://music-blog-app.firebaseio.com/users/user/posts.json",
      data: JSON.stringify(newPost),
      success: response => {
        console.log(response);
        this.setState(prevState => ({
          addingNewPost: false,
          postsArray: [...this.state.postsArray, newPost]
        }));
      },
      error: error => {
        console.log(error);
      }
    });
  };

  render() {
    console.log("Main.js - ");
    console.log(this.props.access_token);
    return (
      <Aux>
        <Modal
          styles="Modal"
          backdropStyles="backdrop"
          showModal={this.state.addingNewPost}
          modalClosed={this.cancelAddingNewPostHandler}
        >
          <NewPost
            access_token={this.props.access_token}
            showModal={this.state.addingNewPost}
            sharedNewPost={this.sharedNewPostHandler}
          />
        </Modal>
        <Posts postsArray={this.state.postsArray} />
        <ShareMusicMainButton clicked={this.addingNewPostHandler} />
      </Aux>
    );
  }
}

export default Main;
