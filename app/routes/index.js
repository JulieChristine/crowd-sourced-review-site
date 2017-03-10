import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    occupations: this.store.findAll('occupation'),
    reviews: this.store.findAll('review'),
  });
},
actions: {
    saveOccupation(params) {
      var newOccupation = this.store.createRecord('occupation', params);
      newOccupation.save();
      this.transitionTo('index');
  },
  }
});
