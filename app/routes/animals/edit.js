import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('animal', params.animal_id);
  },
  
  actions: {
    updateAnimal(animalChanged) {
      const animal = this.store.peekRecord('animal', animalChanged.get('id'));
      animal.set('firstName', animalChanged.get('firstName'));
      animal.set('lastName', animalChanged.get('lastName'));
      animal.save()
        .then(() => {
          this.transitionTo('animals');
        }).catch(() => {
          // something that handles failures
        });
    }
  }
});
