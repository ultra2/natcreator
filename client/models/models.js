Ext.define('designer.model.CRBaseObject', { 
 	 extend: 'natjs.data.NATModel',
 	 alias: 'CRBaseObject'
 	 
 	 ,fields: [
 	 	 { name: '_id', type: 'string', debug: true }
 	 	 ,{ name: 'name', type: 'string', defaultValue: 'new' }
 	 	 ,{ name: 'displayName', type: 'string' }
 	 	 ,{ name: 'remark', type: 'string' }
 	 	 ,{ name: 'isSystem', type: 'boolean', debug: true }
 	 	 ,{ name: 'created', type: 'date', defaultValue: new Date(0) }
 	 	 ,{ name: 'modified', type: 'date', defaultValue: new Date(0), debug: true }
 	 	 ,{ name: 'deleted', type: 'boolean', debug: true }
 	 	 ,{ name: 'version', type: 'int', debug: true }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.CRAccount', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRAccount'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.CRConnection', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRConnection'
 	 
 	 ,fields: [
 	 	 { name: 'username', type: 'string' }
 	 	 ,{ name: 'password', type: 'string' }
 	 	 ,{ name: 'database', type: 'string' }
 	 	 ,{ name: 'server', type: 'string' }
 	 	 ,{ name: 'port', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.CRProject', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRProject'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 	 { type: 'belongsTo', name: 'connection', model: 'designer.model.CRConnection' }
 	 ]
 });
  
 Ext.define('designer.model.CRAccountProject', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRAccountProject'
 	 
 	 ,fields: [
 	 	 { name: 'account_id', type: 'string' }
 	 	 ,{ name: 'project_id', type: 'string' }
 	 	 ,{ name: 'role_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.CRAccountProjectRole', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRAccountProjectRole'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.Generator', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'Generator'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.SchemaGenerator', { 
 	 extend: 'designer.model.Generator',
 	 alias: 'SchemaGenerator'
 	 
 	 ,fields: [
 	 	 { name: 'source', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.SchemaListGenerator', { 
 	 extend: 'designer.model.Generator',
 	 alias: 'SchemaListGenerator'
 	 
 	 ,fields: [
 	 	 { name: 'source', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.GenerationStep', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'GenerationStep'
 	 
 	 ,fields: [
 	 	 { name: 'generator_id', type: 'string' }
 	 	 ,{ name: 'path', type: 'string' }
 	 	 ,{ name: 'projectSetting_id', type: 'string' }
 	 	 ,{ name: 'deleteDirectory', type: 'boolean' }
 	 	 ,{ name: 'active', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.File', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'File'
 	 
 	 ,fields: [
 	 	 { name: 'content', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.DataProperty', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'DataProperty'
 	 
 	 ,fields: [
 	 	 { name: 'index', type: 'int' }
 	 	 ,{ name: 'isKey', type: 'boolean' }
 	 	 ,{ name: 'isDebug', type: 'boolean' }
 	 	 ,{ name: 'isNullable', type: 'boolean' }
 	 	 ,{ name: 'isArray', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.Schema', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'Schema'
 	 
 	 ,fields: [
 	 	 { name: 'isHierarchy', type: 'boolean' }
 	 	 ,{ name: 'parentId', type: 'string' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'properties', associationKey: 'properties', model: 'designer.model.DataProperty' , primaryKey: '_id' }
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.Schema'));
  
 Ext.define('designer.model.ProjectSetting', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'ProjectSetting'
 	 
 	 ,fields: [
 	 	 { name: 'repositoryName', type: 'string' }
 	 	 ,{ name: 'repositoryHost', type: 'string' }
 	 	 ,{ name: 'fontSize', type: 'int' }
 	 ]
 	 ,associations: [
 	 	 { type: 'hasMany', name: 'generationSteps', associationKey: 'generationSteps', model: 'designer.model.GenerationStep' , primaryKey: '_id' }
 	 ]
 });
  
 Ext.define('designer.model.StringProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'StringProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'string' }
 	 	 ,{ name: 'maxLength', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.BooleanProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'BooleanProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'boolean' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.DateProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'DateProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'date', defaultValue: 'Fri Apr 27 2012 21:45:43 GMT+0200 (Central Europe Daylight Time)' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.IntProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'IntProperty'
 	 
 	 ,fields: [
 	 	 { name: 'defaultValue', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.ReferenceProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'ReferenceProperty'
 	 
 	 ,fields: [
 	 	 { name: 'type_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.ObjectProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'ObjectProperty'
 	 
 	 ,fields: [
 	 	 { name: 'type_id', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.AutoProperty', { 
 	 extend: 'designer.model.DataProperty',
 	 alias: 'AutoProperty'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 });
  
 Ext.define('designer.model.CRMetaRow', { 
 	 extend: 'designer.model.CRBaseObject',
 	 alias: 'CRMetaRow'
 	 
 	 ,fields: [
 	 	 { name: 'parentId', type: 'string' }
 	 	 ,{ name: 'depth', type: 'int' }
 	 	 ,{ name: 'leaf', type: 'boolean' }
 	 	 ,{ name: 'index', type: 'int' }
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaRow'));
  
 Ext.define('designer.model.CRMetaCategoryRow', { 
 	 extend: 'designer.model.CRMetaRow',
 	 alias: 'CRMetaCategoryRow'
 	 
 	 ,fields: [
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaCategoryRow'));
  
 Ext.define('designer.model.CRMetaPropertyRow', { 
 	 extend: 'designer.model.CRMetaRow',
 	 alias: 'CRMetaPropertyRow'
 	 
 	 ,fields: [
 	 	 { name: 'type', type: 'string' }
 	 	 ,{ name: 'value', type: 'auto' }
 	 ]
 	 ,associations: [
 	 ]
 });
 Ext.data.NodeInterface.decorate(Ext.create('designer.model.CRMetaPropertyRow'));
  
 