import Ember from 'ember';

// BEGIN-SNIPPET starting-values-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(values) {
      this.model.setProperties(values);

      this.model.save();
    },
  },
});
// END-SNIPPET
