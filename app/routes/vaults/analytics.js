import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    range: {
      refreshModel: true,
      replace: true,
      as: 'range'
    }
  },
  model (params) {
    if (params.range) {
      return this.get('store').query('operation', {range: params.range})
    }
    return this.get('store').findAll('operation')
  }
});
