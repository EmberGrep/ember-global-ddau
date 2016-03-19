import Ember from 'ember';

// BEGIN-SNIPPET ember-copy-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(values) {
      this.set(`model.name`, values.name);
    },
  },
});
// END-SNIPPET
