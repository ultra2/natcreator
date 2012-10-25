Ext.define('undefinedRPSendQuestion', { 
	extend: 'undefinedRequestPost',
	alias: 'RPSendQuestion'
	
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
	,fieldInfos: [
	]
});
