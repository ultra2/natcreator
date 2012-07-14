Ext.define('designer.model.PPIntProperty', { 
	alias: 'PPIntProperty'
	extend: 'designer.model.PPDataProperty',
	
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
