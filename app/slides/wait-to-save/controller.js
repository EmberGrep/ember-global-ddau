import Ember from 'ember';

// BEGIN-SNIPPET wait-to-save-controller
export default Ember.Controller.extend({
  actions: {
    saveNewSlide(ev) {
      ev.preventDefault();

      this.store.createRecord(`slide`, {
        routeName: `wait-to-save`,
        color: `#b650b1`,
        name: this.get(`name`),
      });
    },
  },
});
// END-SNIPPET
