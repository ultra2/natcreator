Ext.define('designer.model.PPDateProperty', { 
	alias: 'PPDateProperty'
	extend: 'designer.model.PPDataProperty',
	
	,fields: [
		{ name: 'defaultValue', type: 'date', defaultValue: new Date(0) }
	]
	,associations: [
	]
	,validations: [
		{ field: 'defaultValue', type: 'presence' }
	]
	,fieldInfos: [
	]
});
