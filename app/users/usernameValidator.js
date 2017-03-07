System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var userValidator;
    return {
        setters:[],
        execute: function() {
            userValidator = (function () {
                function userValidator() {
                }
                userValidator.isEmailValid = function (control) {
                    var EMAIL_REGEXP = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!EMAIL_REGEXP.test(control.value))
                        return { isEmailValid: true };
                    return null;
                };
                userValidator.noSpace = function (control) {
                    if (control.value.indexOf(' ') >= 0)
                        return { noSpace: true };
                    return null;
                };
                userValidator.uniqueName = function (control) {
                    return new Promise(function (resolve, reject) {
                        setTimeout(function () {
                            if (control.value == "tanmay")
                                resolve({ uniqueName: true });
                            else
                                resolve(null);
                        }, 1000);
                    });
                };
                userValidator.confirmPassword = function (group) {
                    var newpwd1 = group.find('newpwd').value;
                    var conpwd1 = group.find('confpwd').value;
                    if (newpwd1 == "" || conpwd1 == "")
                        return null;
                    if (newpwd1 != conpwd1)
                        return { confirmPassword: true };
                    return null;
                };
                return userValidator;
            }());
            exports_1("userValidator", userValidator);
        }
    }
});
//# sourceMappingURL=usernameValidator.js.map