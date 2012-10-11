Ext.define('designer.model.PPView', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'meta', type: 'string' }
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
