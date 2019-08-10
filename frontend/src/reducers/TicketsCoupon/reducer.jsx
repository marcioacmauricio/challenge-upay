import { CREATE_TICKETS_COUPON, READ_TICKETS_COUPON, UPDATE_TICKETS_COUPON, DELETE_TICKETS_COUPON, FETCH_TICKETS_COUPON } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_COUPON: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_COUPON: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_COUPON: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_COUPON: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_COUPON: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}