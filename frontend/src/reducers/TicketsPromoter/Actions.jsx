import { CREATE_TICKETS_PROMOTER, READ_TICKETS_PROMOTER, UPDATE_TICKETS_PROMOTER, DELETE_TICKETS_PROMOTER, FETCH_TICKETS_PROMOTER, ERROR_TICKETS_PROMOTER } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsPromoter( TicketsPromoterData ) {
	return async (dispatch) => {
		let Resource = '/TicketsPromoter/ShowItem/' + TicketsPromoterData.Id
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'GET',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					}
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: READ_TICKETS_PROMOTER,
				payload: PayloadOptions,
				params: TicketsPromoterData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_PROMOTER,
				payload: error,
				params: TicketsPromoterData
			})
		}
	}
}



export function createTicketsPromoter( TicketsPromoterData ) {
	return async (dispatch) => {
		let Resource = '/TicketsPromoter'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'PUT',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( TicketsPromoterData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_PROMOTER,
				payload: PayloadOptions,
				params: TicketsPromoterData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_PROMOTER,
				payload: error,
				params: TicketsPromoterData
			})
		}
	}
}



export function updateTicketsPromoter( TicketsPromoterData ) {
	return async (dispatch) => {
		let Resource = '/TicketsPromoter'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'PATCH',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( TicketsPromoterData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_PROMOTER,
				payload: PayloadOptions,
				params: TicketsPromoterData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_PROMOTER,
				payload: error,
				params: TicketsPromoterData
			})
		}
	}
}

export function deleteTicketsPromoter( TicketsPromoterData ) {
	return async (dispatch) => {
		let Resource = '/TicketsPromoter'
		let Bearer = await getBearer()
		try {
			const result = await fetch (
				Url + Resource, 
				{ 
					method : 'DELETE',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify( TicketsPromoterData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_PROMOTER,
				payload: PayloadOptions,
				params: TicketsPromoterData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_PROMOTER,
				payload: error,
				params: TicketsPromoterData
			})
		}
	}
}


export function fetchTicketsPromoter( TicketsPromoterData ) {
	let Resource = '/TicketsPromoter/ListItems'
	return async (dispatch) => {
		try {
			let Bearer = await getBearer()
			const result = await fetch(
				Url + Resource, 
				{ 
					method : 'POST',
					headers : {
						'Content-Type': 'Application/json',
						'Authorization': 'Bearer ' + Bearer
					},
					body: JSON.stringify(TicketsPromoterData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_PROMOTER,
				payload: PayloadOptions,
				params: TicketsPromoterData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_PROMOTER,
				payload: error,
				params: TicketsPromoterData
			})
		}
	}
}