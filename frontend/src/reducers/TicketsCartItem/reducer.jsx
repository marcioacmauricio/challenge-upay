import { CREATE_TICKETS_CART_ITEM, READ_TICKETS_CART_ITEM, UPDATE_TICKETS_CART_ITEM, DELETE_TICKETS_CART_ITEM, FETCH_TICKETS_CART_ITEM } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_CART_ITEM: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_CART_ITEM: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_CART_ITEM: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_CART_ITEM: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_CART_ITEM: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}