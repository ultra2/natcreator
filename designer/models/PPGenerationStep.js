Ext.define('designer.model.PPGenerationStep', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPGenerationStep'
	
	,fields: [
		{ name: 'generator_id', type: 'string', debug: true }
		,{ name: 'path', type: 'string', debug: true }
		,{ name: 'projectSetting_id', type: 'string', debug: true }
		,{ name: 'deleteDirectory', type: 'boolean', debug: true }
		,{ name: 'active', type: 'boolean', defaultValue: true, debug: true }
		,{ name: 'params', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'generator_id', type: 'presence' }
		,{ field: 'path', type: 'presence' }
		,{ field: 'projectSetting_id', type: 'presence' }
		,{ field: 'deleteDirectory', type: 'presence' }
		,{ field: 'active', type: 'presence' }
		,{ field: 'params', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPGenerationStep'));
