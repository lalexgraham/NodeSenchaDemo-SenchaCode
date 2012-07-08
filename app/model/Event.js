Ext.define("demo.model.Event", {
	extend: "Ext.data.Model",
	config: {
		fields: [
		 {name: "id", type: "string"},
		 {name: "markerID", type: "string"},
	     {name: "title", type: "string"},
	 	 {name: "description", type: "string"},
	 	 {name: "day", type: "string"},
	 	 {name: "time", type: "string"},
	 	 {name: "trueVenue", type: "string"},
	 	 {name: "venue", type: "string"}
		]
	}
});

