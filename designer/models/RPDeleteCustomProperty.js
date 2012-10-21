Ext.define('designer.model.RPDeleteCustomProperty', { 
	extend: 'designer.model.RequestPost',
	alias: 'RPDeleteCustomProperty'
	
	,fields: [
		{ name: 'customPropertyId', type: 'string', debug: true }
	]
	,associations: [
	]
	,validations: [
		{ field: 'customPropertyId', type: 'presence' }
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.RPDeleteCustomProperty'));
