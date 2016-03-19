import Ember from 'ember';

// BEGIN-SNIPPET dedicated-component-route
export default Ember.Route.extend({
  model() {
    return this.store.createRecord(`slide`, {
      routeName: `dedicated-component`,
      color: `#b650b1`,
    });
  }
});
// END-SNIPPET
