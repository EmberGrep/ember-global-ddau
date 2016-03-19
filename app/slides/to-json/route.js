import Ember from 'ember';

// BEGIN-SNIPPET to-json-route
export default Ember.Route.extend({
  model() {
    return this.store.findRecord(`slide`, 7);
  }
});
// END-SNIPPET
