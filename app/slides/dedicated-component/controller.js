import Ember from 'ember';

// BEGIN-SNIPPET dedicated-component-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(values) {
      this.model.set(values);

      this.model.save();
    },
  },
});
// END-SNIPPET
