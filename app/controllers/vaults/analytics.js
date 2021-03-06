import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  actions: {
    filterOperations (range) {
      this.transitionToRoute({ queryParams: { range } })
    }
  }
});
