Ext.define('natcreator.model.RPDeleteClassConfig', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
