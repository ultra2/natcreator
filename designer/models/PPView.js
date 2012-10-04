Ext.define('designer.model.PPView', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'config', type: 'string' }
		,{ name: 'source', type: 'string', persist: false }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
