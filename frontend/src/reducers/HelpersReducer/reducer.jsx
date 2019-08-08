import { FETCH_OPTIONS } from './types'

const initialState = {
	items: {}, 
	item: {}
};

export default function (state = initialState, action) {
	switch(action.type) {
		case FETCH_OPTIONS: 
			return { 
				...state,
				items: {...action.payload, params: action.params}
			};
		default: 
			return state;
	}   
}