Ext.define('designer.model.RPUpdateClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPUpdateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'newName', type: 'string' }
		,{ name: 'newValues', type: 'auto' }
		,{ name: 'newDefaultValue', type: 'auto' }
		,{ name: 'newAccepted', type: 'auto' }
		,{ name: 'newNotAccepted', type: 'auto' }
		,{ name: 'newIsDependency', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});