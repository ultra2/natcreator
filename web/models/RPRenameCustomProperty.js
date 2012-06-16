Ext.define('web.model.RPRenameCustomProperty', { 
 	 extend: 'web.model.RequestPost',
 	 alias: 'RPRenameCustomProperty'
 	 
 	 ,fields: [
 	 	 { name: 'name', type: 'string' }
 	 ]
 	 ,associations: [
 	 ]
 	 ,validations: [
 	 	 { field: 'name', type: 'presence' }
 	 ]
 	 ,fieldInfos: [
 	 ]
 });
 