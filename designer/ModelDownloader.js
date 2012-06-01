Ext.define('designer.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('designer.model.CRBaseObject');
 	 	 Ext.syncRequire('designer.model.PersistentM');
 	 	 Ext.syncRequire('designer.model.CRAccountProjectRole');
 	 	 Ext.syncRequire('designer.model.CRAccountProject');
 	 	 Ext.syncRequire('designer.model.CRConnection');
 	 	 Ext.syncRequire('designer.model.CRProject');
 	 	 Ext.syncRequire('designer.model.CRAccount2');
 	 	 Ext.syncRequire('designer.model.CRRegistration');
 	 	 Ext.syncRequire('designer.model.PersistentC');
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
 	 	 Ext.syncRequire('designer.model.Client');
 	 	 Ext.syncRequire('designer.model.CRMetaRow');
 	 	 Ext.syncRequire('designer.model.CRMetaCategoryRow');
 	 	 Ext.syncRequire('designer.model.CRMetaPropertyRow');
 	 	 Ext.syncRequire('designer.model.Communication');
 	 	 Ext.syncRequire('designer.model.Login');
 	 	 Ext.syncRequire('designer.model.Registration');
 	 	 Ext.syncRequire('designer.model.File');
 	 	 Ext.syncRequire('designer.model.AccountInfo');
 	 	 Ext.syncRequire('designer.model.IsAccountAvailable');
 	 	 Ext.syncRequire('designer.model.Logout');
 	 	 Ext.syncRequire('designer.model.ResetPassword');
 	 	 Ext.syncRequire('designer.model.ResetPasswordRequest');
 	 	 Ext.syncRequire('designer.model.IsAuthenticated');
 	 }
 });
 