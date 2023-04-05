// appointment-scheduling.component.js
angular.module('myApp').component('appointmentScheduling', {
    templateUrl: 'appointment.component.html',
    controller: function() {
      this.submitForm = function() {
        alert('Appointment scheduled!');
      };
    }
  });
  