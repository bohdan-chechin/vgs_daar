import DS from 'ember-data';

export default DS.Model.extend({
  operation: DS.attr('string'),
  series: DS.attr()
});
