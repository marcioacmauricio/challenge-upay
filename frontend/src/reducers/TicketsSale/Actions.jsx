import { CREATE_TICKETS_SALE, READ_TICKETS_SALE, UPDATE_TICKETS_SALE, DELETE_TICKETS_SALE, FETCH_TICKETS_SALE, ERROR_TICKETS_SALE } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsSale( TicketsSaleData ) {
	return async (dispatch) => {
		let Resource = '/TicketsSale/ShowItem/' + TicketsSaleData.Id
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
				type: READ_TICKETS_SALE,
				payload: PayloadOptions,
				params: TicketsSaleData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_SALE,
				payload: error,
				params: TicketsSaleData
			})
		}
	}
}



export function createTicketsSale( TicketsSaleData ) {
	return async (dispatch) => {
		let Resource = '/TicketsSale'
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
					body: JSON.stringify( TicketsSaleData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_SALE,
				payload: PayloadOptions,
				params: TicketsSaleData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_SALE,
				payload: error,
				params: TicketsSaleData
			})
		}
	}
}



export function updateTicketsSale( TicketsSaleData ) {
	return async (dispatch) => {
		let Resource = '/TicketsSale'
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
					body: JSON.stringify( TicketsSaleData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_SALE,
				payload: PayloadOptions,
				params: TicketsSaleData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_SALE,
				payload: error,
				params: TicketsSaleData
			})
		}
	}
}

export function deleteTicketsSale( TicketsSaleData ) {
	return async (dispatch) => {
		let Resource = '/TicketsSale'
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
					body: JSON.stringify( TicketsSaleData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_SALE,
				payload: PayloadOptions,
				params: TicketsSaleData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_SALE,
				payload: error,
				params: TicketsSaleData
			})
		}
	}
}


export function fetchTicketsSale(TicketsSaleData, IdPredesc) {
	let Resource = '/TicketsSale/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(TicketsSaleData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_SALE,
				payload: PayloadOptions,
				params: TicketsSaleData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_SALE,
				payload: error,
				params: TicketsSaleData
			})
		}
	}
}