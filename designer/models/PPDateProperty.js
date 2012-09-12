Ext.define('designer.model.PPDateProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPDateProperty'
	
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
