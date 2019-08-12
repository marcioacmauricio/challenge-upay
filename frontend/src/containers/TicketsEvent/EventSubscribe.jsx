import React from 'react'
import { CardImg, CardTitle, CardSubtitle, CardText, Button, Row, Col, Container, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { fetchTicketsEvent, deleteTicketsEvent } from '../../reducers/TicketsEvent/Actions'
import { addEvent, getEvents } from '../../reducers/HelpersReducer/Actions'
import { connect } from 'react-redux'
import TicketsEventModel from 'models/TicketsEventModel'
import { Link } from 'react-router-dom'
import Fields from 'fields/Fields'
import Cart from './Cart'
import { MenuHeader, HeaderAdmin } from 'components/Headers'

class EventSubscribe extends React.Component {
	constructor() {
		super();
		this.state = {
			Status: true,
			Errors: {},
			FullCart: {},
			Items: {}
		}
		this.ColumnsList = ['id', 'id_promoter', 'title', 'description', 'image']
		this.ColumnsFields = {}
		this.onDismiss = this.onDismiss.bind(this)
		this.addEvent = this.addEvent.bind(this)
	}
	onDismiss() {
		this.setState({ ...this.state, Status: true });
	}

	componentWillMount() {
		
		let Post = {
			Method: "getEvents"
		}
		this.props.getEvents(Post)		
	}



	

	componentWillReceiveProps(nextProps) {
		// debugger
		if (nextProps.event.Status === true){
			let newState = { ...this.state }
			newState.FullCart = nextProps.event.FullCart
			newState.Items = nextProps.event.Items
			this.setState( newState );
		}		
	}

	updatePageNumber(PageNumber){
		let DataFilter = this.getDataFilter()
		this.setState({...this.state, PageNumber})
		let Post = {
			Filters: DataFilter,
			ItemsPerPage: this.state.ItemsPerPage,
			PageNumber: PageNumber
		}
		this.props.fetchTicketsEvent(Post);	
	}
	addEvent( e ){
		
		let Post = {
			Amount: 1,
			Method: "addEvent",
			IdEvent: e.target.getAttribute('data-id-event')
		}
		this.props.addEvent(Post)
	}
	delEvent( e ){
		
		let Post = {
			Amount: -1,
			Method: "delEvent",
			IdEvent: e.target.getAttribute('data-id-event')
		}
		this.props.addEvent(Post)
	}	
	renderEvents(){
		let Ret = []
		for (let i in this.state.Items){
			let Item = this.state.Items[i]
			Ret.push(
				<Col xs="6"  key={ i }>
					<Card>
						<CardImg top width="100%" src={ Item.image } alt="Card image cap" />
						<CardBody>
							<CardTitle>{ Item.title } </CardTitle>
							<CardSubtitle>{ Item.description }</CardSubtitle>
							<CardText>{ Item.description }</CardText>
							<Button outline color="success" data-id-event={ Item.id } onClick={ this.addEvent }><i className="fa fa-cart-plus" aria-hidden="true"></i>Adicionar ao Carrinho</Button>
						</CardBody>
					</Card>
				</Col>
			)
		}

		return <Row>{ Ret }</Row>
	}
	render() {
		return (
			<>
				<HeaderAdmin />	
				<Container className="mt--7" fluid>		
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								Eventos
							</CardHeader>		
							<CardBody>
								<Row>
									<Col xs="8">
									{ this.renderEvents() }
									</Col>
									<Col xs="4">
										<Cart FullCart={this.state.FullCart} />
										<br/>
										<Link className="float-right float-right btn btn-outline-success" to="/Admin/TicketsEvent/EventBuy">Pagar</Link>										
									</Col>
								</Row>
							</CardBody>
							<CardFooter className="py-4">                				
								<Row>
									<Col xs="12">
										Footer
									</Col>
								</Row>
							</CardFooter>
						</Card>
					</div>	                				
				</Container>
			</>
		);
	}
}
const mapStateToProps = (state, props) => {
	return {
		auth: state.Register.auth,
		event: state.HelpersReducer.event
	}
}
export default connect(mapStateToProps, { getEvents, addEvent })(EventSubscribe);