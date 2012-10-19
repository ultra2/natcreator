Ext.define('web.model.PPView', { 
	extend: 'web.model.PPProjectItem',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'meta', type: 'auto' }
		,{ name: 'config', type: 'auto', persist: false }
		,{ name: 'source', type: 'string', persist: false }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
