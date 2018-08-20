import React from 'react';
import SpecificSearchResult from './SpecificSearchResult/SpecificSearchResult';

const SongSearchResultsForPosting = (props) => {

    // console.log(props);

    let tracks;
    let albums;
    // let playlists;
    let artists;

    if(props.searchResults) {
        tracks = props.searchResults.tracks;
        albums = props.searchResults.albums;
        // playlists = props.searchResults.playlists;
        artists = props.searchResults.artists;
    } else (
        console.log('nothing as props')
    )
    // console.log(tracks);

    return(
        <div style={{overflow: 'scroll', display: 'flex'}} className="searchResults">
            <SpecificSearchResult key='1' specificSearchResults={tracks} type='track' clickedResult={props.clickedResult} />
            <SpecificSearchResult key='2' specificSearchResults={albums} type='album' clickedResult={props.clickedResult} />
            {/* <SpecificSearchResult key='3' specificSearchResults={playlists} type='playlist' /> */}
            <SpecificSearchResult key='3' specificSearchResults={artists} type='artist' clickedResult={props.clickedResult} />
        </div>
    )
}
export default SongSearchResultsForPosting;

/* 
Maybe use diff components for diff types.
want to display diff info depending on which type is called

artists have no images as well
*/