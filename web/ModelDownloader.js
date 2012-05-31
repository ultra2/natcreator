Ext.define('web.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('web.model.CRBaseObject');
 	 	 Ext.syncRequire('web.model.Communication');
 	 	 Ext.syncRequire('web.model.Login');
 	 	 Ext.syncRequire('web.model.Registration');
 	 	 Ext.syncRequire('web.model.AccountInfo');
 	 	 Ext.syncRequire('web.model.IsAccountAvailable');
 	 	 Ext.syncRequire('web.model.Logout');
 	 	 Ext.syncRequire('web.model.ResetPassword');
 	 	 Ext.syncRequire('web.model.ResetPasswordRequest');
 	 	 Ext.syncRequire('web.model.IsAuthenticated');
 	 }
 });
 