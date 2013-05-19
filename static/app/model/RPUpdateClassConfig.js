Ext.define('natcreator.model.RPUpdateClassConfig', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'newName', type: 'string' }
		,{ name: 'newValues', type: 'auto' }
		,{ name: 'newDefaultValue', type: 'auto' }
		,{ name: 'newIsAccepted', type: 'auto' }
		,{ name: 'newDependency', type: 'boolean' }
		,{ name: 'newHidden', type: 'boolean' }
		,{ name: 'newCommon', type: 'boolean', defaultValue: 'true' }
		,{ name: 'newParams', type: 'auto' }
		,{ name: 'newTypes', type: 'auto' }
		,{ name: 'newGetValues', type: 'auto' }
		,{ name: 'newGetValue', type: 'auto' }
		,{ name: 'newRefType', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
