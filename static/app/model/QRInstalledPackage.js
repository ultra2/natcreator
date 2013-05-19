Ext.define('natcreator.model.QRInstalledPackage', { 
	extend: 'NAT.data.model.Query'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'description', type: 'string' }
		,{ name: 'currentVersion', type: 'int' }
		,{ name: 'availableVersion', type: 'int' }
		,{ name: 'autoUpdate', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'name', type: 'presence' }
	]
});
