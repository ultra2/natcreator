Ext.define('designer.model.RPIsAccountAvailable', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPIsAccountAvailable'
	
	,fields: [
		{ name: 'username', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'username', type: 'presence' }
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPIsAccountAvailable'));
