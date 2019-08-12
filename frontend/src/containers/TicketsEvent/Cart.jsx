import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, Badge } from 'reactstrap';
import money from 'util/money'
import { If, Then, Else } from 'react-if'
const Cart = (props) => {
	let { Items, Coupon } = props.FullCart
	if (Coupon === undefined){
		Coupon = {}
	}
	let ListItems = []

	if (typeof Items === 'object' && Items !== null){
		for (let i in Items){
			let Item = Items[i]
			console.log(Item)
			ListItems.push(
				<ListGroupItem key={ i } action>
					<small className="float-right">R$ { money(Item.total) }</small>
					<h6 className="my-0" > { Item.id_event.label } </h6>
					<small className="text-muted">Brief description</small>
				</ListGroupItem>
			)
		}
	}
	let TotalItems = 0
	if (typeof props.FullCart.Items === "object"){
		TotalItems = Object.keys(props.FullCart.Items).length
	}

	return (
		<If condition={ TotalItems > 0 }>
			<Then>
				<h2>Total de items <Badge className="float-right" color="success">{ TotalItems }</Badge></h2>
				<ListGroup>
					{ ListItems }
					<ListGroupItem key="coupon" action color="success">
						<small className="float-right">{ money( Coupon.descount )  } %</small>
						<h6 className="my-0" > Código Promocional </h6>
						<small className="text-muted">{ Coupon.code }</small>
					</ListGroupItem>
					<ListGroupItem key="coupon" action>
						<small className="float-right">{ money( String(props.FullCart.total) + ".000" )  }</small>
						<h6 className="my-0" > Total </h6>
					</ListGroupItem>			
				</ListGroup>
			</Then>
			<Else>
				<h2>Total de items <Badge className="float-right" color="success">0</Badge></h2>
			</Else>
		</If>
	)
}
export default Cart