import Index from "views/Index"
import Profile from "views/examples/Profile"
import Maps from "views/examples/Maps"
import Register from "views/register/Register"
import ConfirmToken from "views/register/ConfirmToken"
import RecoverPassword from "views/register/RecoverPassword"
import SetPassword from "views/register/SetPassword"
import Login from "views/register/Login"
import Tables from "views/examples/Tables"
import Icons from "views/examples/Icons"
import { MasterModelTableEdit, MasterModelTableList, MasterModelTableView } from 'containers/MasterModelTable'
import { MasterUserEdit, MasterUserList, MasterUserView } from 'containers/MasterUser'
import { MasterAddressEdit, MasterAddressList, MasterAddressView } from 'containers/MasterAddress'
import { MasterTablePermissionEdit, MasterTablePermissionList, MasterTablePermissionView } from 'containers/MasterTablePermission'
import { MasterColumnPermissionEdit, MasterColumnPermissionList, MasterColumnPermissionView } from 'containers/MasterColumnPermission'
import { MasterMailConfirmationEdit, MasterMailConfirmationList, MasterMailConfirmationView } from 'containers/MasterMailConfirmation'
import { MasterMailTemplateEdit, MasterMailTemplateList, MasterMailTemplateView } from 'containers/MasterMailTemplate'
import { MasterPasswordRecoveryEdit, MasterPasswordRecoveryList, MasterPasswordRecoveryView } from 'containers/MasterPasswordRecovery'
import { MasterResourceEdit, MasterResourceList, MasterResourceView } from 'containers/MasterResource'
import { MasterUserGroupEdit, MasterUserGroupList, MasterUserGroupView } from 'containers/MasterUserGroup'
import { MasterUserGroupResourceEdit, MasterUserGroupResourceList, MasterUserGroupResourceView } from 'containers/MasterUserGroupResource'
import { MasterUserUserGroupEdit, MasterUserUserGroupList, MasterUserUserGroupView } from 'containers/MasterUserUserGroup'
import { MasterAuthenticationEdit, MasterAuthenticationList, MasterAuthenticationView } from 'containers/MasterAuthentication'
import { TicketsPromoterEdit, TicketsPromoterList, TicketsPromoterView } from 'containers/TicketsPromoter'
import { TicketsEventEdit, TicketsEventList, TicketsEventView, EventSubscribe, EventBuy } from 'containers/TicketsEvent'
import { TicketsTicketEdit, TicketsTicketList, TicketsTicketView } from 'containers/TicketsTicket'
import { TicketsCouponEdit, TicketsCouponList, TicketsCouponView } from 'containers/TicketsCoupon'
import { TicketsSaleEdit, TicketsSaleList, TicketsSaleView } from 'containers/TicketsSale'
import { TicketsCartEdit, TicketsCartList, TicketsCartView } from 'containers/TicketsCart'
import { TicketsCartItemEdit, TicketsCartItemList, TicketsCartItemView } from 'containers/TicketsCartItem'

var routes = [
	{
		path: "/TicketsEvent/EventBuy",
		name: "Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		layout: "/admin",
		component: EventBuy
	},
	{
		path: "/TicketsEvent/EventSubscribe",
		name: "Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		layout: "/admin",
		component: EventSubscribe,
	},
	{
		path: "/recover-password",
		name: "Recover Password",
		icon: "ni ni-circle-08 text-pink",
		component: RecoverPassword,
		layout: "/auth"
	},
	{
		path: "/set-password/:Token",
		name: "Set Password",
		icon: "ni ni-circle-08 text-pink",
		component: SetPassword,
		layout: "/auth"
	}, 
	{
		path: "/confirm-token/:Token",
		name: "Confirm Token",
		icon: "ni ni-circle-08 text-pink",
		component: ConfirmToken,
		layout: "/auth"
	},
	{
		path: "/index",
		name: "Dashboard",
		icon: "ni ni-tv-2 text-primary",
		component: Index,
		layout: "/admin"
	},
	{
		path: "/icons",
		name: "Icons",
		icon: "ni ni-planet text-blue",
		component: Icons,
		layout: "/admin"
	},
	{
		path: "/maps",
		name: "Maps",
		icon: "ni ni-pin-3 text-orange",
		component: Maps,
		layout: "/admin"
	},
	{
		path: "/user-profile",
		name: "User Profile",
		icon: "ni ni-single-02 text-yellow",
		component: Profile,
		layout: "/admin"
	},
	{
		path: "/tables",
		name: "Tables",
		icon: "ni ni-bullet-list-67 text-red",
		component: Tables,
		layout: "/admin"
	},
	{
		path: "/login",
		name: "Login",
		icon: "ni ni-key-25 text-info",
		component: Login,
		layout: "/auth"
	},
	{
		path: "/register",
		name: "Register",
		icon: "ni ni-circle-08 text-pink",
		component: Register,
		layout: "/auth"
	},
	{
		path: "/MasterModelTable/ListItems",
		name: "List Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableList,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/NewItem",
		name: "Add Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableEdit,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/ShowItem/:id",
		name: "View Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableView,
		layout: "/admin"
	},
	{
		path: "/MasterModelTable/EditItem/:id",
		name: "Edit Tabela Modelo",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterModelTableEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUser/ListItems",
		name: "List User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserList,
		layout: "/admin"
	},
	{
		path: "/MasterUser/NewItem",
		name: "Add User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUser/ShowItem/:id",
		name: "View User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserView,
		layout: "/admin"
	},
	{
		path: "/MasterUser/EditItem/:id",
		name: "Edit User",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressList,
		layout: "/admin"		
	},
	{
		path: "/MasterAddress/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/ShowItem/:id",
		name: "View Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressView,
		layout: "/admin"
	},
	{
		path: "/MasterAddress/EditItem/:id",
		name: "Edit Address",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAddressEdit,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/ListItems",
		name: "List Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionList,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/NewItem",
		name: "Add Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/ShowItem/:id",
		name: "View Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionView,
		layout: "/admin"
	},
	{
		path: "/MasterTablePermission/EditItem/:id",
		name: "Edit Table permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterTablePermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionList,
		layout: "/admin"		
	},
	{
		path: "/MasterColumnPermission/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/ShowItem/:id",
		name: "View Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionView,
		layout: "/admin"
	},
	{
		path: "/MasterColumnPermission/EditItem/:id",
		name: "Edit Column permission",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterColumnPermissionEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationList,
		layout: "/admin"		
	},
	{
		path: "/MasterMailConfirmation/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/ShowItem/:id",
		name: "View Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationView,
		layout: "/admin"
	},
	{
		path: "/MasterMailConfirmation/EditItem/:id",
		name: "Edit Mail confirmation",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailConfirmationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/ListItems",
		name: "List Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateList,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/NewItem",
		name: "Add Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateEdit,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/ShowItem/:id",
		name: "View Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateView,
		layout: "/admin"
	},
	{
		path: "/MasterMailTemplate/EditItem/:id",
		name: "Edit Mail template",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterMailTemplateEdit,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryList,
		layout: "/admin"		
	},
	{
		path: "/MasterPasswordRecovery/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryEdit,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/ShowItem/:id",
		name: "View Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryView,
		layout: "/admin"
	},
	{
		path: "/MasterPasswordRecovery/EditItem/:id",
		name: "Edit Password recovery",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterPasswordRecoveryEdit,
		layout: "/admin"
	},
	{
		path: "/MasterResource/ListItems",
		name: "List Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceList,
		layout: "/admin"
	},
	{
		path: "/MasterResource/NewItem",
		name: "Add Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterResource/ShowItem/:id",
		name: "View Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceView,
		layout: "/admin"
	},
	{
		path: "/MasterResource/EditItem/:id",
		name: "Edit Resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/ListItems",
		name: "List User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupList,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/NewItem",
		name: "Add User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/ShowItem/:id",
		name: "View User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupView,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroup/EditItem/:id",
		name: "Edit User group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/ListItems/:EntityPredesc/:IdPredesc",
		name: "List User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceList,
		layout: "/admin"		
	},
	{
		path: "/MasterUserGroupResource/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/ShowItem/:id",
		name: "View User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceView,
		layout: "/admin"
	},
	{
		path: "/MasterUserGroupResource/EditItem/:id",
		name: "Edit User group resource",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserGroupResourceEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/ListItems/:EntityPredesc/:IdPredesc",
		name: "List User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupList,
		layout: "/admin"		
	},
	{
		path: "/MasterUserUserGroup/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/ShowItem/:id",
		name: "View User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupView,
		layout: "/admin"
	},
	{
		path: "/MasterUserUserGroup/EditItem/:id",
		name: "Edit User user group",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterUserUserGroupEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationList,
		layout: "/admin"		
	},
	{
		path: "/MasterAuthentication/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationEdit,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/ShowItem/:id",
		name: "View Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationView,
		layout: "/admin"
	},
	{
		path: "/MasterAuthentication/EditItem/:id",
		name: "Edit Authentication",
		icon: "ni ni-bullet-list-67 text-red",
		component: MasterAuthenticationEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsPromoter/ListItems",
		name: "List Promotoras",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsPromoterList,
		layout: "/admin"
	},
	{
		path: "/TicketsPromoter/NewItem",
		name: "Add Promotoras",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsPromoterEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsPromoter/ShowItem/:id",
		name: "View Promotoras",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsPromoterView,
		layout: "/admin"
	},
	{
		path: "/TicketsPromoter/EditItem/:id",
		name: "Edit Promotoras",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsPromoterEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsEvent/ListItems",
		name: "List Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsEventList,
		layout: "/admin"
	},
	{
		path: "/TicketsEvent/NewItem",
		name: "Add Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsEventEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsEvent/ShowItem/:id",
		name: "View Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsEventView,
		layout: "/admin"
	},
	{
		path: "/TicketsEvent/EditItem/:id",
		name: "Edit Eventos",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsEventEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsTicket/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsTicketList,
		layout: "/admin"		
	},
	{
		path: "/TicketsTicket/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsTicketEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsTicket/ShowItem/:id",
		name: "View Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsTicketView,
		layout: "/admin"
	},
	{
		path: "/TicketsTicket/EditItem/:id",
		name: "Edit Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsTicketEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCoupon/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Cupons",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCouponList,
		layout: "/admin"		
	},
	{
		path: "/TicketsCoupon/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Cupons",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCouponEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCoupon/ShowItem/:id",
		name: "View Cupons",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCouponView,
		layout: "/admin"
	},
	{
		path: "/TicketsCoupon/EditItem/:id",
		name: "Edit Cupons",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCouponEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsSale/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Meus Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsSaleList,
		layout: "/admin"		
	},
	{
		path: "/TicketsSale/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Meus Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsSaleEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsSale/ShowItem/:id",
		name: "View Meus Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsSaleView,
		layout: "/admin"
	},
	{
		path: "/TicketsSale/EditItem/:id",
		name: "Edit Meus Tickets",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsSaleEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCart/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartList,
		layout: "/admin"		
	},
	{
		path: "/TicketsCart/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCart/ShowItem/:id",
		name: "View Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartView,
		layout: "/admin"
	},
	{
		path: "/TicketsCart/EditItem/:id",
		name: "Edit Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCartItem/ListItems/:EntityPredesc/:IdPredesc",
		name: "List Item de Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartItemList,
		layout: "/admin"		
	},
	{
		path: "/TicketsCartItem/NewItem/:EntityPredesc/:IdPredesc",
		name: "Add Item de Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartItemEdit,
		layout: "/admin"
	},
	{
		path: "/TicketsCartItem/ShowItem/:id",
		name: "View Item de Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartItemView,
		layout: "/admin"
	},
	{
		path: "/TicketsCartItem/EditItem/:id",
		name: "Edit Item de Carrinho",
		icon: "ni ni-bullet-list-67 text-red",
		component: TicketsCartItemEdit,
		layout: "/admin"
	},
]

export default routes;