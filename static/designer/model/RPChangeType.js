Ext.define('designer.model.RPChangeType', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPChangeType'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'metaNodeId', type: 'string' }
		,{ name: 'newTypeId', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPChangeType'));
