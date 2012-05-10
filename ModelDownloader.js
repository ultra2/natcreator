Ext.define('designer.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('designer.model.CRBaseObject');
 	 	 Ext.syncRequire('designer.model.persistent');
 	 	 Ext.syncRequire('designer.model.client');
 	 	 Ext.syncRequire('designer.model.communication');
 	 	 Ext.syncRequire('designer.model.Login');
 	 	 Ext.syncRequire('designer.model.registration');
 	 }
 });
 