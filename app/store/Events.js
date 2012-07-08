Ext.define('demo.store.Events', {
	extend: "Ext.data.Store",
	config: {
		storeId: 'eventStore',
		model: "demo.model.Event",
	//	autoLoad: true,
		proxy: {
			type: 'jsonp',
			callbackKey: 'callback',
        	url: 'http://high-frost-8468.herokuapp.com/events',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	}
	}
});


