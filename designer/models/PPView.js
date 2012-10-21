Ext.define('designer.model.PPView', { 
	extend: 'designer.model.PPProjectItem',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string', debug: true }
		,{ name: 'alias', type: 'string', debug: true }
		,{ name: 'meta', type: 'auto', debug: true }
		,{ name: 'config', type: 'auto', persist: false, debug: true }
		,{ name: 'source', type: 'string', persist: false, debug: true }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
Ext.data.NodeInterface.decorate(Ext.create('designer.model.PPView'));
