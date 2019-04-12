(function (angular) {
    'use strict';
    angular.module('app')

        .component('angularFormspree', {
            // templateUrl: "pages/contact/contact.html",
            // controller: angularFormspreeController,
            template: '<form ng-if="!showMessage" ng-submit="vm.submit()">' +
                '<div class="form-group">' +
                '<input ng-model="contactform.name" class="form-control input-lg" placeholder="Name" /> ' +
                '</div>' +
                '<div class="form-group">' +
                '<input ng-model="contactform.email" type="email" class="form-control input-lg" placeholder="Email" /> ' +
                '</div>' +
                '<div class="form-group">' +
                '<textarea ng-model="contactform.comments" class="form-control contact"></textarea>' +
                '</div>' +
                '<div class="form-group">' +
                '<input type="submit" value="Submit"/>' +
                '</div>' +
                '</form>' +
                '<div ng-if="showMessage"><p>{{message}}</p></div>'
        })

    // .controller('angularFormspreeController', angularFormspreeController);

    // angularFormspreeController.inject = ['$http'];

    function angularFormspreeController() {
        var vm = this;
        //1. Add the email you want the messages to be sent to
        var email = "matt@oakhill.media";
        //2. Add the email subject line 
        var email_subject = "New Inquiry!";
        //3. Add a message the user will see when the form is submitted successfully
        var success_message = "Your message was sent! We will be in touch soon.";
        //4. Add a message the user will see if the form receives an error and does not submit successfully
        var error_message = "Oops. There was an error when trying to send your message.";

        vm.submit = submit;

        init();

        function init() {

        }

        function submit() {
            $http({
                url: "http://formspree.io/" + email,
                data: {
                    name: vm.contactform.name,
                    email: vm.contactform.email,
                    comments: vm.contactform.comments,
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
                vm.showMessage = true;
                vm.message = success_message;

            }).catch(function (error) {
                vm.showMessage = true;
                vm.message = error_message;
            });
        }
    }

})(window.angular);