Ext.define('designer.model.PPCustomProperty', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPCustomProperty'
	
	,fields: [
		{ name: 'projectItem', type: 'string', debug: true }
		,{ name: 'type', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'defaultValue', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectItem', type: 'presence' }
		,{ field: 'type', type: 'presence' }
		,{ field: 'name', type: 'presence' }
		,{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPCustomProperty'));
