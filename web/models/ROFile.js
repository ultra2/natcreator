Ext.define('web.model.ROFile', { 
	extend: 'web.model.RequestObject',
	alias: 'ROFile'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'content', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'content', type: 'presence' }
	]
	,fieldInfos: [
	]
});
