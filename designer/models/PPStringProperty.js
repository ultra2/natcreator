Ext.define('designer.model.PPStringProperty', { 
	alias: 'PPStringProperty'
	extend: 'designer.model.PPDataProperty',
	
	,fields: [
		{ name: 'defaultValue', type: 'string' }
		,{ name: 'minLength', type: 'int' }
		,{ name: 'vFormat', type: 'string' }
		,{ name: 'maxLength', type: 'int' }
	]
	,associations: [
	]
	,validations: [
		{ field: 'vFormat', type: 'presence' }
	]
	,fieldInfos: [
	]
});
