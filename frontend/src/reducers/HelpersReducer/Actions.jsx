import { FETCH_OPTIONS } from './types'
const Url = 'http://localhost:8081' 

export const fetchOptions = (OptionsData) => dispatch => {
	fetch(Url + '/Helpers', {
		method : 'POST',
			headers : {
				'content-type': 'Application/json'
			},
			body: JSON.stringify(OptionsData)
		})
		.then(
			res => res.json()
		)
		.then(
			PayloadOptions => dispatch({
			type: FETCH_OPTIONS,
			payload: PayloadOptions,
			params: OptionsData
		})
	);
}