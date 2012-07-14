Ext.define('web.model.PPDateProperty', { 
	alias: 'PPDateProperty'
	extend: 'web.model.PPDataProperty',
	
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
