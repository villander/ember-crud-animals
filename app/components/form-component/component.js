import Ember from 'ember';

export default Ember.Component.extend({
  firstName: null,
  lastName: null,
  newAction: null,
  formAction: null,
  edition: null,
  buttonName: null,
  
  init() {
    this._super(...arguments);
    if (this.get('edition')) {
      this.set('firstName', this.get('model.firstName'));
      this.set('lastName', this.get('model.lastName'));
    } 
  },
  
  actions: {
    customAction() {
      let animal = Ember.Object.create({
       id: this.get('edition') ? this.get('model.id') : null,
       firstName: this.get('firstName'),
       lastName: this.get('lastName'), 
      });
      this.get('customAction')(animal); 
    }
  }
});
