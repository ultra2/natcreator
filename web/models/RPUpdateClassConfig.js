Ext.define('web.model.RPUpdateClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPUpdateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'newName', type: 'string', debug: true }
		,{ name: 'defaultValue', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.RPUpdateClassConfig'));
