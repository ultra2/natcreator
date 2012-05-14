Ext.define('web.ModelDownloader', { 
 	 Download: function() {
 	 	 Ext.syncRequire('web.model.CRBaseObject');
 	 	 Ext.syncRequire('web.model.persistentM');
 	 	 Ext.syncRequire('web.model.CRAccountProjectRole');
 	 	 Ext.syncRequire('web.model.CRAccountProject');
 	 	 Ext.syncRequire('web.model.CRConnection');
 	 	 Ext.syncRequire('web.model.CRProject');
 	 	 Ext.syncRequire('web.model.CRAccount');
 	 	 Ext.syncRequire('web.model.persistentC');
 	 	 Ext.syncRequire('web.model.Schema');
 	 	 Ext.syncRequire('web.model.DataProperty');
 	 	 Ext.syncRequire('web.model.StringProperty');
 	 	 Ext.syncRequire('web.model.BooleanProperty');
 	 	 Ext.syncRequire('web.model.DateProperty');
 	 	 Ext.syncRequire('web.model.IntProperty');
 	 	 Ext.syncRequire('web.model.ReferenceProperty');
 	 	 Ext.syncRequire('web.model.ObjectProperty');
 	 	 Ext.syncRequire('web.model.AutoProperty');
 	 	 Ext.syncRequire('web.model.ProjectSetting');
 	 	 Ext.syncRequire('web.model.GenerationStep');
 	 	 Ext.syncRequire('web.model.Generator');
 	 	 Ext.syncRequire('web.model.SchemaGenerator');
 	 	 Ext.syncRequire('web.model.SchemaListGenerator');
 	 	 Ext.syncRequire('web.model.client');
 	 	 Ext.syncRequire('web.model.CRMetaRow');
 	 	 Ext.syncRequire('web.model.CRMetaCategoryRow');
 	 	 Ext.syncRequire('web.model.CRMetaPropertyRow');
 	 	 Ext.syncRequire('web.model.communication');
 	 	 Ext.syncRequire('web.model.Login');
 	 	 Ext.syncRequire('web.model.registration');
 	 	 Ext.syncRequire('web.model.File');
 	 	 Ext.syncRequire('web.model.AccountInfo');
 	 }
 });
 