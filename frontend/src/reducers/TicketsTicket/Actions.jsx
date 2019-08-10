import { CREATE_TICKETS_TICKET, READ_TICKETS_TICKET, UPDATE_TICKETS_TICKET, DELETE_TICKETS_TICKET, FETCH_TICKETS_TICKET, ERROR_TICKETS_TICKET } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsTicket( TicketsTicketData ) {
	return async (dispatch) => {
		let Resource = '/TicketsTicket/ShowItem/' + TicketsTicketData.Id
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
				type: READ_TICKETS_TICKET,
				payload: PayloadOptions,
				params: TicketsTicketData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_TICKET,
				payload: error,
				params: TicketsTicketData
			})
		}
	}
}



export function createTicketsTicket( TicketsTicketData ) {
	return async (dispatch) => {
		let Resource = '/TicketsTicket'
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
					body: JSON.stringify( TicketsTicketData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_TICKET,
				payload: PayloadOptions,
				params: TicketsTicketData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_TICKET,
				payload: error,
				params: TicketsTicketData
			})
		}
	}
}



export function updateTicketsTicket( TicketsTicketData ) {
	return async (dispatch) => {
		let Resource = '/TicketsTicket'
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
					body: JSON.stringify( TicketsTicketData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_TICKET,
				payload: PayloadOptions,
				params: TicketsTicketData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_TICKET,
				payload: error,
				params: TicketsTicketData
			})
		}
	}
}

export function deleteTicketsTicket( TicketsTicketData ) {
	return async (dispatch) => {
		let Resource = '/TicketsTicket'
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
					body: JSON.stringify( TicketsTicketData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_TICKET,
				payload: PayloadOptions,
				params: TicketsTicketData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_TICKET,
				payload: error,
				params: TicketsTicketData
			})
		}
	}
}


export function fetchTicketsTicket(TicketsTicketData, IdPredesc) {
	let Resource = '/TicketsTicket/ListItems/TicketsPromoter/' + IdPredesc
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
					body: JSON.stringify(TicketsTicketData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_TICKET,
				payload: PayloadOptions,
				params: TicketsTicketData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_TICKET,
				payload: error,
				params: TicketsTicketData
			})
		}
	}
}