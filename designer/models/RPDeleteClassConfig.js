Ext.define('designer.model.RPDeleteClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
