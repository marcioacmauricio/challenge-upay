import { FETCH_OPTIONS, ADD_EVENT, GET_EVENTS, PAY_TICKET, ERROR } from './types';
import getBearer from 'auth/getBearer';
import { Url } from 'reducers/getUrl';


export function fetchOptions( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: FETCH_OPTIONS,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}

export function addEvent( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: ADD_EVENT,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}

export function getEvents( OptionsData ) {
	let Resource = '/Helpers'
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
					body: JSON.stringify(OptionsData)
				}
			)		
			const PayloadOptions = await result.json()
			dispatch({
				type: GET_EVENTS,
				payload: PayloadOptions,
				params: OptionsData
			})
		} catch (error) {		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}


export function payTicket( OptionsData ) {
	let UrlApi = 'https://api.zoop.ws/v1/marketplaces/'
	let MarketplaceId = "9e55e10ff08746daaee031e207935494";
	return async (dispatch) => {
		let Status = true
		let headers = {
			'accept': 'application/json',
			'content-type': 'application/json',
			'authorization': 'Basic enBrX3Rlc3RfcHhmUGtDQld4WVd6eUtXUjN0b0ZXM0ZkOnpwa190ZXN0X3B4ZlBrQ0JXeFlXenlLV1IzdG9GVzNGZA=='
		}
		let BuyerId = "5f891b3920e44992ad826f59b689e0f8"
		let SelerId = "2e2ce9fcc0454ec290a6c90fc66624e7"
		try {
			// create token para pagamento
			let Url = UrlApi + MarketplaceId + '/cards/tokens'

			let DataSend = {
				holder_name: "Marcio Maurício",
				expiration_month: "03",
				expiration_year: "2018",
				security_code: "123",
				card_number: "5201561050024014"
			}

			let result = await fetch(
				Url, 
				{ 
					method : 'POST',
					headers ,
					body: JSON.stringify(DataSend)
				}
			)
			let TokenOptions = await result.json()
			let TokenId = TokenOptions.id

			debugger
			// realizando a tranzação

			Url = "https://api.zoop.ws/v1/marketplaces/" + MarketplaceId + "/transactions"

			DataSend = {
				amount: OptionsData.Total,
				currency: "BRL",
				description: "venda",
				on_behalf_of: SelerId,
				token: TokenId,
				payment_type: "credit",
				installment_plan: {
					mode: "interest_free",
					number_installments: 1
				}
			}
			result = await fetch(
				Url, 
				{ 
					method : 'POST',
					headers ,
					body: JSON.stringify(DataSend)
				}
			)
			let TransactionsData = await result.json()
			dispatch({
				type: PAY_TICKET,
				payload: TransactionsData,
				params: OptionsData
			})
		} catch (error) {
			debugger		
			dispatch({
				type: ERROR,
				payload: error,
				params: OptionsData
			})
		}
	}
}