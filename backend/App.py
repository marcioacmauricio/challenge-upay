import sys
import tornado.ioloop
import tornado.web
from api.routes import *
if __name__ == "__main__":
	application = tornado.web.Application([
        (r'/MasterModelTable', MasterModelTableRoute ),		
		(r'/MasterModelTable/ShowItem/(\d+$)', MasterModelTableRoute ),
		(r'/MasterModelTable/ListItems', MasterModelTableRoute),
        (r'/MasterUser', MasterUserRoute ),		
		(r'/MasterUser/ShowItem/(\d+$)', MasterUserRoute ),
		(r'/MasterUser/ListItems', MasterUserRoute),
        (r'/MasterAddress', MasterAddressRoute ),		
		(r'/MasterAddress/ShowItem/(\d+$)', MasterAddressRoute ),
		(r'/MasterAddress/ListItems/(.*)/(\d+$)', MasterAddressRoute ),
        (r'/MasterTablePermission', MasterTablePermissionRoute ),		
		(r'/MasterTablePermission/ShowItem/(\d+$)', MasterTablePermissionRoute ),
		(r'/MasterTablePermission/ListItems', MasterTablePermissionRoute),
        (r'/MasterColumnPermission', MasterColumnPermissionRoute ),		
		(r'/MasterColumnPermission/ShowItem/(\d+$)', MasterColumnPermissionRoute ),
		(r'/MasterColumnPermission/ListItems/(.*)/(\d+$)', MasterColumnPermissionRoute ),
        (r'/MasterMailConfirmation', MasterMailConfirmationRoute ),		
		(r'/MasterMailConfirmation/ShowItem/(\d+$)', MasterMailConfirmationRoute ),
		(r'/MasterMailConfirmation/ListItems/(.*)/(\d+$)', MasterMailConfirmationRoute ),
        (r'/MasterMailTemplate', MasterMailTemplateRoute ),		
		(r'/MasterMailTemplate/ShowItem/(\d+$)', MasterMailTemplateRoute ),
		(r'/MasterMailTemplate/ListItems', MasterMailTemplateRoute),
        (r'/MasterPasswordRecovery', MasterPasswordRecoveryRoute ),		
		(r'/MasterPasswordRecovery/ShowItem/(\d+$)', MasterPasswordRecoveryRoute ),
		(r'/MasterPasswordRecovery/ListItems/(.*)/(\d+$)', MasterPasswordRecoveryRoute ),
        (r'/MasterResource', MasterResourceRoute ),		
		(r'/MasterResource/ShowItem/(\d+$)', MasterResourceRoute ),
		(r'/MasterResource/ListItems', MasterResourceRoute),
        (r'/MasterUserGroup', MasterUserGroupRoute ),		
		(r'/MasterUserGroup/ShowItem/(\d+$)', MasterUserGroupRoute ),
		(r'/MasterUserGroup/ListItems', MasterUserGroupRoute),
        (r'/MasterUserGroupResource', MasterUserGroupResourceRoute ),		
		(r'/MasterUserGroupResource/ShowItem/(\d+$)', MasterUserGroupResourceRoute ),
		(r'/MasterUserGroupResource/ListItems/(.*)/(\d+$)', MasterUserGroupResourceRoute ),
        (r'/MasterUserUserGroup', MasterUserUserGroupRoute ),		
		(r'/MasterUserUserGroup/ShowItem/(\d+$)', MasterUserUserGroupRoute ),
		(r'/MasterUserUserGroup/ListItems/(.*)/(\d+$)', MasterUserUserGroupRoute ),
        (r'/MasterAuthentication', MasterAuthenticationRoute ),		
		(r'/MasterAuthentication/ShowItem/(\d+$)', MasterAuthenticationRoute ),
		(r'/MasterAuthentication/ListItems/(.*)/(\d+$)', MasterAuthenticationRoute ),
		(r'/Helpers', Helpers ),
		(r'/Register', Register )
	], debug=True)    
	application.listen(8081)
	tornado.ioloop.IOLoop.instance().start()