import React, { Component } from 'react';
import './NewPost.css';
import SearchBar from '../../components/UI/SearchBar/SearchBar';
import Aux from '../../hoc/Aux/Aux';
import $ from 'jquery';
import queryString from 'query-string';
import SongSearchResultsForPosting from '../../components/SongSearchResultsForPosting/SongSearchResultsForPosting';

class NewPost extends Component {
    state = {
        caption: '',
        embedSrcLink: '',
        accessToken: 'BQDIrSOi9dv4ASLeTmFERCKU5iRBK2x5yXHosMUUBCe-jvKHwZ_RtxE9wugwClpBe_5xDg2rteVE6soJ3etJTFz50Kkx_47K1UGIEziwNdhuGGm-0OCMLhgk2p96g4yal0Ezu32eI54vgezGnnA',
        renderResults: null
    }

    // componentDidMount() {
    //     // getting the access token
    //     let parsed = queryString.parse(window.location.search);
    //     let accessToken = parsed.access_token

    //     this.setState({accessToken: accessToken}, () => console.log(this.state.accessToken));
    // }

    clickedResultHandler = (embedLink) => {
        this.setState({embedSrcLink: embedLink}, () => console.log(this.state.embedSrcLink));
    }
    
    onCaptionChangeHandler = (e) => {
        this.setState({
            caption: e.target.value
        }, () => console.log(this.state.caption));
    }

    onSearchChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
            console.log(this.state.search);
            $.ajax({
                url: 'https://api.spotify.com/v1/search',
                headers: {'Authorization' : 'Bearer ' + this.state.accessToken},
                data: {
                    q: this.state.search,
                    type: 'album,track,playlist,artist',
                    limit: 2
                },
                success: (response) => {
                    // console.log(response);
                    this.setState({searchResults: response}, () => {
                        // console.log(this.state.searchResults);
                        let renderResults = <SongSearchResultsForPosting searchResults={this.state.searchResults} clickedResult={this.clickedResultHandler} />
                        this.setState({renderResults: renderResults});
                    });
                }
            });
        });
    }

    onSubmitHandler = (e) => {
        console.log(this.state.embedSrcLink);
        this.props.sharedNewPost(this.state.caption, this.state.embedSrcLink);
    }

    render() {
        return (
            <Aux>
                <div className="card newPost-card text-center">
                    <div className="card-body">
                        <input 
                            name="caption"
                            id="caption" 
                            // value={this.state.caption} 
                            placeholder="What are you thinking?"
                            onChange={(e) => this.onCaptionChangeHandler(e)}></input>

                        <SearchBar
                            name="embedSrcLink"
                            id="embed-search-textarea" 
                            // value={this.state.embedSrcLink} 
                            placeholder="search music from spotify"
                            onChange={(e) => this.onSearchChangeHandler(e)} />
                        
                        <button onClick={(e) => this.onSubmitHandler(e)}>Share</button>
                    </div>
                    {this.state.renderResults}
                </div>
            </Aux>
        );
    }
}

export default NewPost;