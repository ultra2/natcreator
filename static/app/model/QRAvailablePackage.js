Ext.define('natcreator.model.QRAvailablePackage', { 
	extend: 'NAT.data.model.Query'
	
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
