Ext.define('designer.model.RPIsAccountAvailable', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsAccountAvailable'
	
	,fields: [
		{ name: 'username', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPIsAccountAvailable'));
