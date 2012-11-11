Ext.define('designer.model.RPDeleteClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteClassConfig'
	
	,fields: [
		{ name: 'customPropertyId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'customPropertyId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
