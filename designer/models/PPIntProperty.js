Ext.define('designer.model.PPIntProperty', { 
	extend: 'designer.model.PPDataProperty',
	alias: 'PPIntProperty'
	
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
