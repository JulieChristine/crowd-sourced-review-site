import Ember from 'ember';

export function occupationCost(params/*, hash*/) {
  var occupationPrice = params[0].get('cost');

  if (occupationPrice >= 150){
    return '$$$';
  } else if (occupationPrice >= 100) {
    return '$$';
  } else if (occupationPrice >= 50) {
    return '$';
  } else if (occupationPrice === 0) {
    return 'FREE';
  }
}

export default Ember.Helper.helper(occupationCost);
