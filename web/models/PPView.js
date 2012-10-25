Ext.define('undefinedPPView', { 
	extend: 'undefinedPPProjectItem',
	alias: 'PPView'
	
	,fields: [
		{ name: 'name', type: 'string' }
		,{ name: 'alias', type: 'string' }
		,{ name: 'meta', type: 'auto' }
		,{ name: 'config', type: 'auto', persist: false }
	]
	,associations: [
	]
	,validations: [
	]
	,fieldInfos: [
	]
});
