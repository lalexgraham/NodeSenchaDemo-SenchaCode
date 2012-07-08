Ext.define('demo.view.EventsByLocation', {
    extend: 'Ext.List',
    xtype: 'eventsByLocationCard',
    requires: ['demo.store.Events'],    
    config: {
        itemTpl: '{title} - {day} {time}',
     	store: 'eventStore'
    }
});

