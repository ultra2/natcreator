Ext.define('web.model.ROFile', { 
	alias: 'ROFile'
	extend: 'web.model.RequestObject',
	
	,fields: [
		{ name: 'content', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'content', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
