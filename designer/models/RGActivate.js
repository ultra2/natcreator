Ext.define('designer.model.RGActivate', { 
	alias: 'RGActivate'
	extend: 'designer.model.RequestGet',
	
	,fields: [
		{ name: 'key', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'key', type: 'presence' }
	]
	,fieldInfos: [
	]
});
