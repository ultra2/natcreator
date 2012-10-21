Ext.define('designer.model.RPDeleteProject', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteProject'
	
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPDeleteProject'));
