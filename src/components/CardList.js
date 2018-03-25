import React from 'react';
import Card from './Card';

const defaultProps = {
    restaurants: []
}

const CardList = ({restaurants, onClick}) => {

    const cardArray = restaurants.map((restaurant, i) => {
        return  <Card key={i} 
                      onClick={onClick} 
                      restaurant={restaurant}/>
    })
    
    return(
        <div>
            {cardArray}
        </div>
    );
}

CardList.defaultProps = defaultProps
export default CardList;