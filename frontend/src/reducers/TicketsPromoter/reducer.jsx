import { CREATE_TICKETS_PROMOTER, READ_TICKETS_PROMOTER, UPDATE_TICKETS_PROMOTER, DELETE_TICKETS_PROMOTER, FETCH_TICKETS_PROMOTER } from './types'

const initialState = {
	items: [], 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case CREATE_TICKETS_PROMOTER: 
			return { 
				...state,
				item: action.payload
			};
		case READ_TICKETS_PROMOTER: 
			return { 
				...state,
				item: action.payload
			};
		case UPDATE_TICKETS_PROMOTER: 
			return { 
				...state,
				item: action.payload
			};
		case DELETE_TICKETS_PROMOTER: 
			return { 
				...state,
				item: action.payload
			};			
		case FETCH_TICKETS_PROMOTER: 
			return {
				...state,
				items: action.payload
			};
		default: 
			return state;
	}   
}