import json
from db.fields.SuperField import SuperField
class ModifiedBy(SuperField):
	"""docstring for Editor"""
	def __init__(self):
		super(ModifiedBy, self).__init__()
	def getOutputToView(self, Value):
		Return = {'value': '', 'label': ''}
		try:
			Return = json.loads(Value)
			if not bool(Return.get('value')):
				Return = {'value': '', 'label': ''}
		except Exception as e:
			print('CheckedOut: ', str(e))
		return Return		

	def getInputToList(self, ColumData):
		Params = ColumData.get('parameters')
		StrQuery = 'describe_fk(' + ColumData.get('nickname') + ", '" + Params.get('colValue') + "', '" + Params.get('colLabel') + "', '" + Params.get('Schema') + '.' + Params.get('Table') + "'"
		if bool(Params.get('colDescription')):
			StrQuery += ", '" + Params.get('colDescription') + "'"
		StrQuery += ")"
		return StrQuery

	def getInputToView(self, ColumData):
		Params = ColumData.get('parameters')
		StrQuery = 'fk2json(' + ColumData.get('nickname') + ", '" + Params.get('colValue') + "', '" + Params.get('colLabel') + "', '" + Params.get('Schema') + '.' + Params.get('Table') + "'"
		if bool(Params.get('colDescription')):
			StrQuery += ", '" + Params.get('colDescription') + "'"
		StrQuery += ")"
		return StrQuery