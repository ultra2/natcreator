Ext.define('designer.model.RPPollLongTask', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPPollLongTask'
	
	,fields: [
		{ name: 'taskName', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPPollLongTask'));
