import DS from 'ember-data';
import { computed } from '@ember/object';
import numeral from 'numeral';

export default DS.Model.extend({
  tagName: DS.attr('String'),
  tagValue: DS.attr('Number'),
  records: DS.attr('Number'),
  impact: computed('tagValue', 'records', function() {
    const value = this.get('tagValue') * this.get('records')
    return numeral(value).format('$0,0.00');
  }),
  impactForCSV: computed('tagValue', 'records', function() {
    const value = this.get('tagValue') * this.get('records')
    return numeral(value).format('$0.00');
  })
});
