Ext.define('designer.model.QueryResult', { 
	extend: 'NAT.data.ClientModel'
	
	,fields: [
		{ name: '_created', type: 'date', defaultValue: new Date(0) }
		,{ name: '_modified', type: 'date', defaultValue: new Date(0) }
		,{ name: '_deleted', type: 'boolean' }
		,{ name: '_version', type: 'int' }
	]
	,associations: [
	]
	,validations: [
		{ field: '_created', type: 'presence' }
		,{ field: '_modified', type: 'presence' }
		,{ field: '_version', type: 'presence' }
	]
});
