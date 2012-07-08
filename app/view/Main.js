Ext.define('demo.view.Main', {
    extend: 'Ext.TabPanel',
	xtype: 'main',
    config: {
		defaults: {
			styleHtmlContent: true
		},
        items: [
			{
				title: 'Home',
				html: 'Sencha Touch 2 Demo'
			},
			{
				title: 'List All Events',
				xtype: 'listCard'
			},
			{
				title: 'List All Locations',
				xtype: 'listMarkersCard'
			},
			{
				title: 'Events At Location',
				xtype: 'eventsByLocationCard',
				disabled: true
			}
		]
    }
});

