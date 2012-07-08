Ext.define('demo.controller.Main', {
    extend: 'Ext.app.Controller',
	config: {
		refs: {main:'main'},
		control: {
			'listMarkersCard': {
		        disclose: 'onDiscloseEvent'
			},
			main:{
				activeitemchange: 'activeItemChangeEvent'
			}
		} 
	},
	onDiscloseEvent: function(list, record, target, index, event, eOpts) {
		var eventStore = Ext.getStore('eventStore');
		eventStore.clearFilter();
		eventStore.getProxy().setUrl('http://high-frost-8468.herokuapp.com/events/'+record.data['markerID']);
		eventStore.load();
		this.getMain().setActiveItem(3);
	},
	activeItemChangeEvent: function (tabPanel, card, oldCard) {
		console.debug(card);
		console.debug(tabPanel);
		var eventsByLocationCard = tabPanel.innerItems[3];
		if (card.id == 'ext-listCard-1') {
			console.log('List All Events selected');
			var eventStore = Ext.getStore('eventStore');
			eventStore.clearFilter();
			eventStore.getProxy().setUrl('http://high-frost-8468.herokuapp.com/events');
			eventStore.load();
		}
		if (card.id =='ext-eventsByLocationCard-1'){
			card.setDisabled(false);		
		} else {
			eventsByLocationCard.setDisabled(true);
		}
	}
});
