import DS from 'ember-data';
import { camelize } from '@ember/string';

export default DS.JSONAPISerializer.extend({
  attrs: {
    details: 'data'
  },
  keyForAttribute(attr) {
    return camelize(attr);
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let tags = []
    if (Array.isArray(payload.data)) {
      tags = payload.data.reduce((t, v) => t.concat(v.tags), [])
      payload.data = payload.data.map(this.formatOneVault)
    } else {
      tags = payload.data.tags
      payload.data = this.formatOneVault(payload.data)
    }
    payload.included = tags.map((tag) => ({
      type: 'tag',
      id: tag.tagName,
      attributes: tag
    }))
    return this._super(store, primaryModelClass, payload, id, requestType);
  },
  formatOneVault (vault) {
    return {
      id: vault.id,
      attributes: vault,
      relationships: {
        tags: {
          data: vault.tags.map((tag) => ({
            type: 'tag',
            id: tag.tagName
          }))
        }
      },
      type: 'vault' 
    };
  }
});
