import { CREATE_TICKETS_CART, READ_TICKETS_CART, UPDATE_TICKETS_CART, DELETE_TICKETS_CART, FETCH_TICKETS_CART } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_CART: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_CART: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_CART: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_CART: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_CART: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}