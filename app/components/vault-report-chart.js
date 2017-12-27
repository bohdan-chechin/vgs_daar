import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
  tagName: 'div',
  options: {
    scales: {
      yAxes: [{
          stacked: true
      }]
    }
  },
  series: computed('data.length', function () {
    const operations = this.get('data');
    let labels = new Set();
    let operationsTypes = new Set();
    operations.map((o) => {
      labels.add(o.get('key'));
      operationsTypes.add(o.get('operation'));
    })
    operationsTypes = Array.from(operationsTypes)
    const series = {
      labels: Array.from(labels).slice(-20),
      datasets: operationsTypes.map((l) => ({
        label: l,
        data: operations
        .filter((op) => op.get('operation') === l)
        .slice(-20)
        .map((op) => ({
          y: op.get('value'),
          x: op.get('key')
        }))
      }))
    };
    return series;
  }),
  actions: {
    filter (range) {
      this.sendAction('filterOperations', range);
    }
  }
});
