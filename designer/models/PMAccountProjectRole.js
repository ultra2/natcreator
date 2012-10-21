Ext.define('designer.model.PMAccountProjectRole', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMAccountProjectRole'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMAccountProjectRole'));
