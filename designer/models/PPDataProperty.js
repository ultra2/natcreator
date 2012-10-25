Ext.define('undefinedPPDataProperty', { 
	extend: 'undefinedPPProjectItem',
	alias: 'PPDataProperty'
	
	,fields: [
		{ name: 'isKey', type: 'boolean' }
		,{ name: 'isNullable', type: 'boolean' }
		,{ name: 'isArray', type: 'boolean' }
		,{ name: 'name', type: 'string' }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
