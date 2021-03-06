import json
from db.fields.SuperField import SuperField
from utilities.pretty import pretty
class CloneFrom(SuperField):
	"""docstring for CloneFrom"""
	def __init__(self):
		super(CloneFrom, self).__init__()
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
		return 'describe_fk(' + ColumData.get('nickname') + ", '" + Params.get('colValue') + "', '" + Params.get('colLabel') + "', '" + Params.get('Schema') + '.' + Params.get('Table') + "')"

	def getInputToView(self, ColumData):
		Params = ColumData.get('parameters')
		return 'fk2json(' + ColumData.get('nickname') + ", '" + Params.get('colValue') + "', '" + Params.get('colLabel') + "', '" + Params.get('Schema') + '.' + Params.get('Table') + "')"	