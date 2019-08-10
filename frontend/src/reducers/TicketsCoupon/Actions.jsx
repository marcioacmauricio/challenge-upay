import { CREATE_TICKETS_COUPON, READ_TICKETS_COUPON, UPDATE_TICKETS_COUPON, DELETE_TICKETS_COUPON, FETCH_TICKETS_COUPON, ERROR_TICKETS_COUPON } from './types'
import getBearer from 'auth/getBearer'
import { Url } from 'reducers/getUrl'


export function readTicketsCoupon( TicketsCouponData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCoupon/ShowItem/' + TicketsCouponData.Id
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
				type: READ_TICKETS_COUPON,
				payload: PayloadOptions,
				params: TicketsCouponData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_COUPON,
				payload: error,
				params: TicketsCouponData
			})
		}
	}
}



export function createTicketsCoupon( TicketsCouponData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCoupon'
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
					body: JSON.stringify( TicketsCouponData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: CREATE_TICKETS_COUPON,
				payload: PayloadOptions,
				params: TicketsCouponData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_COUPON,
				payload: error,
				params: TicketsCouponData
			})
		}
	}
}



export function updateTicketsCoupon( TicketsCouponData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCoupon'
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
					body: JSON.stringify( TicketsCouponData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: UPDATE_TICKETS_COUPON,
				payload: PayloadOptions,
				params: TicketsCouponData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_COUPON,
				payload: error,
				params: TicketsCouponData
			})
		}
	}
}

export function deleteTicketsCoupon( TicketsCouponData ) {
	return async (dispatch) => {
		let Resource = '/TicketsCoupon'
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
					body: JSON.stringify( TicketsCouponData )
				}
			)	
			const PayloadOptions = await result.json()
			dispatch({
				type: DELETE_TICKETS_COUPON,
				payload: PayloadOptions,
				params: TicketsCouponData
			})

		} catch ( error ) {		
			dispatch({
				type: ERROR_TICKETS_COUPON,
				payload: error,
				params: TicketsCouponData
			})
		}
	}
}


export function fetchTicketsCoupon(TicketsCouponData, IdPredesc) {
	let Resource = '/TicketsCoupon/ListItems/TicketsPromoter/' + IdPredesc
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
					body: JSON.stringify(TicketsCouponData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_TICKETS_COUPON,
				payload: PayloadOptions,
				params: TicketsCouponData
			})
		} catch (error) {		
			dispatch({
				type: ERROR_TICKETS_COUPON,
				payload: error,
				params: TicketsCouponData
			})
		}
	}
}