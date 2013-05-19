Ext.define('natcreator.view.MessageWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.messagewindow',
	
	bodyPadding: 10,
	closable: false,
	height: 250,
	layout: {
		type: 'hbox'		
	},
	modal: true,
	resizable: false,
	width: 500,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			items: [
				{
					xtype: 'image',					
					height: 70,					
					itemId: 'img',					
					src: 'https://extsolutions.herokuapp.com/graphics/image/message.png',					
					width: 70					
				},				
				{
					xtype: 'component',					
					flex: 1,					
					html: 'message',					
					itemId: 'lMessage',					
					margin: '10 10 10 10'					
				}				
			],			
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						flex: 1,					
					    margin: '0 5'					
					},					
					dock: 'bottom',					
					height: 50,					
					layout: {
						type: 'hbox',						
						align: 'stretch',						
						padding: '10'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnCancel',							
							text: 'Cancel',							
							ui: 'gray'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnNo',							
							text: 'No',							
							ui: 'gray'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnDontSave',							
							text: 'Don\'t Save',							
							ui: 'gray'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnOk',							
							text: 'Ok',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnYes',							
							text: 'Yes',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnSave',							
							text: 'Save',							
							ui: 'green'							
						}						
					]					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
