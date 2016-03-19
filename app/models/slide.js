import DS from 'ember-data';

export default DS.Model.extend({
  routeName: DS.attr(),
  color: DS.attr(),
  name: DS.attr(),
});
