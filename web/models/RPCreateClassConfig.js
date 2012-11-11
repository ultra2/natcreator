Ext.define('web.model.RPCreateClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPCreateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string', debug: true }
		,{ name: 'name', type: 'string' }
		,{ name: 'types', type: 'auto', debug: true }
		,{ name: 'values', type: 'auto', debug: true }
		,{ name: 'defaultValue', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
