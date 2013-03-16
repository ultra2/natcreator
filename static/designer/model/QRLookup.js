Ext.define('designer.model.QRLookup', { 
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
