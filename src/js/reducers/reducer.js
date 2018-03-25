import {
    FETCH_DATA_ACTION, 
    PANEL_CLICK_ENTER_ACTION,
    PANEL_CLICK_EXIT_ACTION
} from "./types.js"

const initialState = {
    restaurant: [],
    isPanelOpen: false,
    selectedRestuarants: {
        restaurantName: '',
        categoryType: '',
        location: '',
        phone : '',
        twitterHandle : '' 
    }
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_ACTION:
            return {
                ...state,
                restaurants: action.data
            }
        case PANEL_CLICK_ENTER_ACTION:
             return {
                ...state,
                isPanelOpen: !action.data.isPanelOpen,
                selectedRestuarants: {
                    restaurantName: action.data.restaurant.name,
                    categoryType: action.data.restaurant.category,
                    location: action.data.restaurant.location,
                    phone : action.data.restaurant.contact ? action.data.restaurant.contact.formattedPhone : null,
                    twitterHandle : action.data.restaurant.contact ? action.data.restaurant.contact.twitter: null
                }
            }
         case PANEL_CLICK_EXIT_ACTION:
            return {
                ...state,
                isPanelOpen: !action.data,
                selectedRestuarants: initialState.selectedRestuarants
            }
        default :
            return state;
    }

};
export default rootReducer;