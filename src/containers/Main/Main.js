import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aux";
import Posts from "../Posts/Posts";
import ShareMusicMainButton from "../../components/ShareMusicMainButton/ShareMusicMainButton";
import NewPost from '../NewPost/NewPost';
import Modal from '../../components/UI/Modal/Modal';

import $ from "jquery";

export class Main extends Component {
  state = {
    addingNewPost: false
  };

  addingNewPostHandler = () => {
    this.setState({ addingNewPost: true });
  };

  cancelAddingNewPostHandler = () => {
    this.setState({ addingNewPost: false });
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
    return (
      <Aux>
        <Modal
          styles="Modal"
          backdropStyles="backdrop"
          showModal={this.state.addingNewPost}
          modalClosed={this.cancelAddingNewPostHandler}
        >
          <NewPost
            showModal={this.state.addingNewPost}
            sharedNewPost={this.sharedNewPostHandler}
          />
        </Modal>
        <Posts />
        <ShareMusicMainButton clicked={this.addingNewPostHandler} />
      </Aux>
    );
  }
}

export default Main;
