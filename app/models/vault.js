import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  environment: DS.attr('string'),
  organizationId: DS.attr('string'),
  organizationName: DS.attr('string'),
  zoneUpstream: DS.attr('string'),
  sslCertificate: DS.attr('string'),
  tags: DS.hasMany('tag', { async: true }),
  details: DS.attr()
});
