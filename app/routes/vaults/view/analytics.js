import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default Route.extend({
  queryParams: {
    range: {
      refreshModel: true,
      replace: true,
      as: 'range'
    }
  },
  model (params) {
    let { vault_id } = this.paramsFor('vaults.view')
    let operations
    if (params.range) {
      operations = this.get('store').query('operation', {vault_id, range: params.range})
    }
    operations = this.get('store').query('operation', {vault_id})
    return RSVP.hash({
      operations,
      vault: this.get('store').findRecord('vault', vault_id)
    })
  }
  
});
