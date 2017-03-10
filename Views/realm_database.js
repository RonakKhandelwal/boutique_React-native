
'use strict';

import Realm from 'realm';

class Customer extends Realm.Object {}
Customer.schema = {
    name: 'Customers',
    primaryKey: 'phone',
    properties: {
        name: 'string',
        phone: 'string',
        email: 'string',
        category: 'string',
        amount: 'int',
        valid: 'string'
    },
};
export default new Realm({schema: [Customer]});
