import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('animal');
  },
  actions: {
    goToEditAnimal(animal) {
      this.transitionTo("animals.edit", animal.get('id'));
    },
    
    deleteAnimal(animal) {
      const oldAnimal = this.store.peekRecord('animal', animal.get('id'));
      
      oldAnimal.destroyRecord()
        .then(() => {
          // something that handles success
        }).catch(() => {
          // something that handles failures
        });
    }
  }
});
