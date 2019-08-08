from db.db import DB
from db.Entitys import Entitys
from db.models import getModel
from utilities.pretty import pretty
import re
from db.validates.isDate import isDate
import json
import datetime

class DatabaseHelpers(object):
	"""docstring for DatabaseHelpers"""
	def __init__(self, User):
		self.DB = DB( User )
		super(DatabaseHelpers, self).__init__()
	def approvePersonalReferences(self, PersonalReferencesId, Status):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}	
		query = "UPDATE personal_references  SET approved = $1 WHERE id = $2 RETURNING id, approved"
		Result = self.DB.exec(query , [Status, int(PersonalReferencesId)])
		
		if (self.DB.Status):
			Item = dict(Result[0])
			Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return
	def fetchOcrs(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, doctype, cpf, name,	"
		query += "\n\t to_char(birthdate, 'DD/MM/YYYY') AS birthdate"
		query += "father_name,	mother_name, identification_number, cnh_number"
		query += "\n\t, to_char(expedition_date, 'DD/MM/YYYY') AS expedition_date, emission_place "
		query += "\n\t, to_char(validate, 'DD/MM/YYYY') AS validate "
		query += "\n\t, to_char(first_qualification_date, 'DD/MM/YYYY') AS first_qualification_date "
		query += "\n\t FROM ocrs AS o WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)])
		
		if (self.DB.Status):
			if (len(Result) > 0):
				Item = dict(Result[0])
				Return['Item'] = Item

		return Return

	def fetchPoliticallyExposedPeople(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, name, cpf, role, power_sphere,"
		query += "\n\t to_char(period_start, 'DD/MM/YYYY') AS period_start,"
		query += "\n\t to_char(period_end, 'DD/MM/YYYY') AS period_end"
		query += "\n\t FROM politically_exposed_people"
		query += "\n\t WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)])
		
		if (self.DB.Status):
			if (len(Result) > 0):
				Item = dict(Result[0])
				Return['Item'] = Item

		return Return

	def approveAcquirement(self, ProposalId, ColumnName, Status):
		print(ProposalId, Status)
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT b.approvation_limit_time FROM proposals AS p"
		query += "\n\tINNER JOIN bank_loan_types AS t ON (p.bank_loan_type_id = t.id)"
		query += "\n\tINNER JOIN banks AS b ON (t.bank_id = b.id)"
		query += "\n\tWHERE p.id = $1"
		Result = self.DB.exec(query , [int(ProposalId)])
		approvation_limit_time = None
		if len(Result):
			approvation_limit_time = Result[0].get('approvation_limit_time')
		query = "UPDATE proposals SET ( " + ColumnName + ", approvation_date, approvation_limit_time ) = ( $1, $2, $3 ) WHERE id = $4 RETURNING id, approved, allow_general_contracts, allow_monthly_contracts"

		Result = self.DB.exec(query , [Status, datetime.datetime.utcnow(), approvation_limit_time, int(ProposalId)])
		if (self.DB.Status):
			Item = dict(Result[0])
			Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return	

	def getGeneralData(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {
			'requested_amount': '10000.00',
			'amount_due': '10000.00',
			'iof_financed': '100.00',
			'plot_value': '100.00',
			'main_value': '100.00',
			'plot_amount': '100.00',
			'monthly_interest_rate': '100.00',
			'annual_interest_rate': '100.00',
			'first_payment': '01/01/2001',
			'last_payment': '01/01/2001',
			'id': int(ProposalId)
		}

		return Return		
	def getBorrowers(self, BorrowerId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, valid_cpf, valid_name, valid_birthdate, cellphone, phone, attended, work_phone FROM borrowers WHERE id = $1"
		Result = self.DB.exec(query , [int(BorrowerId)])
		if (self.DB.Status):
			Item = dict(Result[0])
			Return['Item'] = Item
		return Return

	def fetchRiskAnalisys(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		# print(ProposalId)

		query = "SELECT id, facematch, risk_points, quiz_points FROM risk_analisys WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)])
		if (self.DB.Status):
			for i in range(len(Result)):
				Item = dict(Result[i])
				Return['Items'][Item['id']] = Item
		return Return

	def approveAddress(self, AddressId, Status):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}

		query = "UPDATE addresses  SET approved = $1 WHERE id = $2 RETURNING id, approved"
		# print(query)

		Result = self.DB.exec(query , [Status, int(AddressId)])

		if (self.DB.Status):
			Item = dict(Result[0])
			Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return
	def getConfig(self, ProposalId):
		
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {
			'id': 1,
			'closing_time': "17:00:00"
		}

		return Return	
	def aproveBorrower(self, BorrowerId, ColumnName, Status ):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}		
		query = "UPDATE borrowers SET " + ColumnName + " = $1 WHERE id = $2 RETURNING id, valid_cpf, valid_name, valid_birthdate, cellphone, phone, attended, work_phone"
		Result = self.DB.exec(query , [Status, int(BorrowerId)])
		if (self.DB.Status):
			Item = dict(Result[0])
			# print(ColumnName, Status, pretty(Item))
			Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return
	def fetchAddresses(self, ProposalId):
		# print(ProposalId)
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		query = "SELECT a.id, e.name AS state_name, a.city, a.street, a.number, a.complement, a.neighborhood, p.approved"
		query += "\n\tFROM proposals AS p"
		query += "\n\tINNER JOIN borrowers AS b ON (p.borrower_id = b.id)"
		query += "\n\tINNER JOIN addresses AS a ON (b.user_id = a.user_id)"
		query += "\n\tINNER JOIN states AS e ON (a.state_id = e.id)"
		query += "\n\tWHERE p.id = $1"
		print(query)
		Result = self.DB.exec(query , [int(ProposalId)])
		if (self.DB.Status):
			for i in range(len(Result)):
				Item = dict(Result[i])
				Return['Items'][Item['id']] = Item
		else:
			print(self.DB.Message)

		return Return

	def fetchPersonalReferences(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		query = "SELECT id, name, phone, relationship, approved FROM personal_references WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)])
		if (self.DB.Status):
			for i in range(len(Result)):
				Item = dict(Result[i])
				Return['Items'][Item['id']] = Item
		return Return
		
	def getDocuments(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		query = "SELECT d.id, to_char(d.created_at, 'DD/MM/YYYY HH:MI:SS') AS created_at, d.path, d.is_valid, t.name, d.has_fraud_risk FROM proposals AS p"
		query += "\n\tINNER JOIN borrowers AS b"
		query += "\n\tON (p.borrower_id = b.id)"
		query += "\n\tINNER JOIN document_galleries AS g"
		query += "\n\tON (g.user_id = b.user_id)"
		query += "\n\tINNER JOIN documents AS d"
		query += "\n\tON (d.document_gallery_id = g.id)"
		query += "\n\tLEFT JOIN document_types AS t"
		query += "\n\tON (d.document_type_id = t.id)"
		query += "\n\tWHERE p.id = $1"

		Result = self.DB.exec(query , [int(ProposalId)])

		if (self.DB.Status):
			for i in range(len(Result)):
				Item = dict(Result[i])
				Return['Items'][Item['id']] = Item
		return Return

	def changeDocument(self, idDocument, ColumnName, Status):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}		
		query = "UPDATE documents SET " + ColumnName + " = $1 WHERE id = $2 RETURNING id, is_valid, has_fraud_risk"
		print(query)
		Result = self.DB.exec(query , [Status, int(idDocument)])

		if (self.DB.Status):
			Item = dict(Result[0])

			Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return
	def getBanks(self):

		Return = {}
		query = "SELECT id AS value, name AS label FROM banks"
		Result = self.DB.exec(query )
		if (self.DB.Status):
			for i in range(len(Result)):
				Row = dict(Result[i])
				Return[Row.get('value')] = Row

		return Return
	def fetchBureauBasicDatas(self, ProposalId):
		
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, cpf, voter_number, social_security_number, name, social_name, gender, name_uniqueness_score, age, to_char(birthdate, 'DD/MM/YYYY') AS birthdate, birth_country, birth_state, mother_name, father_name, cpf_status, cpf_origin, has_obitind_ication, obit_indication_origin, obit_indication_year FROM bureau_basic_datas WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)] )
		if (self.DB.Status):
			if len(Result) > 0:
				Row = dict(Result[0])
				Return['Item'] = Row
		return Return		

	def fetchBureauEmails(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, total_passages, bad_passages, entities_number FROM bureau_emails WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)] )
		if (self.DB.Status):
			if len(Result) > 0:
				Row = dict(Result[0])
				Return['Item'] = Row

		return Return		

	def fetchBureauKycs(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = "SELECT id, level, job_title, department, motive, source, to_char(end_date, 'DD/MM/YYYY') AS end_date  FROM bureau_kycs WHERE proposal_id = $1"
		Result = self.DB.exec(query , [int(ProposalId)] )
		if (self.DB.Status):
			if len(Result) > 0:
				Row = dict(Result[0])
				Return['Item'] = Row
		return Return	
	def getOccupationDescription(self, ProposalId):
		query = "SELECT o.name FROM proposals AS p INNER JOIN occupations AS o ON (p.borrower_id = o.borrower_id) WHERE p.id = $1"	
		Ret = ""
		Result = self.DB.exec(query , [int(ProposalId)])
		if (self.DB.Status):
			if len(Result) > 0:
				Row = dict(Result[0])
				Ret = Row.get('name')
		return Ret
	def getPayslip(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		Return['Banks'] = self.getBanks()
		query = "SELECT id, proposal_id, occupation, department, unity, bank_account, bank_agency, "
		query += " registration_number::text,"
		query += " to_char(admission_date, 'DD/MM/YYYY') AS admission_date,"
		query += " net_salary::text,"
		query += " calculated_margin::text,"
		query += " fk2json(bank_id, 'id', 'name', 'banks') AS bank_id"
		query += " FROM payslips WHERE proposal_id = $1"

		Result = self.DB.exec(query , [int(ProposalId)])
		if (self.DB.Status):
			if len(Result) > 0:
				Item = dict(Result[0])
				Item['bank_id'] = json.loads(Item.get('bank_id'))
				Item['occupation_register'] = self.getOccupationDescription(ProposalId)

				Return['Item'] = Item
		else:
			print(self.DB.Message)
		return Return

	def approveAccountBank(self, AccountBankId, Status):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}		
		query = "UPDATE bank_datas SET approved = $1 WHERE id = $2 RETURNING id, approved"
		Result = self.DB.exec(query, [Status, int(AccountBankId)])
		if (self.DB.Status):
			lenResult = len(Result)
			Return['Status'] = True
			Return['ReturnCount'] = lenResult			
			if lenResult > 0:
				Return['Item'] = dict(Result[0])
		else:
			print(self.DB.Message)

		return Return
	def saveDateOpen(self, ProposalId, idBankData, DataOpen):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}

		query = "UPDATE bank_datas SET account_opening_date = $1 WHERE id = $2 RETURNING"
		query += "\n\t id, to_char(account_opening_date, 'DD/MM/YYYY') AS account_opening_date"
		objDate = isDate(DataOpen)
		Result = self.DB.exec(query, [objDate.get('Value'), int(idBankData)])

		if (self.DB.Status):

			return self.fetchBankDatas(ProposalId)
		else:

			print(self.DB.Message)
		return Return
	def changePayslip(self, ProposalId, Payslip):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		Return['Banks'] = self.getBanks()
		print(pretty(Payslip))
		def getVal(value, type_value):
			Ret = None
			if type_value == 'int':
				try:
					Ret = int(value)
				except Exception as e:
					pass
			elif type_value == 'str':
				try:
					Ret = str(value)
				except Exception as e:
					pass
			elif type_value == 'numeric':
				try:
					Ret = float(value)
				except Exception as e:
					pass
			elif type_value == 'date':
				try:
					objDate = isDate(value)
					Ret = objDate.get('Value')
				except Exception as e:
					pass
			elif type_value == 'dict':
				try:
					Ret = int(value.get('value'))
				except Exception as e:
					pass															
			return Ret

		NewPayslip = {}
		idPayslip = getVal(Payslip.get('id'), 'int')
		if (bool(idPayslip)):
			NewPayslip['id'] = idPayslip

		NewPayslip['proposal_id'] = getVal(Payslip.get('proposal_id'), 'int')
		NewPayslip['registration_number'] = getVal(Payslip.get('registration_number'), 'numeric')
		NewPayslip['occupation'] = getVal(Payslip.get('occupation'), 'str')
		NewPayslip['department'] = getVal(Payslip.get('department'), 'str')
		NewPayslip['bank_id'] = getVal(Payslip.get('bank_id'), 'dict')
		NewPayslip['bank_account'] = getVal(Payslip.get('bank_account'), 'str')
		NewPayslip['bank_agency'] = getVal(Payslip.get('bank_agency'), 'str')
		NewPayslip['unity'] = getVal(Payslip.get('unity'), 'str')
		NewPayslip['admission_date'] = getVal(Payslip.get('admission_date'), 'date')
		NewPayslip['net_salary'] = getVal(Payslip.get('net_salary'), 'numeric')
		NewPayslip['calculated_margin'] = getVal(Payslip.get('calculated_margin'), 'numeric')
		NewPayslip['approved_margin'] = getVal(Payslip.get('approved_margin'), 'numeric')
		QueryVars = ""
		QueryColumns = ""
		Values = []

		for Key, Value in NewPayslip.items():
			Separator = ""
			if len(Values) > 0:
				Separator = ", "

			QueryVars += Separator + "$" + str(len(Values) + 1)
			QueryColumns += Separator + Key
			Values.append(Value)

		query = ""
		queryReturning = " id, proposal_id, occupation, department, unity, bank_account, bank_agency, "
		queryReturning += " registration_number::text,"
		queryReturning += " to_char(admission_date, 'DD/MM/YYYY') AS admission_date,"
		queryReturning += " net_salary::text,"
		queryReturning += " calculated_margin::text, "
		queryReturning += " fk2json(bank_id, 'id', 'name', 'banks') AS bank_id"

		if idPayslip > 0:
			query = "UPDATE payslips SET (" + QueryColumns + ") = (" + QueryVars + ") RETURNING " + queryReturning
		else:
			query = "INSERT INTO payslips (" + QueryColumns + ") VALUES (" + QueryVars + ") RETURNING " + queryReturning
		Result = self.DB.exec(query, Values)
		if (self.DB.Status):
			lenResult = len(Result)
			Return['Status'] = True
			Return['ReturnCount'] = lenResult			
			if lenResult > 0:
				Row = dict(Result[0])
				Row['bank_id'] = json.loads(Row.get('bank_id'))
				Return['Item'] = Row

		else:
			print(self.DB.Message)
		return Return

	def fetchContracts(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = 'SELECT id, ccb_number FROM contracts WHERE proposal_id = $1'
		Result = self.DB.exec(query, [int(ProposalId)])
		if (self.DB.Status):
			if len(Result):
				Return['Item'] = dict(Result[0])
				if not bool(Return.get('Item').get('ccb_number')):
					Return['Item']['ccb_number'] = ""
		return Return

	def saveCcbNumber(self, ContractId, CcbNumber):
		print(ContractId, CcbNumber)
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Item'] = {}
		query = 'UPDATE contracts SET ccb_number = $1 WHERE id = $2 RETURNING id, ccb_number'
		Result = self.DB.exec( query, [ CcbNumber,  int(ContractId) ] )
		if (self.DB.Status):
			if len(Result):
				Return['Item'] = dict(Result[0])
				if not bool(Return.get('Item').get('ccb_number')):
					Return['Item']['ccb_number'] = ""
		else:
			print(self.DB.Message)

		return Return


	def fetchBankDatas(self, ProposalId):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}

		query = "SELECT to_char(bd.created_at, 'DD/MM/YYYY HH:MI:SS') AS created_at, "
		query += "\n\t bd.id, bd.bank_id, bd.agency, bd.account_number, bd.account_type, bd.account_holder, bd.approved, b.name AS bank_name, to_char(account_opening_date, 'DD/MM/YYYY') AS account_opening_date" 
		query += "\n\t FROM proposals AS p "
		query += "\n\tINNER JOIN bank_data_proposals AS bp ON (bp.proposal_id = p.id) "
		query += "\n\tINNER JOIN bank_datas AS bd ON (bd.id = bp.bank_data_id) "
		query += "\n\tINNER JOIN banks AS b ON (b.id = bd.bank_id) "
		query += "\n\tWHERE p.id = $1 "

		Result = self.DB.exec(query, [int(ProposalId)])
		if (self.DB.Status):
			lenResult = len(Result)
			Return['Status'] = True
			Return['ReturnCount'] = lenResult			
			for i in range(lenResult):
				Row = dict(Result[i])	
				if not bool(Row.get('account_opening_date')):
					Row['account_opening_date']	= ""
				Return['Items'][Row.get('id')] = Row
		else:
			print(self.DB.Message)
		return Return

	def getOptionsFK(self, Params):
		Return = {}
		Return['Status'] = True
		Return['Errors'] = {}
		Return['ReturnCount'] = 0
		Return['SearchCount'] = 0
		Return['PageNumber'] = 0
		Return['Items'] = {}
		EntitysList = []

		def getQueryOptions():
			EntitysToQuery = {}
			Values = []
			Query = ""
			EntitysList.reverse()
			i = 0
			EntityReference = None
			CTable = Entitys.get(Params.get('TableSchemaPredesc'))
			CPredescTable = Entitys.get(CTable.get('EntityPredesc'))
			ColunPredescName = None
			if bool(CPredescTable):
				ColunPredescName = 'id_' + CPredescTable.get('nickname')
			for i in range(len(EntitysList)):
				EntityName = EntitysList[i]
				if not bool(EntityReference):
					Model = getModel(EntityName)
					Columns = Model.get('columns')
					ColReference = Columns.get(ColunPredescName)
					if not bool(EntityReference) and bool(ColReference):
						EntityReference = EntityName
				EntityConf = Entitys.get(EntityName)
				EntitysToQuery[EntityName] = {
					'Table': EntityConf.get('nickname'),
					'TableSchema': EntityConf.get('schema_nickname') + "." + EntityConf.get('nickname'),
					'Aliase': 't' + str(i)
				}
				EntityPredesc = EntityConf.get('EntityPredesc')

				if bool(EntityPredesc):
					EntityConfPredesc = EntitysToQuery.get(EntityPredesc)					
					if EntityName == Params.get('CurrentEntity') and bool(Params.get('CurrentValue')) and bool(EntityReference):
						Values.append(Params.get('CurrentValue'))
						EntitysToQuery[EntityName]['On'] = '(' + EntitysToQuery[EntityName].get('Aliase') + '.id = $' + str(len(Values)) + ' AND ' + EntitysToQuery[EntityName].get('Aliase') + '.id_' + EntityConfPredesc.get('Table') + ' = ' + EntityConfPredesc.get('Aliase') + '.id)'
					else:
						EntitysToQuery[EntityName]['On'] = '(' + EntitysToQuery[EntityName].get('Aliase') + '.id_' + EntityConfPredesc.get('Table') + ' = ' + EntityConfPredesc.get('Aliase') + '.id)'

			EntityName = Params.get('TableSchemaPredesc')
			OldEntityName = EntityName
			EntityConf = Entitys.get(EntityName)
			i += 1
			EntitysToQuery[EntityName] = {
				'Table': EntityConf.get('nickname'),
				'TableSchema': EntityConf.get('schema_nickname') + "." + EntityConf.get('nickname'),
				'Aliase': 't' + str(i)
			}
			if bool(EntityReference):
				EntitysToQuery[OldEntityName]['On'] = '(' + EntitysToQuery.get(EntityName).get('Aliase') + "." + ColunPredescName + ' = ' + EntitysToQuery.get(EntityReference).get('Aliase') + '.' + ColunPredescName + ')'
			
			Model = getModel(Params.get('TableSchema'))
			if not bool(Model):
				return
			Columns = Model.get('columns')
			if not bool(Columns):
				return
			Column = Columns.get(Params.get('ColumnName'))
			if not bool(Column):
				return
			Parameters = Column.get('parameters')
			if not bool(Parameters):
				return

			CurrentTableName = Params.get('TableSchemaPredesc')
			CurrentTableConf = EntitysToQuery.get(CurrentTableName)
			query = "SELECT " + CurrentTableConf.get('Aliase') + '.' + Parameters.get('colLabel') + ' AS label, ' + CurrentTableConf.get('Aliase') + '.' + Parameters.get('colValue') + ' AS value' 
			if bool(EntityReference):
				k = 0
				for Key, Value in EntitysToQuery.items():
					if k == 0:
						query += "\n\tFROM " + Value.get('TableSchema') + " AS " + Value.get('Aliase')
					else: 
						query += "\n\tINNER JOIN " + Value.get('TableSchema') + " AS " + Value.get('Aliase')
						query += "\n\t\t ON " + Value.get('On')
					k +=1 
			else:
				Value = EntitysToQuery.get(Params.get('TableSchemaPredesc'))
				query += "\n\tFROM " + Value.get('TableSchema') + " AS " + Value.get('Aliase')

			return {
				'query': query,
				'Values': Values
			}


		CurrentEntity = Params.get('CurrentEntity')
		EntityConfig = Entitys.get(CurrentEntity)

		while bool(CurrentEntity):
			EntitysList.append(CurrentEntity)
			EntityConfig = Entitys.get(CurrentEntity)
			if bool(EntityConfig):
				CurrentEntity = EntityConfig.get('EntityPredesc')
			else:
				CurrentEntity = None

		DataQuery = getQueryOptions()
		Result = self.DB.exec(DataQuery.get('query'), DataQuery.get('Values'))
		if bool(self.DB.Status):
			lenResult = len(Result)
			Return['Status'] = True
			Return['ReturnCount'] = lenResult

			if lenResult > 0:
				for i in range(lenResult):
					Row = dict(Result[i])
					Return['Items'][Row.get('value')] = Row
		else:
			Return['Status'] = False
			Return['Errors']['DB'] = self.DB.Message

		return Return




		