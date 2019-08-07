import React from 'react';
import './SingleResult.css';

const SingleResult = (props) => {
    let name = props.item.name;
    let embedCodeSource = 'https://open.spotify.com/embed/' + props.type + '/' + props.item.id;
    let images;
    let imgURL;
    let image = <div className="music-missing-image"><i className="fas fa-music fa-8x"></i></div>

    if(props.type === 'track') {
        images = props.item.album.images;
    } else {
        images = props.item.images;
    }
    if(images && images[1]) { // here because it seems like initally, images is undefined and it throws an error. Use to fix problem I was encoutering in prev components
        imgURL=images[1].url;
        image = <img alt='song' className='result-pic' src={imgURL}></img>
    } // else it's NULL

    return(
        <div onClick={(e) => props.clickedResult(embedCodeSource, e)} className='result'>
            {/* {console.log(target)} */}
            <div className='result-pic-div'>
                {image}
            </div>
            <div className='result-artist'>
                {name}
            </div>
            <div className='display-name'>
                {/* embedSrc: {state.embedCodeSource} */}
            </div>
        </div>
    );
}

export default SingleResult;

// import React, { Component } from 'react';
// import './SingleResult.css';

// class SingleResult extends Component {
    
//     componentDidUpdate() {
//         console.log(this.props.selectedResult);
//     }

//     render() {

//         let images=this.props.item.images;
//         let imgURL = null;
//         if(images && images[1]) { // here because it seems like initally, images is undefined and it throws an error. Use to fix problem I was encoutering in prev components
//             // artists and singles like inMyFeelings have no imgaes
//             imgURL=images[1].url;
//         } // else it's NULL
        
//         let name = this.props.item.name;
//         // let genres = this.props.genres; // ARRAY
//         let imageURL = imgURL;
    
//         let embedCodeSource = 'https://open.spotify.com/embed/' + this.props.type + '/' + this.props.item.id;
    
//         let className = 'result ';

//         return (
//             <div onClick={(e) => this.props.clickedResult(embedCodeSource, e)} className={className}>
//                 <div className='result-pic-div'>
//                     <img alt='song' className='result-pic' src={imageURL}></img>
//                 </div>
//                 <div className='result-artist'>
//                     {name}
//                 </div>
//                 <div className='display-name'>
//                     {/* embedSrc: {state.embedCodeSource} */}
//                 </div>
//             </div>
//         );
//     }
// }

// export default SingleResult;