import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  rating: DS.attr(),
  content: DS.attr(),
  occupation: DS.belongsTo('occupation', { async: true }),
});
