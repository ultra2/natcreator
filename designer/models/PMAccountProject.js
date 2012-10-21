Ext.define('designer.model.PMAccountProject', { 
	extend: 'designer.model.PersistentMaster',
	alias: 'PMAccountProject'
	
	,fields: [
		{ name: 'account_id', type: 'string', debug: true }
		,{ name: 'project_id', type: 'string', debug: true }
		,{ name: 'role_id', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'account_id', type: 'presence' }
		,{ field: 'project_id', type: 'presence' }
		,{ field: 'role_id', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PMAccountProject'));
