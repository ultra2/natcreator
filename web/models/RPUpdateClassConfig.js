Ext.define('web.model.RPUpdateClassConfig', { 
	extend: 'web.model.RequestPost',
	alias: 'RPUpdateClassConfig'
	
	,fields: [
		{ name: 'classId', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'newName', type: 'string', debug: true }
		,{ name: 'newValues', type: 'auto', debug: true }
		,{ name: 'newDefaultValue', type: 'auto', debug: true }
		,{ name: 'newAccepted', type: 'auto', debug: true }
		,{ name: 'newNotAccepted', type: 'auto', debug: true }
		,{ name: 'newIsDependency', type: 'boolean', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('web.model.RPUpdateClassConfig'));
