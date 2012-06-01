Ext.define('web.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('web.model.CRBaseObject');
 	 	 Ext.syncRequire('web.model.Request');
 	 	 Ext.syncRequire('web.model.RQLogin');
 	 	 Ext.syncRequire('web.model.RQRegistration');
 	 	 Ext.syncRequire('web.model.RQAccountInfo');
 	 	 Ext.syncRequire('web.model.RQIsAccountAvailable');
 	 	 Ext.syncRequire('web.model.RQLogout');
 	 	 Ext.syncRequire('web.model.RQResetPassword');
 	 	 Ext.syncRequire('web.model.RQResetPasswordRequest');
 	 	 Ext.syncRequire('web.model.RQIsAuthenticated');
 	 }
 });
 