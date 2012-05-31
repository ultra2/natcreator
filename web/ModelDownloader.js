Ext.define('web.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('web.model.CRBaseObject');
 	 	 Ext.syncRequire('web.model.Communication');
 	 	 Ext.syncRequire('web.model.Login');
 	 	 Ext.syncRequire('web.model.Registration');
 	 	 Ext.syncRequire('web.model.AccountInfo');
 	 	 Ext.syncRequire('web.model.IsAccountAvailable');
 	 }
 });
 