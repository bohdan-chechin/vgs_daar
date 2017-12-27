import Controller from '@ember/controller';

export default Controller.extend({
  series: Ember.computed('model.operations.length', function () {
    console.log('updated')
    return this.get('model.operations')
  }),
  actions: {
    filterOperations (range) {
      this.transitionToRoute({ queryParams: { range } })
    }
  }
});
