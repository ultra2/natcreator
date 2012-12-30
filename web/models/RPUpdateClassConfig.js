Ext.define('web.model.RPUpdateClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPUpdateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'newName', type: 'string' }
		,{ name: 'newValues', type: 'auto' }
		,{ name: 'newDefaultValue', type: 'auto' }
		,{ name: 'newAccepted', type: 'auto' }
		,{ name: 'newNotAccepted', type: 'auto' }
		,{ name: 'newDependency', type: 'boolean' }
		,{ name: 'newHidden', type: 'boolean' }
		,{ name: 'newAdvanced', type: 'boolean' }
		,{ name: 'newParams', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
