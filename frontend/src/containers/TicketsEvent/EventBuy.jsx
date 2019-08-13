import React from 'react'
import { CardImg, CardTitle, CardSubtitle, CardText, Button, Row, Col, Container, Card, CardHeader, CardBody, CardFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import { fetchTicketsEvent, deleteTicketsEvent } from '../../reducers/TicketsEvent/Actions'
import { addEvent, getEvents, payTicket } from '../../reducers/HelpersReducer/Actions'
import { connect } from 'react-redux'
import TicketsEventModel from 'models/TicketsEventModel'
import { Link } from 'react-router-dom'
import Fields from 'fields/Fields'
import Cart from './Cart'
import money from 'util/money'
import { If, Then, Else } from 'react-if'
import { MenuHeader, HeaderAdmin } from 'components/Headers'
import Zoop from 'zoop-integration'

class EventBuy extends React.Component {
	constructor() {
		super();
		this.state = {
			Status: true,
			Errors: {},
			FullCart: {},
			Items: {},
			isPayed: false,
			Form: {
				Total: "0",
				BuyerId: "5f891b3920e44992ad826f59b689e0f8",
				address: "",
				address2: "",
				city: "",
				state: "",
				zip_cod: "",
				card1: "4539",
				card2: "0033",
				card3: "7072",
				card4: "5497",
				ccv: ""
			},
			Transation: {}
		}
		this.ColumnsList = ['id', 'id_promoter', 'title', 'description', 'image']
		this.ColumnsFields = {}
		this.onDismiss = this.onDismiss.bind(this)
		this.addEvent = this.addEvent.bind(this)
		this.payTicket = this.payTicket.bind(this)
		this.changeInput = this.changeInput.bind(this)
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
		let newState = { ...this.state }
		if (nextProps.event.Status === true){
			newState.Form.Total = nextProps.event.FullCart.total + "00"
			newState.FullCart = nextProps.event.FullCart
			newState.Items = nextProps.event.Items
			
		}	
		if (nextProps.transation.amount !== undefined){
			debugger
			newState.Transation = nextProps.transation
			newState.isPayed = true
		}
		this.setState( newState );
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
	changeInput(e){
		let newState = { ...this.state }
		newState.Form[e.target.name] = e.target.value
		this.setState( newState )
	}
	payTicket( e ){
		e.preventDefault()
		this.props.payTicket(this.state.Form)
	}
	render() {
		// debugger
		return (
			<>
				<HeaderAdmin />	
				<Container className="mt--7" fluid>		
					<div className="col">
						<Card className="shadow">
							<CardHeader className="border-0">
								Pagamento
							</CardHeader>		
							<CardBody>
								<If condition={ this.state.Transation.transaction_number === undefined } >
									<Then>
										<Row>
											<Col xs="8">
												<h3>Endereço de Entrega</h3>
												<Form>
													<FormGroup>
														<Label for="exampleAddress">Endereço</Label>
														<Input onChange={ this.changeInput } value={ this.state.Form.address } type="text" name="address" placeholder="Av. Nome da Avenida, nº 123"/>
													</FormGroup>
													<FormGroup>
														<Label for="exampleAddress2">Complemento</Label>
														<Input onChange={ this.changeInput } value={ this.state.Form.address2 } type="text" name="address2" placeholder="Casa, Apartamento, Bloco, Andar"/>
													</FormGroup>
													<Row form>
														<Col md={6}>
															<FormGroup>
																<Label for="exampleCity">Cidade</Label>
																<Input onChange={ this.changeInput } value={ this.state.Form.city } type="text" name="city" />
															</FormGroup>
														</Col>
														<Col md={4}>
															<FormGroup>
																<Label for="exampleState">Estado</Label>
																<Input onChange={ this.changeInput } value={ this.state.Form.state } type="text" name="state" />
															</FormGroup>
														</Col>
														<Col md={2}>
															<FormGroup>
																<Label for="exampleZip">CEP</Label>
																<Input onChange={ this.changeInput } value={ this.state.Form.zip_cod } type="text" name="zip_cod"/>
															</FormGroup>  
														</Col>
													</Row>
													<FormGroup>
														<Label for="exampleAddress2">Cartão de Crédito</Label>
														<Row form>
															<Col md={3}>
																<FormGroup>
																	<Input onChange={ this.changeInput } value={ this.state.Form.card1 } type="text" name="card1" />
																</FormGroup>
															</Col>
															<Col md={3}>
																<FormGroup>
																	<Input onChange={ this.changeInput } value={ this.state.Form.card2 } type="text" name="card2"/>
																</FormGroup>
															</Col>
															<Col md={3}>
																<FormGroup>
																	<Input onChange={ this.changeInput } value={ this.state.Form.card3 } type="text" name="card3"/>
																</FormGroup>  
															</Col>
															<Col md={3}>
																<FormGroup>
																	<Input onChange={ this.changeInput } value={ this.state.Form.card4 } type="text" name="card4"/>
																</FormGroup>  
															</Col>													
														</Row>												
													</FormGroup>
													<Row form>
														<Col md={2}>
															<FormGroup>
																<Label for="exampleZip">CCV</Label>
																<Input onChange={ this.changeInput } value={ this.state.Form.ccv } type="text" name="ccv"/>
															</FormGroup>  
														</Col>
													</Row> 
													<FormGroup check>
														<Input type="checkbox" name="check" id="exampleCheck"/>
														<Label for="exampleCheck" check>O Endereço de cobrança é o mesmo de entrega</Label>
													</FormGroup>
													<FormGroup check>
														<Input type="checkbox" name="check" id="exampleCheck"/>
														<Label for="exampleCheck" check>Guardar informações para próxima compra</Label>
													</FormGroup>
												</Form>
											</Col>
											<Col xs="4">
												<Cart FullCart={this.state.FullCart} />
												<br/>
												<Button disabled={ this.state.isPayed } className="float-right" onClick={ this.payTicket } outline color="success">Pagar <strong>(R$ { money( this.state.FullCart.total + ".000" ) })</strong></Button>
											</Col>
										</Row>
									</Then>
									<Else>
										<h3>Pagamento concluido!</h3>
										<span>Código da tranzação: { this.state.Transation.transaction_number } </span>
									</Else>
								</If>

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
		event: state.HelpersReducer.event,
		transation: state.HelpersReducer.transation
	}
}
export default connect(mapStateToProps, { getEvents, addEvent, payTicket })(EventBuy);