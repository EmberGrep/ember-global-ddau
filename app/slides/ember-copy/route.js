import Ember from 'ember';

// BEGIN-SNIPPET ember-copy-route
export default Ember.Route.extend({
  model() {
    return {
      name: `This is a POJO`,
    }
  }
});
// END-SNIPPET
