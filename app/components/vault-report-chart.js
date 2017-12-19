import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'div',
  series: computed('data', function () {
    const operations = this.get('data')
    const lebels = new Set()
    operations.map((o) => {
      Object.keys(o.get('series')).map((key) => labels.add(key))
    })
    
    return {
      labels,
      datasets: operations.map((o) => ({
        label: o.operation,
        data: Object.values(o.series)
      }))
    }
  })
});
