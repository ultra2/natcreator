Ext.define('designer.model.RPRenameCustomProperty', { 
 	 extend: 'designer.model.RequestPost',
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
 