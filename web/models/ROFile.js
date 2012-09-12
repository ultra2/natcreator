Ext.define('web.model.ROFile', { 
	extend: 'web.model.RequestObject',
	alias: 'ROFile'
	
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
