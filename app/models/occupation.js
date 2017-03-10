import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  area: DS.attr(),
  type: DS.attr(),
  image: DS.attr(),
  description: DS.attr(),
  reviews: DS.hasMany('review', { async: true }),
  cost: DS.attr(),
  latitude: DS.attr('number'),
  longitude: DS.attr('number')
});
