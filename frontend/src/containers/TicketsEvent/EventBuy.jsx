import React from 'react'
import { CardImg, CardTitle, CardSubtitle, CardText, Button, Row, Col, Container, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { fetchTicketsEvent, deleteTicketsEvent } from '../../reducers/TicketsEvent/Actions'
import { addEvent, getEvents } from '../../reducers/HelpersReducer/Actions'
import { connect } from 'react-redux'
import TicketsEventModel from 'models/TicketsEventModel'
import { Link } from 'react-router-dom'
import Fields from 'fields/Fields'
import Cart from './Cart'
import { MenuHeader, HeaderAdmin } from 'components/Headers'

class EventBuy extends React.Component {
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
										<Form>
											<Row form>
												<Col md={6}>
													<FormGroup>
														<Label for="exampleEmail">Email</Label>
														<Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
													</FormGroup>
												</Col>
												<Col md={6}>
													<FormGroup>
														<Label for="examplePassword">Password</Label>
														<Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
													</FormGroup>
												</Col>
											</Row>
											<FormGroup>
												<Label for="exampleAddress">Address</Label>
												<Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
											</FormGroup>
											<FormGroup>
												<Label for="exampleAddress2">Address 2</Label>
												<Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
											</FormGroup>
											<Row form>
												<Col md={6}>
													<FormGroup>
														<Label for="exampleCity">City</Label>
														<Input type="text" name="city" id="exampleCity"/>
													</FormGroup>
												</Col>
												<Col md={4}>
													<FormGroup>
														<Label for="exampleState">State</Label>
														<Input type="text" name="state" id="exampleState"/>
													</FormGroup>
												</Col>
												<Col md={2}>
													<FormGroup>
														<Label for="exampleZip">Zip</Label>
														<Input type="text" name="zip" id="exampleZip"/>
													</FormGroup>  
												</Col>
											</Row>
											<FormGroup check>
												<Input type="checkbox" name="check" id="exampleCheck"/>
												<Label for="exampleCheck" check>Check me out</Label>
											</FormGroup>
											<Button>Sign in</Button>
										</Form>
									</Col>
									<Col xs="4">
										<Cart FullCart={this.state.FullCart} />
										<br/>
										
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
export default connect(mapStateToProps, { getEvents, addEvent })(EventBuy);