import { CREATE_TICKETS_TICKET, READ_TICKETS_TICKET, UPDATE_TICKETS_TICKET, DELETE_TICKETS_TICKET, FETCH_TICKETS_TICKET } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_TICKET: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_TICKET: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_TICKET: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_TICKET: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_TICKET: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}