Ext.define('web.model.RPDeleteClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPDeleteClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
