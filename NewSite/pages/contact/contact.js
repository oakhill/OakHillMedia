(function (angular) {
    'use strict';
    angular.module('app')

        .component('ohcontact', {
            templateUrl: "pages/contact/contact.html",
            controller: contactController
        });

    contactController.inject = ['$http'];

    function contactController($http) {
        var contactCtrl = this;
        var oakhillEmail = "matt@oakhill.media";
        var email_subject = "New Inquiry!";
        var success_message = "Your message was sent! We will be in touch soon.";
        var error_message = "Oops. There was an error when trying to send your message. \n " +
            "Please email us directly at matt@oakhill.media and we'll get back to you as soon as we can. Sorry for the inconvenience!";

        contactCtrl.contactform.body = "Date: " + contactCtrl.contactform.date + "\n" +
            "Venue: " + contactCtrl.contactform.venue + "\n" +
            "Fiance: " + contactCtrl.contactform.fiance + "\n" +
            "About the couple: " + contactCtrl.contactform.aboutCouple

        contactCtrl.submit = submit;

        function submit() {
            $http({
                url: "http://formspree.io/" + oakhillEmail,
                data: {
                    name: contactCtrl.contactform.name,
                    email: contactCtrl.contactform.email,
                    comments: contactCtrl.contactform.body,
                    test: "Hey",
                    _subject: email_subject,
                },
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                transformRequest: function (obj) {
                    var str = [];
                    for (var p in obj)
                        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                    return str.join("&");
                }
            }).then(function (response) {
                contactCtrl.message = success_message;

            }).catch(function (error) {
                contactCtrl.message = error_message;
                console.log("error sending... \n" + "error message: " + error.data.error + "\n" + "error status: " + error.status);
            });
        }
    }

})(window.angular);