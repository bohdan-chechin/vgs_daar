import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    console.log('normalize response')
    console.log(payload)
    let newData = []
    payload.data.map((op) => {
      Object.keys(op.data).map((rec) => {
        newData.push({
          id: op.operation + rec,
          type: 'operation',
          attributes: {
            operation: op.operation,
            key: rec,
            value: op.data[rec]
          }
        });
      });
    });
    payload.data = newData;
    return this._super(store, primaryModelClass, payload, id, requestType);
  }
});
