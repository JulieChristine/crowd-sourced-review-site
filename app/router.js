import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('occupation', {path: '/occupation/:occupation_id'});
  this.route('about');
});

export default Router;
