Ext.define('natcreator.model.QRInstallablePackage', { 
	extend: 'NAT.data.model.Query'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'install', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});
