import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  attrs: {
    series: 'data'
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('normalize response')
    console.log(payload)
    payload.data = payload.data.map(this.formatOneOperation)
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  formatOneOperation (operation) {
    return {
      id: operation.operation,
      attributes: operation,
      type: 'operation'
    };
  }
});
