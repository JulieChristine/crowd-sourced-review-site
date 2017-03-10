import Ember from 'ember';

export default Ember.Component.extend({
  addNewOccupation: false,
  actions: {
    occupationFormShow () {
      this.set('addNewOccupation', true);
    },

    saveOccupation() {
      var params = {
        name: this.get('name'),
        area: this.get('area'),
        type: this.get('type'),
        image: this.get('image'),
        description: this.get('description'),
        cost: parseInt(this.get('cost')),
        latitude: this.get('latitude'),
        longitude: this.get('longitude')
      };
      this.set('addNewOccupation', false);
      this.sendAction('saveOccupation', params);
    }
  }
});
