import { CREATE_TICKETS_EVENT, READ_TICKETS_EVENT, UPDATE_TICKETS_EVENT, DELETE_TICKETS_EVENT, FETCH_TICKETS_EVENT, ERROR_TICKETS_EVENT } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsEvent( TicketsEventData ) {
	return async (dispatch) => {
		let Resource = '/TicketsEvent/ShowItem/' + TicketsEventData.Id
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
				type: READ_TICKETS_EVENT,
				payload: PayloadOptions,
				params: TicketsEventData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_EVENT,
				payload: error,
				params: TicketsEventData
			})
		}
	}
}



export function createTicketsEvent( TicketsEventData ) {
	return async (dispatch) => {
		let Resource = '/TicketsEvent'
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
					body: JSON.stringify( TicketsEventData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_EVENT,
				payload: PayloadOptions,
				params: TicketsEventData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_EVENT,
				payload: error,
				params: TicketsEventData
			})
		}
	}
}



export function updateTicketsEvent( TicketsEventData ) {
	return async (dispatch) => {
		let Resource = '/TicketsEvent'
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
					body: JSON.stringify( TicketsEventData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_EVENT,
				payload: PayloadOptions,
				params: TicketsEventData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_EVENT,
				payload: error,
				params: TicketsEventData
			})
		}
	}
}

export function deleteTicketsEvent( TicketsEventData ) {
	return async (dispatch) => {
		let Resource = '/TicketsEvent'
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
					body: JSON.stringify( TicketsEventData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_EVENT,
				payload: PayloadOptions,
				params: TicketsEventData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_EVENT,
				payload: error,
				params: TicketsEventData
			})
		}
	}
}


export function fetchTicketsEvent(TicketsEventData, IdPredesc) {
	let Resource = '/TicketsEvent/ListItems/TicketsPromoter/' + IdPredesc
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
					body: JSON.stringify(TicketsEventData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_EVENT,
				payload: PayloadOptions,
				params: TicketsEventData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_EVENT,
				payload: error,
				params: TicketsEventData
			})
		}
	}
}