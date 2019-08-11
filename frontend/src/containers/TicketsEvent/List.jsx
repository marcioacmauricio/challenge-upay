import React from 'react'
import { CardImg, CardTitle, CardSubtitle, CardText, Button, Row, Col, Container, Card, CardHeader, CardBody, CardFooter } from 'reactstrap'
import { fetchTicketsEvent, deleteTicketsEvent } from '../../reducers/TicketsEvent/Actions'
import { addEvent } from '../../reducers/HelpersReducer/Actions'
import { connect } from 'react-redux'
import TicketsEventModel from 'models/TicketsEventModel'
import { Link } from 'react-router-dom'
import Fields from 'fields/Fields'
import { MenuHeader, HeaderAdmin } from 'components/Headers'

class TicketsEventList extends React.Component {
	constructor() {
		super();
		this.state = {
				Search: "",
			Filters: {
				Show: true
			},
			Columns: {},
			Status: true,
			Errors: {},
			ItemsPerPage: 10,
			PageNumber: 1,
			ReturnCount: 0,
			SearchCount: 0,
			Items: {}
		}
		this.ColumnsList = ['id', 'id_promoter', 'title', 'description', 'image']
		this.onChangeFilter = this.onChangeFilter.bind(this)
		this.ColumnsFields = {}
		this.onDismiss = this.onDismiss.bind(this)
		this.changeSearch = this.changeSearch.bind(this)
		this.addEvent = this.addEvent.bind(this)
	}
	onDismiss() {
		this.setState({ ...this.state, Status: true });
	}
	onChangeFilter(ColName, Value) {
		let DataFilter = this.getDataFilter(ColName, Value)
		this.fetchItems(DataFilter)
	}	
	getDataFilter(ColName = undefined, Value = undefined){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem(UserId)
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}
		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		let TicketsEvent = {}
		if (AllFilters.TicketsEvent !== undefined){
			TicketsEvent = AllFilters.TicketsEvent
		} 
		let Filters = {}
		for (let i = 0; i < this.ColumnsList.length; i++){
			let ColumnName = this.ColumnsList[i]
			let Param = {
				order: null,
				show: true
			}
			if (TicketsEvent[ColumnName] !== undefined){
				Param = TicketsEvent[ColumnName]
			} else {
				if (ColumnName === 'id') {
					Param.order = "ASC"
				}
			} 
			if (ColumnName === 'id_enterprise'){
				Param.value = this.props.match.params.IdPredesc
			} else if (ColumnName === ColName){
				Param.value = Value
			}

			Filters[ColumnName] = Param
		}
		AllFilters.TicketsEvent = Filters		
		DataUser.Filters = AllFilters
		localStorage.setItem( UserId, JSON.stringify(DataUser))	
		return Filters
	}
	setDataFilter(Filters){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem( UserId )
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}
		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		AllFilters.TicketsEvent = Filters		
		DataUser.Filters = AllFilters
		localStorage.setItem( UserId , JSON.stringify(DataUser))

	}
	componentWillMount() {
		let DataFilter = this.getDataFilter()
		let Filters = {}
		for (let ColumnName in DataFilter){
			let Data = DataFilter[ColumnName]
			Filters[ColumnName] = Data
			let ColumnMetaData = TicketsEventModel.columns[ColumnName]
			this.ColumnsFields[ColumnName] = Fields(ColumnMetaData, this.onChangeFilter )
			Filters[ColumnName] = Data
		}
		this.fetchItems(Filters)
	}
	fetchItems(DataFilter){
		let Filters = {}
		for (let ColumnName in DataFilter){
			let Data = DataFilter[ColumnName]
			if (Data.value !== undefined){
				if (Data.value === null){
					Data.value = undefined
				} else {
					Data.value = this.ColumnsFields[ColumnName].OutPutFilter(Data.value)
				}				
			}
			Filters[ColumnName] = Data			
		}
		let Post = {
			Filters,
			ItemsPerPage: this.state.ItemsPerPage,
			PageNumber: this.state.PageNumber
		}
		this.props.fetchTicketsEvent(Post);
	}
	updateOrderBy(ColumnName){
		let DataFilter = this.getDataFilter()
		if (DataFilter[ColumnName].order === null){
			DataFilter[ColumnName].order = 'ASC'
		} else if (DataFilter[ColumnName].order === 'ASC'){
			DataFilter[ColumnName].order = 'DESC'
		} else if (DataFilter[ColumnName].order === 'DESC'){
			DataFilter[ColumnName].order = null
		} else {
			DataFilter[ColumnName].order = null
		}
		this.setDataFilter(DataFilter)
		this.fetchItems(DataFilter)
	}
	ClearFilters(){
		let UserId = this.props.auth.getUser()
		localStorage.removeItem( UserId )
		let DataFilter = this.getDataFilter()
		this.fetchItems(DataFilter)
	}


	changeSearch(e){
		let UserId = this.props.auth.getUser()
		let StrDataUser = localStorage.getItem( UserId )
		let DataUser = {}
		if (StrDataUser !== null){
			DataUser = JSON.parse(StrDataUser)
		}

		let AllFilters = {}
		if (DataUser.Filters !== undefined){
			AllFilters = DataUser.Filters
		}
		console.log(AllFilters)
		debugger
	}
	

	ShowFilters() {
		this.setState({...this.state, Filters: {...this.state.Filters, Show: !this.state.Filters.Show } })
	}
	componentWillReceiveProps(nextProps) {
		if (typeof nextProps.Payloads === 'object'){
			this.setState({...this.state, ...nextProps.Payloads});
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
			Amount: -1,
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
									<Col xs="12">
									{ this.renderEvents() }
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
		Payload: state.TicketsEventReducer.item,
		Payloads: state.TicketsEventReducer.items,
		auth: state.Register.auth,
		event: state.HelpersReducer.event
	}
}
export default connect(mapStateToProps, {fetchTicketsEvent, deleteTicketsEvent, addEvent })(TicketsEventList);