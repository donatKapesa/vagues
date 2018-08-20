import React, { Component } from 'react';
import Post from './Post/Post';
import $ from 'jquery';

class Posts extends Component {
    state = {
        posts: null,
        // addingNewPost: false
    }

    componentDidMount() {
        $.ajax({
            url: 'https://music-blog-app.firebaseio.com/users/user/posts.json',
            success: (response) => {
                //console.log(response); // object of objects
                // converting to array of objects
                const responseArray = Object.keys(response).map(i => response[i]);
                //console.log(responseArray);
                this.setState({
                    posts: responseArray
                })
                // console.log(this.state.posts);
            }
            //error
        });
    }

    // addingNewPostHandler = () => {
    //     this.setState({addingNewPost: true});
    // }

    // cancelNewPostHandler = () => {
    //     this.setState({addingNewPost: false});
    // }

    sharedNewPostHandler = (caption, embedSrcLink) => {

        var newPostToAdd = {
            caption: caption,
            embedSrcLink: embedSrcLink
        }

        var postsToUpdate = this.state.posts.slice();
        postsToUpdate.push(newPostToAdd);

        $.ajax({
            type: 'POST',
            url: 'https://music-blog-app.firebaseio.com/users/user/posts.json',
            success: (response) => {
                console.log(response);
                this.setState(prevState =>({
                    addingNewPost: false,
                    posts: [...this.state.posts, newPostToAdd]
                })); 
            } 
            // error
        });
    }

    render() {

        // let postsToRender = [];

        // if(!this.state.posts) {
        //     postsToRender = <h1>Nothing to show here !</h1>
        // } else {
        //     this.state.posts.map((post, index) => {
        //         return postsToRender[index] = <Post
        //                             // key={this.state.posts[index].id}
        //                             key={index}
        //                             caption={this.state.posts[index].caption}
        //                             embedSrcLink={this.state.posts[index].embedSrcLink} />
        //     });
        // }
        var postsToRender = <p>Nothing here</p>

        console.log(this.state.posts);
        if(this.state.posts) {
            var myPosts = this.state.posts;
        }
        console.log(myPosts);
        // if(this.state.posts) {
        //     postsToRender = (
        //         this.state.posts.map((post, index) => <Post key={index} caption={this.state.posts[index].caption} embedSrcLink={this.state.posts[index].embedSrcLink} />)
        //     );
        // }
        let render;
        if(myPosts) {
            console.log(this.state.posts);
            render = (myPosts.map((post, index) => { return <Post key={index} caption={post.caption} embedSrcLink={post.embedSrcLink} />}))
        } else {
            render = <p>still waiting...</p>
        }

        return (
            <div className="container posts-container">
                {/* <p>jsdhfjhd</p>
                {myPosts ? (myPosts.map((post, index) => {
                    // console.log(post)
                    return <Post key={post} caption={this.state.posts[index].caption} embedSrcLink={this.state.posts[index].embedSrcLink} />
                })) : <p>still waiting...</p>} */}
                {render}
            </div>
        ); 
    }
}

export default Posts;