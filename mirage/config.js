const vaults = [
  {
    id: 'vlt-asdf1234',
    name: 'Cards',
    environment: 'Sandbox',
    organizationId: 'org-asdf1234',
    organizationName: 'Vandelay Industries',
    zoneUpstream: 'https://api-sandbox.vandelay.io',
    sslCertificate: null,
    data: {
        tokens: '23454',
        traffic: '6630',
        requests: '231'
      },
    tags: [
        { tagName: 'tax-id', tagValue: '5', records: '23431'},
        { tagName: 'credit-card', tagValue: '3', records: '32374'},
        { tagName: 'password', tagValue: '0.5', records: '134234'},
        { tagName: 'dob', tagValue: '0.25', records: '82364'},
        { tagName: 'address', tagValue: '0.1', records: '298732'},
        { tagName: 'account-statement', tagValue: '25', records: '567'},
        { tagName: 'bank-account', tagValue: '3', records: '34535'},
    ]
  },
  {
    id: 'vlt-asdf1235',
    name: 'Cards',
    environment: 'Live',
    organizationId: 'org-asdf1234',
    organizationName: 'Vandelay Industries',
    zoneUpstream: 'https://cards.vandelay.io',
    sslCertificate: 'cards.vandelay.com',
    data: {
        tokens: '45776',
        traffic: '78786',
        requests: '5657'
      },
    tags: [
        { tagName: 'tax-id', tagValue: '5', records: '10'},
        { tagName: 'credit-card', tagValue: '3', records: '1000'},
        { tagName: 'password', tagValue: '0.5', records: '1000'},
        { tagName: 'dob', tagValue: '0.25', records: '10'},
        { tagName: 'address', tagValue: '0.1', records: '25'},
        { tagName: 'account-statement', tagValue: '25', records: '2'},
        { tagName: 'bank-account', tagValue: '3', records: '300'},
    ]
  }
];

const operations = [
  {
    operation: 'redact',
    data: {
      'april': 1235,
      'may': 12098,
      'june': 1232,
      'july': 10,
      'august': 50000
    }
  },
  {
    operation: 'reveal',
    data: {
      'april': 945,
      'may': 15335,
      'june': 534,
      'july': 743,
      'august': 735
    }
  },
  {
    operation: 'store',
    data: {
      'april': 22788,
      'may': 2335,
      'june': 13452,
      'july': 2345,
      'august': 234
    }
  }
]

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Sep', 'Oct', 'Nov', 'Dec']

function generateOperationsForRange(range) {
  if (range === 'today') {
    return operations.map((o) => {
      o.data = {}
      for (let i = 0; i < 10; i++) {
        o.data[`${i}:00`] = Math.round(Math.random() * 10000)
      }
      return o
    })
  }
  if (range === '1 week') {
    return operations.map((o) => {
      o.data = {}
      for (let i = 0; i < 7; i++) {
        o.data[DAYS[i]] = Math.round(Math.random() * 10000)
      }
      return o
    })
  }
  if (range === '1 month') {
    return operations.map((o) => {
      o.data = {}
      for (let i = 1; i <= 30; i++) {
        o.data[`${i}.12`] = Math.round(Math.random() * 10000)
      }
      return o
    })
  }
  if (range === '1 year') {
    return operations.map((o) => {
      o.data = {}
      for (let i = 0; i < 12; i++) {
        o.data[MONTHS[i]] = Math.round(Math.random() * 10000)
      }
      return o
    })
  }
}

export default function() {
  this.namespace = '/api';

  this.get('/vaults', function() {
    return {
      data: vaults
    };
  });
  this.get('/vaults', function() {
    return {
      data: vaults
    };
  });
  this.get('/vaults/:id/', (schema, request) => {
    const id = request.params.id
    return {
      data: vaults.filter((v) => v.id === id).pop()
    }
  });

  this.get('/operations', (schema, request) => {
    const query = request.queryParams
    if (query.range) {
      return {
        data: generateOperationsForRange(query.range)
      }
    }
    if (query.vault_id) {
      return {
        data: operations
      }
    }
    return {
      data: operations
    }
  });
}