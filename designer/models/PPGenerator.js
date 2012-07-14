Ext.define('designer.model.PPGenerator', { 
	alias: 'PPGenerator'
	extend: 'designer.model.PersistentProject',
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'source', type: 'presence' }
	]
	,fieldInfos: [
	]
});
