import { CREATE_TICKETS_EVENT, READ_TICKETS_EVENT, UPDATE_TICKETS_EVENT, DELETE_TICKETS_EVENT, FETCH_TICKETS_EVENT } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_EVENT: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_EVENT: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_EVENT: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_EVENT: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_EVENT: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}