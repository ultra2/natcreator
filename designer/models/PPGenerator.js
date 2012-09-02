Ext.define('designer.model.PPGenerator', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'source', type: 'string', defaultValue: 'function Generator(params) \n {     this.params = params; } ', debug: true }
		,{ name: 'origin_id', type: 'string' }
		,{ name: 'originRepo', type: 'string' }
		,{ name: 'originPath', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
		,{ field: 'source', type: 'presence' }
		,{ field: 'origin_id', type: 'presence' }
		,{ field: 'originRepo', type: 'presence' }
		,{ field: 'originPath', type: 'presence' }
	]
	,fieldInfos: [
	]
});
