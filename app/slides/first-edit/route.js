import Ember from 'ember';

// BEGIN-SNIPPET first-edit-route
export default Ember.Route.extend({
  model() {
    return this.store.findRecord(`slide`, 7);
  }
});
// END-SNIPPET
