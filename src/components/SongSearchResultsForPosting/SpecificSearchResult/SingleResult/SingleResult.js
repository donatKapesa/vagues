import React from 'react';
import './SingleResult.css';

const SingleResult = (props) => {

    let images=props.item.images;
    let chosenImageURL = null;
    if(images && images[1]) { // here because it seems like initally, images is undefined and it throws an error. Use to fix problem I was encoutering in prev components
        // artists and singles like inMyFeelings have no imgaes
        chosenImageURL=images[1].url;
    } // else it's NULL
    
    let name = props.item.name;
    // let genres = props.genres; // ARRAY
    let imageURL = chosenImageURL;

    let embedSrcLink = 'https://open.spotify.com/embed/' + props.type + '/' + props.item.id;

    return(
        <div onClick={() => props.clickedResult(embedSrcLink)} className="result">
            <div className='result-pic-div'>
                <img className='result-pic' src={imageURL}></img>
            </div>
            <div className='result-artist'>
                {name}
            </div>
            <div className='display-name'>
                {/* embedSrc: {state.embedSrcLink} */}
            </div>
        </div>
    );
}

export default SingleResult;