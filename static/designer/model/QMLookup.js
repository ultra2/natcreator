Ext.define('designer.model.QMLookup', { 
	extend: 'NAT.data.QueryModel'
	
	,fields: [
		{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
