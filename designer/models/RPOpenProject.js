Ext.define('designer.model.RPOpenProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPOpenProject'
	
	,fields: [
		{ name: 'projectId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPOpenProject'));
