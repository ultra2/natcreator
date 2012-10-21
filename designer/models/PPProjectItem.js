Ext.define('designer.model.PPProjectItem', { 
	extend: 'designer.model.PersistentProject',
	alias: 'PPProjectItem'
	
	,fields: [
		{ name: 'userConfig', type: 'auto', debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPProjectItem'));
