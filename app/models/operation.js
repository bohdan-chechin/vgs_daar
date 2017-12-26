import DS from 'ember-data';

export default DS.Model.extend({
  operation: DS.attr('string'),
  key: DS.attr('string'),
  value: DS.attr('number')
});
