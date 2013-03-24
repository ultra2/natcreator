Ext.define('designer.model.RPDeleteClassConfig', { 
	extend: 'designer.model.RequestPost'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
