import React from 'react';
import SlidingPane from 'react-sliding-pane';
import GoogleMaps from './GoogleMaps';

const CustomSlidingPane = ({isPanelOpen, onRequestCloseAction, selectedRestuarant}) => {

const address1 = (selectedRestuarant.location.address!=null ?selectedRestuarant.location.address :'');
const address2 = (selectedRestuarant.location.city!=null ? selectedRestuarant.location.city :'') + ", "
                .concat(selectedRestuarant.location.state!=null ? selectedRestuarant.location.state : '')
                .concat(" ").concat(selectedRestuarant.location.postalCode!=null ? selectedRestuarant.location.postalCode : '');
const twitter = (selectedRestuarant.twitterHandle!=null ? "@"+ `${selectedRestuarant.twitterHandle}` : '')

return (
    <div>
        <SlidingPane width = '100%' maxWidth = '400px'
       
                isOpen={isPanelOpen}
                title= {'Lunch Tyme'}
                onRequestClose = {onRequestCloseAction}>
         <div>
            <GoogleMaps selectedRestuarant={selectedRestuarant}/>
         </div>   
         <div className = 'detailBlock'>
            <h2 className='detailText'>{selectedRestuarant.restaurantName}</h2>
            <h3 className='detailSubText'>{selectedRestuarant.categoryType}</h3>
         </div>
         <div className = 'detailSubText'>
            <p className = 'detailInfo'>{address1}</p>
            <p className = 'detailInfo'>{address2}</p>
            <p className = 'detailInfo'>{selectedRestuarant.phone}</p>
            <p className = 'detailInfo'>{twitter}</p>
         </div>  
        </SlidingPane>
    </div>
);

}

export default CustomSlidingPane;