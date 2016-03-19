import Ember from 'ember';

export function slideName([slide]) {
  return `slides.${slide}`;
}

export default Ember.Helper.helper(slideName);
