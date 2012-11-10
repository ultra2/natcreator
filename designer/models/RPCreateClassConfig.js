Ext.define('designer.model.RPCreateClassConfig', { 
	extend: 'designer.model.RequestPost',
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
	]
	,fieldInfos: [
	]
});
