Ext.define('natcreator.model.RPModifyPackage', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'packageId', type: 'string' }
		,{ name: 'autoUpdate', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});
