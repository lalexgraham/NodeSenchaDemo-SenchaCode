Ext.define('demo.view.List', {
    extend: 'Ext.List',
    xtype: 'listCard',
    requires: ['demo.store.Events'],    
    config: {
        itemTpl: '{title} - {day} {time}',
     	store: 'eventStore'
    }
});

