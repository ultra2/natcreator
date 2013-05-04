Ext.define('natcreator.model.PPData', { 
	extend: 'natcreator.model.PersistentProject'
	
	,fields: [
		{ name: 'deployToHerokuStatus', type: 'string' }
		,{ name: 'firstStart', type: 'boolean' }
	]
	,associations: [
	]
	,validations: [
	]
});
