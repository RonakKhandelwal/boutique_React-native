
'use strict';

import Realm from 'realm';

class Customer extends Realm.Object {}
Customer.schema = {
    name: 'Customers',
    properties: {
        name: 'string',
        phone: 'int',
        email: 'string',
        category: 'string'
    },
};
export default new Realm({schema: [Customer]});
