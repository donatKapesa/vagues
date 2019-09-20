import React, { Component } from "react";
import "./NewPost.css";
import SearchBar from "../../components/UI/SearchBar/SearchBar";
import Aux from "../../hoc/Aux/Aux";
import $ from "jquery";
import queryString from "query-string";
import SongSearchResultsForPosting from "../../components/SongSearchResultsForPosting/SongSearchResultsForPosting";

class NewPost extends Component {
  state = {
    caption: "",
    embedCodeSource: "",
    access_token: null,
    renderResults: null,
    selectedResult: null
  };

  componentDidMount = () => {
    console.log("ComponentDidMount - NewPost.js");
    console.log(this.props.access_token);
    this.setState({
      access_token: this.props.access_token
    })
  }

  /*  When user clicks on a search result */
  clickedResultHandler = (embedLink, event) => {
    this.setState({ embedCodeSource: embedLink });
    const resultDiv = event.target.closest(".result");
    this.setState({ selectedResult: resultDiv }, () => {
      var resultsList = document.getElementsByClassName("result");
      // console.log(this.state.selectedResult);

      // update style
      // THERE MUST BE A BETTER WAY LIKE IN MY MCQ PRACTICE
      for (let index = 0; index < resultsList.length; index++) {
        resultsList[index].classList.remove("active-result");
      }
      resultDiv.classList.add("active-result");
    });
  };

  onCaptionChangedHandler = e => {
    this.setState({
      caption: e.target.value
    });
  };

  onSearchQueryChangedHandler = e => {
    this.setState(
      {
        search: e.target.value
      },
      () => {
        $.ajax({
          url: "https://api.spotify.com/v1/search",
          headers: { Authorization: "Bearer " + this.state.access_token },
          data: {
            q: this.state.search,
            type: "album,track,playlist,artist",
            limit: 2
          },
          success: response => {
            this.setState({ searchResults: response }, () => {
              let renderResults = (
                <div>
                  <SongSearchResultsForPosting
                    selectedResult={this.state.selectedResult}
                    searchResults={this.state.searchResults}
                    clickedResult={this.clickedResultHandler}
                  />
                  <div style={{padding: "0 8px"}} className="link">view more</div>
                </div>
              );
              this.setState({ renderResults: renderResults });
            });
          },
          error: error => {
            console.log(error);
          }
        });
      }
    );
  };

  onSubmitHandler = e => {
    console.log(this.state.embedCodeSource);
    this.props.sharedNewPost(this.state.caption, this.state.embedCodeSource);
  };

  render() {
    const renderForm = (
      <div className="card newPost-card">
        <div className="card-body">
          <input
            name="caption"
            id="caption"
            placeholder="What are you vibing to?"
            onChange={e => this.onCaptionChangedHandler(e)}
          />

          <SearchBar
            name="search-music-query"
            id="search-bar-music"
            placeholder="search music from spotify"
            onChange={e => this.onSearchQueryChangedHandler(e)}
          />

          <button onClick={e => this.onSubmitHandler(e)}>Share</button>
        </div>
        {this.state.renderResults}
      </div>
    );
    return <Aux>{renderForm}</Aux>;
  }
}

export default NewPost;
