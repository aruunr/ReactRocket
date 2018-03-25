import {
    FETCH_DATA_ACTION, 
    PANEL_CLICK_ENTER_ACTION,
    PANEL_CLICK_EXIT_ACTION
} from "./types.js"

export const fetchData = () => (dispatch) => {
    return fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
        .then(response => response.json())
        .then(restaurants => {
            dispatch({ type: FETCH_DATA_ACTION, data: restaurants.restaurants});
        }).catch((error) => {
        //need to handle error
        console.log('error');
   });        
}

export const panelEnterClick = (isPanelOpen, restaurant) => {
    return dispatch => { 
        dispatch({ type: PANEL_CLICK_ENTER_ACTION, data: {isPanelOpen, restaurant}})
    };   
} 

export const panelExitClick = (isPanelOpen) => {
    return dispatch => { 
        dispatch({ type: PANEL_CLICK_EXIT_ACTION, data: isPanelOpen})
    };   
} 