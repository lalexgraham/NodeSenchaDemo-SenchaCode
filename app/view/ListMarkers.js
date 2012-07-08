Ext.define('demo.view.ListMarkers', {
    extend: 'Ext.List',
    xtype: 'listMarkersCard',
    requires: ['demo.store.Markers'],  
	config: {
		 onItemDisclosure: true /*function (record, btn, index) {
			console.log(record.data);
			demo.controller.Main.setActiveItem(3);
		}*/,
        itemTpl: '{title}',
     	store: 'markerStore'
    }
});

