"use strict";
var Users = (function () {
    function Users(username, password, email, age) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.age = age;
    }
    return Users;
}());
exports.Users = Users;
