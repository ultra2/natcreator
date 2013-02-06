Ext.define('designer.model.RPDeleteClassConfig', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPDeleteClassConfig'));
