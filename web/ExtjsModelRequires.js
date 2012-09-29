Ext.define('web.ExtjsModelRequires', { 
	Download: function() {
		Ext.syncRequire('web.model.CRBaseObject');
		Ext.syncRequire('web.model.RequestPost');
		Ext.syncRequire('web.model.RPLogin');
		Ext.syncRequire('web.model.RPLogout');
		Ext.syncRequire('web.model.RPRegistration');
		Ext.syncRequire('web.model.RPIsAccountAvailable');
		Ext.syncRequire('web.model.RPResetPassword');
		Ext.syncRequire('web.model.RPResetPasswordRequest');
		Ext.syncRequire('web.model.RPIsAuthenticated');
		Ext.syncRequire('web.model.RequestObject');
		Ext.syncRequire('web.model.ROAccountInfo');
	}
});
