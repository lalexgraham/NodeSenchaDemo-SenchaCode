Ext.define("demo.model.Marker", {
	extend: "Ext.data.Model",
	config: {
		fields: [
		 {name: "markerID", type: "string"},
	     {name: "title", type: "string"},
	 	 {name: "lng", type: "string"},
	 	 {name: "lat", type: "string"},
	 	 {name: "icon", type: "string"},
	 	 {name: "description", type: "string"}
		] 
	}
});

