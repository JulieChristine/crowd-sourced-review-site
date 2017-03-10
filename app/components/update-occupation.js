import Ember from 'ember';

export default Ember.Component.extend({
  updateOccupationForm: false,
  actions: {
    updateOccupationForm() {
      this.set('updateOccupationForm', true);
    },
    update(occupation) {
      var params = {
        name: this.get('name'),
        area: this.get('area'),
        type: this.get('type'),
        image: this.get('image'),
        description: this.get('description'),
        cost: this.get('cost'),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('updateOccupationForm', false);
      this.sendAction('update', occupation, params);
    }
  }
});
