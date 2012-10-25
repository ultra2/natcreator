Ext.define('undefinedRPUpdateCustomProperty', { 
	extend: 'undefinedRequestPost',
	alias: 'RPUpdateCustomProperty'
	
	,fields: [
		{ name: 'customPropertyId', type: 'string', debug: true }
		,{ name: 'name', type: 'string', debug: true }
		,{ name: 'defaultValue', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'customPropertyId', type: 'presence' }
		,{ field: 'name', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('undefinedRPUpdateCustomProperty'));
