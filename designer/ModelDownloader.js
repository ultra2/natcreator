Ext.define('designer.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('designer.model.CRBaseObject');
 	 	 Ext.syncRequire('designer.model.PersistentMaster');
 	 	 Ext.syncRequire('designer.model.PMAccountProjectRole');
 	 	 Ext.syncRequire('designer.model.PMAccountProject');
 	 	 Ext.syncRequire('designer.model.PMConnection');
 	 	 Ext.syncRequire('designer.model.PMProject');
 	 	 Ext.syncRequire('designer.model.PMAccount');
 	 	 Ext.syncRequire('designer.model.PMRegistration');
 	 	 Ext.syncRequire('designer.model.PersistentProject');
 	 	 Ext.syncRequire('designer.model.PPDataProperty');
 	 	 Ext.syncRequire('designer.model.PPSchema');
 	 	 Ext.syncRequire('designer.model.PPStringProperty');
 	 	 Ext.syncRequire('designer.model.PPBooleanProperty');
 	 	 Ext.syncRequire('designer.model.PPDateProperty');
 	 	 Ext.syncRequire('designer.model.PPIntProperty');
 	 	 Ext.syncRequire('designer.model.PPReferenceProperty');
 	 	 Ext.syncRequire('designer.model.PPObjectProperty');
 	 	 Ext.syncRequire('designer.model.PPAutoProperty');
 	 	 Ext.syncRequire('designer.model.PPGenerationStep');
 	 	 Ext.syncRequire('designer.model.PPProjectSetting');
 	 	 Ext.syncRequire('designer.model.PPGenerator');
 	 	 Ext.syncRequire('designer.model.PPSchemaGenerator');
 	 	 Ext.syncRequire('designer.model.PPSchemaListGenerator');
 	 	 Ext.syncRequire('designer.model.ClientDesigner');
 	 	 Ext.syncRequire('designer.model.CDMetaRow');
 	 	 Ext.syncRequire('designer.model.CDMetaCategoryRow');
 	 	 Ext.syncRequire('designer.model.CDMetaPropertyRow');
 	 	 Ext.syncRequire('designer.model.ClientWeb');
 	 	 Ext.syncRequire('designer.model.RequestGet');
 	 	 Ext.syncRequire('designer.model.RGResetPassword');
 	 	 Ext.syncRequire('designer.model.RequestPost');
 	 	 Ext.syncRequire('designer.model.RPLogin');
 	 	 Ext.syncRequire('designer.model.RPLogout');
 	 	 Ext.syncRequire('designer.model.RPRegistration');
 	 	 Ext.syncRequire('designer.model.RPIsAccountAvailable');
 	 	 Ext.syncRequire('designer.model.RPResetPassword');
 	 	 Ext.syncRequire('designer.model.RPResetPasswordRequest');
 	 	 Ext.syncRequire('designer.model.RPIsAuthenticated');
 	 	 Ext.syncRequire('designer.model.RPTestConnection');
 	 	 Ext.syncRequire('designer.model.RPOpenProject');
 	 	 Ext.syncRequire('designer.model.RPCloseProject');
 	 	 Ext.syncRequire('designer.model.RequestObject');
 	 	 Ext.syncRequire('designer.model.ROFile');
 	 	 Ext.syncRequire('designer.model.RPExportFiles');
 	 	 Ext.syncRequire('designer.model.ROAccountInfo');
 	 }
 });
 