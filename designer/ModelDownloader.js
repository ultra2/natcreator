Ext.define('designer.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('designer.model.CRBaseObject');
 	 	 Ext.syncRequire('designer.model.PersistentMaster');
 	 	 Ext.syncRequire('designer.model.CRAccountProjectRole');
 	 	 Ext.syncRequire('designer.model.CRAccountProject');
 	 	 Ext.syncRequire('designer.model.CRConnection');
 	 	 Ext.syncRequire('designer.model.CRProject');
 	 	 Ext.syncRequire('designer.model.CRAccount');
 	 	 Ext.syncRequire('designer.model.CRRegistration');
 	 	 Ext.syncRequire('designer.model.PersistentProject');
 	 	 Ext.syncRequire('designer.model.DataProperty');
 	 	 Ext.syncRequire('designer.model.Schema');
 	 	 Ext.syncRequire('designer.model.StringProperty');
 	 	 Ext.syncRequire('designer.model.BooleanProperty');
 	 	 Ext.syncRequire('designer.model.DateProperty');
 	 	 Ext.syncRequire('designer.model.IntProperty');
 	 	 Ext.syncRequire('designer.model.ReferenceProperty');
 	 	 Ext.syncRequire('designer.model.ObjectProperty');
 	 	 Ext.syncRequire('designer.model.AutoProperty');
 	 	 Ext.syncRequire('designer.model.GenerationStep');
 	 	 Ext.syncRequire('designer.model.ProjectSetting');
 	 	 Ext.syncRequire('designer.model.Generator');
 	 	 Ext.syncRequire('designer.model.SchemaGenerator');
 	 	 Ext.syncRequire('designer.model.SchemaListGenerator');
 	 	 Ext.syncRequire('designer.model.ClientDesigner');
 	 	 Ext.syncRequire('designer.model.CDMetaRow');
 	 	 Ext.syncRequire('designer.model.CDMetaCategoryRow');
 	 	 Ext.syncRequire('designer.model.CDMetaPropertyRow');
 	 	 Ext.syncRequire('designer.model.ClientWeb');
 	 	 Ext.syncRequire('designer.model.Request');
 	 	 Ext.syncRequire('designer.model.RQLogin');
 	 	 Ext.syncRequire('designer.model.RQRegistration');
 	 	 Ext.syncRequire('designer.model.RQFile');
 	 	 Ext.syncRequire('designer.model.RQAccountInfo');
 	 	 Ext.syncRequire('designer.model.RQIsAccountAvailable');
 	 	 Ext.syncRequire('designer.model.RQLogout');
 	 	 Ext.syncRequire('designer.model.RQResetPassword');
 	 	 Ext.syncRequire('designer.model.RQResetPasswordRequest');
 	 	 Ext.syncRequire('designer.model.RQIsAuthenticated');
 	 }
 });
 