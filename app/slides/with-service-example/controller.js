import Ember from 'ember';

// BEGIN-SNIPPET simple-form-controller
export default Ember.Controller.extend({
  actions: {
    run(action, message) {
      debugger;
      action(message);
    },
  },
});
// END-SNIPPET
