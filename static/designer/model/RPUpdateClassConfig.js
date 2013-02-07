Ext.define('designer.model.RPUpdateClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPUpdateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'newName', type: 'string' }
		,{ name: 'newValues', type: 'auto' }
		,{ name: 'newDefaultValue', type: 'auto' }
		,{ name: 'newNotAccepted', type: 'auto' }
		,{ name: 'newDependency', type: 'boolean' }
		,{ name: 'newHidden', type: 'boolean' }
		,{ name: 'newAdvanced', type: 'boolean' }
		,{ name: 'newParams', type: 'auto' }
		,{ name: 'newTypes', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPUpdateClassConfig'));
