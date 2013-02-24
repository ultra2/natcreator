Ext.define('designer.view.generated.CreateToolboxGroupWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.CreateToolboxGroupWindow',
	
	modal: true,
	layout: {
		type: 'fit'		
	},
	title: 'New Toolbox Group',
	resizable: false,
	width: 400,
	height: 166,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5',					
						minWidth: 80					
					},					
					dock: 'bottom',					
					layout: {
						type: 'hbox',						
						padding: '5',						
						pack: 'end',						
						align: 'middle'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnOk',							
							text: 'Ok',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							text: 'Cancel'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'natform',					
					bodyPadding: 10,					
					itemId: 'ed',					
					layout: {
						type: 'vbox',						
						align: 'stretch'						
					},					
					items: [
						{
							xtype: 'component',							
							html: 'Type a name for the new toolbox group',							
							margin: '5 0 5 0'							
						},						
						{
							xtype: 'nattextfield',							
							fieldLabel: 'Name',							
							itemId: 'txtName',							
							labelWidth: 60,							
							propertyPath: 'name'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
