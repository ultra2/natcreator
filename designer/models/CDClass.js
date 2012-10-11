Ext.define('designer.model.CDClass', { 
	extend: 'designer.model.ClientDesigner',
	alias: 'CDClass'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'mixins', type: 'auto' }
		,{ name: 'configs', type: 'auto' }
		,{ name: 'displayName', type: 'string' }
		,{ name: 'iconIndex', type: 'int' }
		,{ name: 'droppables', type: 'auto' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
