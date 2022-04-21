
/**
 * The Data Model for a Partner Row in Partner List
 */

Ext.define('Admin.model.list.Users', {
    extend: 'Ext.data.Model',

	field: [
		{ name: 'id', type: 'number' },
		{ name: 'username', type: 'string' }/*,
		{ name: 'lastLogin', type:'date', dateFormat:'c' },
		{ name: 'numLogins', type: 'number' }*/
	]
});
