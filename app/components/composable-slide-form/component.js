import Ember from 'ember';

// BEGIN-SNIPPET composable-slide-form-component
export default Ember.Component.extend({
  tagName: `form`,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setStartingValues();
  },

  setStartingValues() {
    this.set(`formValues`, Ember.getProperties(this.get(`slide`), [`name`]));
  },

  submit(ev) {
    ev.preventDefault();

    this.sendAction(`onsubmit`, this.get(`formValues`));
  }
});
// END-SNIPPET
