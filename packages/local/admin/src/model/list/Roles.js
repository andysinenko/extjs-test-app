
/**
 * The Data Model for a Partner Row in Partner List
 */

Ext.define('Admin.model.list.Roles', {
    extend: 'Ext.data.Model',

	field: [
		{ name: 'id', type: 'number' },
		{ name: 'groupname', type: 'string' }/*,
		{ name: 'lastLogin', type:'date', dateFormat:'c' },
		{ name: 'numLogins', type: 'number' }*/
	]
});
