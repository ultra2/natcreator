Ext.define('designer.model.RPSetHerokuApiKey', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPSetHerokuApiKey'
	
	,fields: [
		{ name: 'herokuApiKey', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
