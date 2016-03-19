import Ember from 'ember';

// BEGIN-SNIPPET composable-slide-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(values) {
      this.model.setProperties(values);

      this.model.save();
    },
  },
});
// END-SNIPPET
