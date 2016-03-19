import Ember from 'ember';

// BEGIN-SNIPPET new-form-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(ev) {
      this.model.save();
    },
  },
});
// END-SNIPPET
