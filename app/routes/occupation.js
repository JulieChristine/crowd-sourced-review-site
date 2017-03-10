import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('occupation', params.occupation_id);
  },
  actions: {
    update(occupation, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!==undefined) {
          occupation.set(key,params[key]);
        }
      });
      occupation.save();
      this.transitionTo('index');
    },
        saveReview(params) {
        var newReview = this.store.createRecord('review', params);
        var occupation = params.occupation;
        occupation.get('reviews').addObject(newReview);
        newReview.save().then(function() {
          return occupation.save();
        });
        this.transitionTo('occupation', occupation);
    },
      destroyReview(review) {
        review.destroyRecord();
        this.transitionTo('index');
    },
    destroyOccupation(occupation) {
      var review_deletions = occupation.get('reviews').map(function(review) {
        return review.destroyRecord();
      });
      Ember.RSVP.all(review_deletions).then(function() {
        return occupation.destroyRecord();
      });

      this.transitionTo('index');
    }
  }
});
