Ext.define('natcreator.model.QRInstallablePackage', { 
	extend: 'NAT.data.QueryModel'
	
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
