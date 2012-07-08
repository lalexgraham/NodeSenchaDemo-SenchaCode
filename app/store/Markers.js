Ext.define('demo.store.Markers', {
	extend: "Ext.data.Store",
	config: {
		storeId: 'markerStore',
		model: "demo.model.Marker",
		autoLoad: true,
		proxy: {
			type: 'jsonp',
			callbackKey: 'callback',
        	url: 'http://high-frost-8468.herokuapp.com/markers',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	}
	}
});


