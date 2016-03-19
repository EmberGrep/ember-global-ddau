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
    this.route('ember-nashville');

    this.route('new-form');
    this.route('wait-to-save');
    this.route('dedicated-component');

    this.route('first-edit');
    this.route('starting-values');
    this.route('composable-slide');
    this.route('ember-copy');
    this.route('to-json');

    this.route('simple-form');
    this.route('simple-form-credit');
    this.route('simple-form-example');
    this.route('simple-form-results');

    this.route('with-service');
    this.route('with-service-example');

    this.route('close');
  });
});

export default Router;
