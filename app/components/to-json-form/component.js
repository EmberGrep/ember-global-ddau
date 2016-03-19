import Ember from 'ember';

// BEGIN-SNIPPET to-json-form-component
export default Ember.Component.extend({
  tagName: `form`,

  didReceiveAttrs() {
    this._super(...arguments);

    this.setStartingValues();
  },

  setStartingValues() {
    const startingValues = this.get(`startingValues`);

    if (startingValues.toJSON) {
      this.set(`formValues`, startingValues.toJSON());
    } else {
      this.set(`formValues`, Ember.copy(this.get(`startingValues`)));
    }
  },

  submit(ev) {
    ev.preventDefault();

    this.sendAction(`onsubmit`, this.get(`formValues`));
  }
});
// END-SNIPPET
