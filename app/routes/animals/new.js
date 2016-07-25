import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createAnimal(newAnimal) {
      const firstName = newAnimal.get('firstName');
      const lastName = newAnimal.get('lastName');
      const animal = this.store.createRecord('animal', { firstName, lastName });
      return animal.save()
        .then((animal) => {
          return this.transitionTo('animals');
        }).catch(() => {
          // something that handles failures
        });
    }
  }
});
