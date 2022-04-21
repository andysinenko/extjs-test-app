Ext.define('MyApp.store.LocalPropertiesStore', {
    extend: 'Ext.data.Store',
    alias: 'store.localproperties',
    autoLoad: true,

    fields: [
        'id', 'propKey', 'propValue'
    ],

    proxy: {
        type: 'rest',
        url : 'http://localhost:8081/localproperties',
        useDefaultXhrHeader: false,
        headers: {
            'Accept': 'application/json',
            'Authorization':'Basic YWRtaW46MTIzNDU2',
        },
        reader: {
            type: 'json',
            headers: { 'Accept': 'application/json' },
            totalProperty  : 'total',
            successProperty: 'success',
            messageProperty: 'message'
        }
    }
});





