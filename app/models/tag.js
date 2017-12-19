import DS from 'ember-data';
import { computed } from '@ember/object';

export default DS.Model.extend({
  tagName: DS.attr('String'),
  tagValue: DS.attr('Number'),
  records: DS.attr('Number'),
  impact: computed('tagValue', 'records', function() {
    const value = (this.get('tagValue') * this.get('records')).toFixed(2).replace(/\B(?=(\d{3})+(?!\d)(?=\.))/g, ',')
    return value;
  })
});
