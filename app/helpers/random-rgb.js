import Ember from 'ember';

function getRandomInt(max) {
  return Math.floor(Math.random() * (max - 0)) + 0;
}

export function randomRgb(params/*, hash*/) {
  return `rgba(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)}, 0.8)`;;
}

export default Ember.Helper.helper(randomRgb);
