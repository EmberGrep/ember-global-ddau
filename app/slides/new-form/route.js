import Ember from 'ember';

// BEGIN-SNIPPET new-form-route
export default Ember.Route.extend({
  model() {
    return this.store.createRecord(`slide`, {
      routeName: `new-form`,
      color: `#b650b1`,
    });
  }
});
// END-SNIPPET
