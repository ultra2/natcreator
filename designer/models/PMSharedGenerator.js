Ext.define('designer.model.PMSharedGenerator', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMSharedGenerator'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
