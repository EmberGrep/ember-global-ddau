import Ember from 'ember';

// BEGIN-SNIPPET dedicated-component-route
export default Ember.Route.extend({
  model() {
    return this.store.findRecord(`slide`, 7);
  }
});
// END-SNIPPET
