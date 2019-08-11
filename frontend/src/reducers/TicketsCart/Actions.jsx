import { CREATE_TICKETS_CART, READ_TICKETS_CART, UPDATE_TICKETS_CART, DELETE_TICKETS_CART, FETCH_TICKETS_CART, ERROR_TICKETS_CART } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsCart( TicketsCartData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCart/ShowItem/' + TicketsCartData.Id
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
				type: READ_TICKETS_CART,
				payload: PayloadOptions,
				params: TicketsCartData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART,
				payload: error,
				params: TicketsCartData
			})
		}
	}
}



export function createTicketsCart( TicketsCartData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCart'
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
					body: JSON.stringify( TicketsCartData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_CART,
				payload: PayloadOptions,
				params: TicketsCartData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART,
				payload: error,
				params: TicketsCartData
			})
		}
	}
}



export function updateTicketsCart( TicketsCartData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCart'
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
					body: JSON.stringify( TicketsCartData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_CART,
				payload: PayloadOptions,
				params: TicketsCartData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART,
				payload: error,
				params: TicketsCartData
			})
		}
	}
}

export function deleteTicketsCart( TicketsCartData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCart'
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
					body: JSON.stringify( TicketsCartData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_CART,
				payload: PayloadOptions,
				params: TicketsCartData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART,
				payload: error,
				params: TicketsCartData
			})
		}
	}
}


export function fetchTicketsCart(TicketsCartData, IdPredesc) {
	let Resource = '/TicketsCart/ListItems/MasterUser/' + IdPredesc
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
					body: JSON.stringify(TicketsCartData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_CART,
				payload: PayloadOptions,
				params: TicketsCartData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_CART,
				payload: error,
				params: TicketsCartData
			})
		}
	}
}