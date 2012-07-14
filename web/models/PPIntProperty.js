Ext.define('web.model.PPIntProperty', { 
	alias: 'PPIntProperty'
	extend: 'web.model.PPDataProperty',
	
	,fields: [
		{ name: 'defaultValue', type: 'int' }
		,{ name: 'minValue', type: 'int' }
		,{ name: 'maxValue', type: 'int' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
