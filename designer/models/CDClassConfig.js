Ext.define('designer.model.CDClassConfig', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClassConfig'
	
	,fields: [
		{ name: 'types', type: 'auto', debug: true }
		,{ name: 'values', type: 'auto', debug: true }
		,{ name: 'defaultValue', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.CDClassConfig'));
