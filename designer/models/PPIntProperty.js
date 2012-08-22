Ext.define('undefinedPPIntProperty', { 
	extend: 'undefinedPPDataProperty',
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
