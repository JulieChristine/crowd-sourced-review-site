import Ember from 'ember';

export default Ember.Component.extend({
  sortBy: ['rating:desc'],
  sortedReviews: Ember.computed.sort('occupation.reviews', 'sortBy'),

  actions: {
    delete(occupation) {
    if (confirm('Are you sure you want to delete this occupation?')){
      this.sendAction('destroyOccupation', occupation);
    }
  },
  destroyReview(review) {
    this.sendAction('destroyReview', review);
  }
}
});
