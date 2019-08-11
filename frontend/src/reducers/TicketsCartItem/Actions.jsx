import { CREATE_TICKETS_CART_ITEM, READ_TICKETS_CART_ITEM, UPDATE_TICKETS_CART_ITEM, DELETE_TICKETS_CART_ITEM, FETCH_TICKETS_CART_ITEM, ERROR_TICKETS_CART_ITEM } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsCartItem( TicketsCartItemData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCartItem/ShowItem/' + TicketsCartItemData.Id
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
				type: READ_TICKETS_CART_ITEM,
				payload: PayloadOptions,
				params: TicketsCartItemData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART_ITEM,
				payload: error,
				params: TicketsCartItemData
			})
		}
	}
}



export function createTicketsCartItem( TicketsCartItemData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCartItem'
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
					body: JSON.stringify( TicketsCartItemData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_CART_ITEM,
				payload: PayloadOptions,
				params: TicketsCartItemData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART_ITEM,
				payload: error,
				params: TicketsCartItemData
			})
		}
	}
}



export function updateTicketsCartItem( TicketsCartItemData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCartItem'
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
					body: JSON.stringify( TicketsCartItemData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_CART_ITEM,
				payload: PayloadOptions,
				params: TicketsCartItemData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART_ITEM,
				payload: error,
				params: TicketsCartItemData
			})
		}
	}
}

export function deleteTicketsCartItem( TicketsCartItemData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCartItem'
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
					body: JSON.stringify( TicketsCartItemData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_CART_ITEM,
				payload: PayloadOptions,
				params: TicketsCartItemData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_CART_ITEM,
				payload: error,
				params: TicketsCartItemData
			})
		}
	}
}


export function fetchTicketsCartItem(TicketsCartItemData, IdPredesc) {
	let Resource = '/TicketsCartItem/ListItems/TicketsCart/' + IdPredesc
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
					body: JSON.stringify(TicketsCartItemData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_CART_ITEM,
				payload: PayloadOptions,
				params: TicketsCartItemData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_CART_ITEM,
				payload: error,
				params: TicketsCartItemData
			})
		}
	}
}