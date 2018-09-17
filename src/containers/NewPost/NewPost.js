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
        accessToken: 'BQC45vWT3ngfnY3IPNwLmL4EqJIiGtcF6qYEGLOlws0jdsVvLW-oWYYtseXMtDRugWym08eF6N67I-OaxP3-YaJIdOIsJFpjIoT5fwPDfAog1p-eQV60BPG36SojcwbqrMLb5CwAPVMuAk-KINha2SgaSqEo5A',
        renderResults: null,
        selectedResult: null,
    }

    // componentDidMount() {
    //     // getting the access token
    //     let parsed = queryString.parse(window.location.search);
    //     let accessToken = parsed.access_token

    //     this.setState({accessToken: accessToken}, () => console.log(this.state.accessToken));
    // }

    clickedResultHandler = (embedLink, event) => {
        this.setState({embedSrcLink: embedLink}); // I forgot why we have to call console.log like this. () => ...
        const resultDiv = event.target.closest(".result"); // alternative, can count number of divs to go up by
        // sets current active-result in state
        this.setState({selectedResult: resultDiv}, () => {

            var resultsList = document.getElementsByClassName('result');
            // console.log(this.state.selectedResult);

            // update style
            // THERE MUST BE A BETTER WAY LIKE IN MY MCQ PRACTICE
            for(let index = 0; index < resultsList.length; index++) {
                resultsList[index].classList.remove('active-result');
            }
            resultDiv.classList.add('active-result');
        });

    }
    
    onCaptionChangeHandler = (e) => {
        this.setState({
            caption: e.target.value
        });
    }

    onSearchChangeHandler = (e) => {
        this.setState({
            search: e.target.value
        }, () => {
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
                        let renderResults = <SongSearchResultsForPosting selectedResult={this.state.selectedResult} searchResults={this.state.searchResults} clickedResult={this.clickedResultHandler} />
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
                    {/* search results */}
                    {this.state.renderResults}
                </div>
            </Aux>
        );
    }
}

export default NewPost;