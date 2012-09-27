Ext.define('designer.model.PPView', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'json', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'json', type: 'presence' }
	]
	,fieldInfos: [
	]
});
