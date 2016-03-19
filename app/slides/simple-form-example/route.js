import Ember from 'ember';

// BEGIN-SNIPPET simple-form-route
export default Ember.Route.extend({
  model() {
    return this.store.findRecord(`slide`, 7);
  }
});
// END-SNIPPET
