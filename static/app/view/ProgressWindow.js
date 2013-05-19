Ext.define('natcreator.view.ProgressWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.ProgressWindow',
	
	bodyPadding: 20,
	closable: false,
	height: 400,
	layout: {
		type: 'fit'		
	},
	modal: true,
	width: 800,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'nattextarea',					
					fieldLabel: 'Progress Log',					
					itemId: 'txtProgressLog',					
					labelAlign: 'top',					
					readOnly: true					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
