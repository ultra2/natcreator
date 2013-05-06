Ext.define('natcreator.model.RPSendQuestion', { 
	extend: 'natcreator.model.RequestPost'
	
	,fields: [
		{ name: 'subject', type: 'string' }
		,{ name: 'question', type: 'string' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'subject', type: 'presence' }
		,{ field: 'question', type: 'presence' }
	]
});
