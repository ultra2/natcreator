Ext.define('natcreator.model.QRInstalledPackage', { 
	extend: 'NAT.data.QueryModel'
	
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
