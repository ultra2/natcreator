Ext.define('designer.view.generated.CreateGeneratorWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.CreateGeneratorWindow',
	
	modal: true,
	title: 'New Generator',
	layout: {
		type: 'fit'		
	},
	resizable: false,
	width: 400,
	height: 150,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					defaults: {					
						margins: '0 0 0 5',					
						autoWidth: true					
					},					
					height: 30,					
					cls: 'commandpanel',					
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
							text: 'Save',							
							ui: 'green',							
							itemId: 'btnSave'							
						},						
						{
							xtype: 'natbutton',							
							text: 'Cancel',							
							itemId: 'btnCancel'							
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
							margin: '5 0 5 0',							
							html: 'Type a name for the new generator'							
						},						
						{
							xtype: 'nattextfield',							
							labelWidth: 60,							
							fieldLabel: 'Name',							
							propertyPath: 'name',							
							itemId: 'txtName'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
