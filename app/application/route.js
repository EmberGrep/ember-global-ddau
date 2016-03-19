import Ember from 'ember';
import slides from '../fixtures/slides';

const { all } = Ember.RSVP;

export default Ember.Route.extend({
  model() {
    return this.store.findAll(`slide`);
  },

  clearSlides() {
    return all(this.modelFor(`application`).map((slide) => slide.destroyRecord()));
  },

  actions: {
    resetSlides() {
      this.clearSlides().then(() => {
        slides.map((data) => {
          const slide = this.store.createRecord(`slide`, data);

          return slide.save();
        });
      });
    },
  },
});
