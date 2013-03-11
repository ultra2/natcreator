Ext.define('designer.view.generated.GenerationWindow', { 
	extend: 'NAT.window.Window',
	alias: 'widget.GenerationWindow',
	
	bodyPadding: 20,
	closable: false,
	height: 400,
	layout: {
		type: 'vbox',		
		align: 'stretch'		
	},
	modal: true,
	title: 'Code Generation',
	width: 800,
	
	initComponent: function(){
		var me = this;
		Ext.applyIf(me, {
			dockedItems: [
				{
					xtype: 'container',					
					cls: 'commandpanel',					
					defaults: {					
						margins: '0 0 0 5'					
					},					
					dock: 'bottom',					
					height: 30,					
					layout: {
						type: 'hbox',						
						align: 'middle',						
						pack: 'end',						
						padding: '5'						
					},					
					items: [
						{
							xtype: 'natbutton',							
							itemId: 'btnOpenRepository',							
							minWidth: 100,							
							text: 'Open Repository',							
							ui: 'green'							
						},						
						{
							xtype: 'natbutton',							
							itemId: 'btnClose',							
							minWidth: 100,							
							text: 'Close'							
						}						
					]					
				}				
			],			
			items: [
				{
					xtype: 'nattextarea',					
					fieldLabel: 'Generation log',					
					flex: 1,					
					itemId: 'txtGenerationLog',					
					labelAlign: 'top',					
					readOnly: true					
				},				
				{
					xtype: 'natcheckboxfield',					
					boxLabel: 'Close this window if code generation was successful',					
					itemId: 'chCloseOnSuccessful',					
					margin: '5 0 0 0'					
				}				
			]			
		});
		me.callParent(arguments);
	}
});
