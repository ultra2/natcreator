Ext.define('natcreator.model.CDInstallPackage', { 
	extend: 'natcreator.model.ClientDesigner'
	
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
