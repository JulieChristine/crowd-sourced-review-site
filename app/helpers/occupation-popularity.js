import Ember from 'ember';

export function occupationPopularity(params) {
  var occupation = params[0];

  if(occupation.get('reviews').get('length') >= 1) {
    return Ember.String.htmlSafe('<i class="fa fa-star-o" aria-hidden="true"></i>');
  }
}

export default Ember.Helper.helper(occupationPopularity);
