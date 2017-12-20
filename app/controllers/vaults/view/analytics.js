import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterOperations (range) {
      this.transitionToRoute({ queryParams: { range } })
    }
  }
});
