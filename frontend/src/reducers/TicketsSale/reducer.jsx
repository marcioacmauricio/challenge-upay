import { CREATE_TICKETS_SALE, READ_TICKETS_SALE, UPDATE_TICKETS_SALE, DELETE_TICKETS_SALE, FETCH_TICKETS_SALE } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_SALE: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_SALE: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_SALE: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_SALE: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_SALE: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}