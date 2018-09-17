import React, { Component } from 'react';
import Post from './Post/Post';
import $ from 'jquery';
import Aux from '../../hoc/Aux/Aux';
import ShareMusicMainButton from '../../components/ShareMusicMainButton/ShareMusicMainButton';
import Modal from '../../components/UI/Modal/Modal';
import NewPost from '../NewPost/NewPost';

class Posts extends Component {
    state = {
        posts: [],
        addingNewPost: false
    }

    componentDidMount() { // later replace this with didUpdate cause needs to re-render when ajax POST completes
        $.ajax({
            url: 'https://music-blog-app.firebaseio.com/users/user/posts.json',
            success: (response) => {
                //console.log(response); // object of objects
                // converting to array of objects
                if(response) { // if response isn't empty
                    const responseArray = Object.keys(response).map(i => response[i]);
                    this.setState({
                        posts: responseArray
                    });
                }
            }
            //error
        });
    }

    addingNewPostHandler = () => {
        this.setState({addingNewPost: true});
    }

    cancelNewPostHandler = () => {
        this.setState({addingNewPost: false});
    }

    sharedNewPostHandler = (caption, embedSrcLink) => {

        var newPostToAdd = {
            caption: caption,
            embedSrcLink: embedSrcLink
        }

        // var postsToUpdate = this.state.posts.slice();
        let postsToUpdate;
        if(this.state.posts) { // when there's no posts in database
            postsToUpdate = this.state.posts.slice();
        }
        postsToUpdate.push(newPostToAdd);

        $.ajax({
            type: 'POST',
            url: 'https://music-blog-app.firebaseio.com/users/user/posts.json',
            data: JSON.stringify(newPostToAdd),
            success: (response) => {
                // console.log(response);
                this.setState(prevState =>({
                    addingNewPost: false,
                    posts: [...this.state.posts, newPostToAdd]
                })); 
            } 
            // error
        });
    }

    render() {
        var render = <div>loading...</div>;

        if(this.state.posts.length === 0) {
            render = <p>You haven't shared any music with your friends. What are you waiting for?</p>
        } else {
            // console.log(this.state.posts); // Posts fetched from database
            render = (this.state.posts.map((post, index) => { return <Post key={index} caption={post.caption} embedSrcLink={post.embedSrcLink} />}))
        }

        return (
            <Aux>
                <Modal styles="Modal" backdropStyles="backdrop" showModal={this.state.addingNewPost} modalClosed={this.cancelNewPostHandler}>
                    <NewPost 
                        showModal={this.state.addingNewPost}
                        sharedNewPost={this.sharedNewPostHandler} />
                </Modal>
                <ShareMusicMainButton
                    clicked={this.addingNewPostHandler} />

                <div className="container posts-container">
                    {render}
                </div>
            </Aux>
        ); 
    }
}

export default Posts;

/* <p>jsdhfjhd</p>
    {myPosts ? (myPosts.map((post, index) => {
        // console.log(post)
        return <Post key={post} caption={this.state.posts[index].caption} embedSrcLink={this.state.posts[index].embedSrcLink} />
    })) : <p>still waiting...</p>} */