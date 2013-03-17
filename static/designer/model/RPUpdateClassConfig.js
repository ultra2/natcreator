Ext.define('designer.model.RPUpdateClassConfig', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
		,{ name: 'newName', type: 'string' }
		,{ name: 'newValues', type: 'auto' }
		,{ name: 'newDefaultValue', type: 'auto' }
		,{ name: 'newNotAccepted', type: 'auto' }
		,{ name: 'newDependency', type: 'boolean' }
		,{ name: 'newHidden', type: 'boolean' }
		,{ name: 'newCommon', type: 'boolean', defaultValue: 'true' }
		,{ name: 'newParams', type: 'auto' }
		,{ name: 'newTypes', type: 'auto' }
		,{ name: 'newReftoGetValues', type: 'auto' }
		,{ name: 'newReftoGetValue', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
});
