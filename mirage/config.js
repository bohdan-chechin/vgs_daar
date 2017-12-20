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