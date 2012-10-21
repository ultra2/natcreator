Ext.define('designer.model.RPIsProjectNameAvailable', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsProjectNameAvailable'
	
	,fields: [
		{ name: 'projectName', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'projectName', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPIsProjectNameAvailable'));
