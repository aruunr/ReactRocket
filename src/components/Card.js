import React from 'react';

const Card = ({onClick, restaurant}) => {
    return (
        <div className='dib br0 pa0 ma0 bw0 container'>
            <img 
                className ='image' 
                alt='photo' 
                onClick={onClick.bind(null, restaurant)} 
                src={`${restaurant.backgroundImageURL}`}/>
            <div className = 'overlay'>
            <h2>{restaurant.name}</h2>
            <h3>{restaurant.category}</h3>
            </div>
        </div>
    );
}

export default Card;