Ext.define('natcreator.model.QRAvailablePackage', { 
	extend: 'NAT.data.QueryModel'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'version', type: 'int' }
	]
	,associations: [
	]
	,validations: [
	]
});
