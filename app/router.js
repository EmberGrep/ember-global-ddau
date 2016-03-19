import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('slides', { path: `/` }, function() {
    this.route('intro', { path: `/` });
    this.route('tiy');
    this.route('ember-grep');

    this.route('new-form');
    this.route('wait-to-save');
    this.route('dedicated-component');

    this.route('first-edit');
  });
});

export default Router;
