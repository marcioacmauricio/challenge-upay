from db.models.MasterModelTableModel import MasterModelTableModel
from db.models.MasterUserModel import MasterUserModel
from db.models.MasterAddressModel import MasterAddressModel
from db.models.MasterTablePermissionModel import MasterTablePermissionModel
from db.models.MasterColumnPermissionModel import MasterColumnPermissionModel
from db.models.MasterMailConfirmationModel import MasterMailConfirmationModel
from db.models.MasterMailTemplateModel import MasterMailTemplateModel
from db.models.MasterPasswordRecoveryModel import MasterPasswordRecoveryModel
from db.models.MasterResourceModel import MasterResourceModel
from db.models.MasterUserGroupModel import MasterUserGroupModel
from db.models.MasterUserGroupResourceModel import MasterUserGroupResourceModel
from db.models.MasterUserUserGroupModel import MasterUserUserGroupModel
from db.models.MasterAuthenticationModel import MasterAuthenticationModel
from db.models.TicketsPromoterModel import TicketsPromoterModel
from db.models.TicketsEventModel import TicketsEventModel
from db.models.TicketsTicketModel import TicketsTicketModel
from db.models.TicketsCouponModel import TicketsCouponModel
from db.models.TicketsSaleModel import TicketsSaleModel
from db.models.TicketsCartModel import TicketsCartModel
from db.models.TicketsCartItemModel import TicketsCartItemModel

def getModel(EntityName):
	if EntityName == 'MasterModelTable':
		return MasterModelTableModel

	if EntityName == 'MasterUser':
		return MasterUserModel

	if EntityName == 'MasterAddress':
		return MasterAddressModel

	if EntityName == 'MasterTablePermission':
		return MasterTablePermissionModel

	if EntityName == 'MasterColumnPermission':
		return MasterColumnPermissionModel

	if EntityName == 'MasterMailConfirmation':
		return MasterMailConfirmationModel

	if EntityName == 'MasterMailTemplate':
		return MasterMailTemplateModel

	if EntityName == 'MasterPasswordRecovery':
		return MasterPasswordRecoveryModel

	if EntityName == 'MasterResource':
		return MasterResourceModel

	if EntityName == 'MasterUserGroup':
		return MasterUserGroupModel

	if EntityName == 'MasterUserGroupResource':
		return MasterUserGroupResourceModel

	if EntityName == 'MasterUserUserGroup':
		return MasterUserUserGroupModel

	if EntityName == 'MasterAuthentication':
		return MasterAuthenticationModel

	if EntityName == 'TicketsPromoter':
		return TicketsPromoterModel

	if EntityName == 'TicketsEvent':
		return TicketsEventModel

	if EntityName == 'TicketsTicket':
		return TicketsTicketModel

	if EntityName == 'TicketsCoupon':
		return TicketsCouponModel

	if EntityName == 'TicketsSale':
		return TicketsSaleModel

	if EntityName == 'TicketsCart':
		return TicketsCartModel

	if EntityName == 'TicketsCartItem':
		return TicketsCartItemModel
