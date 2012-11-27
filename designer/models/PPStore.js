Ext.define('designer.model.PPStore', { 
	extend: 'designer.model.PPProjectItem',
	alias: 'PPStore'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'alias', type: 'string', debug: true }
		,{ name: 'meta', type: 'auto', debug: true }
		,{ name: 'config', type: 'auto', persist: false, debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPStore'));
