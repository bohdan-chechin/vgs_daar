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
  series: computed('data', function () {
    const operations = this.get('data')
    const labels = new Set()
    operations.map((o) => {
      Object.keys(o.get('series')).map((key) => labels.add(key))
    })
    const series = {
      labels: Array.from(labels),
      datasets: operations.map((o) => ({
        label: o.get('operation'),
        data: Object.keys(o.get('series')).map((key) => ({
          y: o.get('series')[key],
          x: key
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
