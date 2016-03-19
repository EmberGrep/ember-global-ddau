import Ember from 'ember';

// BEGIN-SNIPPET edit-slide-form-component
export default Ember.Component.extend({
  tagName: `form`,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setStartingValues();
  },

  setStartingValues() {
    this.set(`name`, this.get(`slide.name`));
  },

  submit(ev) {
    ev.preventDefault();

    this.sendAction(`onsubmit`, this.getProperties(`name`));
  }
});
// END-SNIPPET
