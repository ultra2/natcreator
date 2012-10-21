Ext.define('designer.model.RPSendQuestion', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPSendQuestion'
	
	,fields: [
		{ name: 'subject', type: 'string', debug: true }
		,{ name: 'question', type: 'string', debug: true }
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
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPSendQuestion'));
