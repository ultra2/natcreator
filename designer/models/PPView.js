Ext.define('designer.model.PPView', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'config', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
