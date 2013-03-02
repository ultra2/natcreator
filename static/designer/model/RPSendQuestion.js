Ext.define('designer.model.RPSendQuestion', { 
	extend: 'designer.model.RequestPost'
	
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
