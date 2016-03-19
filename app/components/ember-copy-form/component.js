import Ember from 'ember';

// BEGIN-SNIPPET ember-copy-form-component
export default Ember.Component.extend({
  tagName: `form`,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setStartingValues();
  },

  setStartingValues() {
    this.set(`formValues`, Ember.copy(this.get(`startingValues`)));
  },

  submit(ev) {
    ev.preventDefault();

    this.sendAction(`onsubmit`, this.get(`formValues`));
  }
});
// END-SNIPPET
