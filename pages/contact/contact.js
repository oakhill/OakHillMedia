(function (angular) {
    'use strict';
    angular.module('app')

        .component('ohcontact', {
            templateUrl: "pages/contact/contact.html",
            controller: contactController
        });

    function contactController() {
        var contactCtrl = this;

        contactCtrl.submit = submit;
        contactCtrl.updateBody = updateBody;

        function init() {
            contactCtrl.message = "test message ";
            contactCtrl.contactform = {};
            contactCtrl.showMessage = true;
        }

        init();

        function submit() {
            console.log("attempting to send this message: \n" + contactCtrl.contactform.body);
        }

        function updateBody() {
            contactCtrl.contactform.body = "Date: " + contactCtrl.contactform.date + "\n" +
                "Venue: " + contactCtrl.contactform.venue + "\n" +
                "Fiance: " + contactCtrl.contactform.fiance + "\n" +
                "About the couple: " + contactCtrl.contactform.aboutCouple;
        }
    }

})(window.angular);