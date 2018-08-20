import React from 'react';
import SingleResult from './SingleResult/SingleResult';
import './SpecificSearchResult.css';

const specificSearchResfult = (props) => {
    let items = props.specificSearchResults.items;

    let singleResult = [];

    if(items) {
        items.map((element, index) => { // improve this piece of code like in Posts
            return singleResult[index] = <SingleResult key={index} type={props.type} item={element} clickedResult={props.clickedResult} />
        })
    } else (
        console.log('no items passed')
    )
    return (
        <div className='specificResults'>
            <p>{props.type}</p>
            <div className='spotify-items'>
                {singleResult}
            </div>
        </div>
    );
}

export default specificSearchResfult;