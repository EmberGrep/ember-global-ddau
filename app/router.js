import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('intro', { path: `/` });
  this.route('tiy');
  this.route('ember-grep');
});

export default Router;
