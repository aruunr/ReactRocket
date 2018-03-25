import React from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

const GoogleMaps = (props) => {
    
const style = {
  width: '100%',
  height: '180px'
}
 return (
        <div style={style}>
        <Map
          google={props.google}
          style={style}
          center={{
            lat: props.selectedRestuarant.location.lat,
            lng: props.selectedRestuarant.location.lng
          }}
          zoom={14}
        >
        <Marker
        position={{lat: props.selectedRestuarant.location.lat, lng: props.selectedRestuarant.location.lng}} />    
      </Map>        
     </div>
    );
  }

export default GoogleApiWrapper({
  apiKey: ('AIzaSyA1vqDvpBO6krACbCftL5h0JXpI3sdUCyQ') //need to use as process.env variable
})(GoogleMaps)