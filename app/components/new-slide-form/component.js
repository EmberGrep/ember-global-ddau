import Ember from 'ember';

// BEGIN-SNIPPET new-slide-form-component
export default Ember.Component.extend({
  tagName: `form`,

  submit(ev) {
    ev.preventDefault();

    this.sendAction(`onsubmt`, this.getProperties(`name`));
  }
});
// END-SNIPPET
