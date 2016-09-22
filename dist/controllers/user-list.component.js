"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var users_1 = require('../models/users');
var _ = require('lodash');
var UserListComponent = (function (_super) {
    __extends(UserListComponent, _super);
    function UserListComponent() {
        _super.call(this);
        this.userList = [
            new users_1.Users("halidsenyigit", "12345", "halidsenyigit@gmail.com", 15),
            new users_1.Users("asdfasdf", "xxxxxxxxxx", "asdasdfsd", 15),
            new users_1.Users("dfdf", "zzzzzzzz", "dfdfadf", 15),
            new users_1.Users("dfdf", "zzzzzzzz", "dfdfadf", 15),
            new users_1.Users("dfdf", "zzzzzzzz", "dfdfadf", 15),
            new users_1.Users("33434", "fffffff", "3434234redsc", 15),
            new users_1.Users("asdfa1", "34343434", "acvasdf4r", 15)
        ];
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent.prototype.onClickRemove = function (item) {
        console.log(_.findIndex(this.userList, item));
        this.userList = _.filter(this.userList, function (elem) { return elem != item; });
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            styleUrls: ["dist/users.css"],
            template: "\n  <h2>List of Users </h2> <br>\n    <table class=\"col-md-12 table table-hover table-bordered\">\n        <thead>\n            <tr>\n                <th>User Picture</th>\n                <th>User Name</th>\n                <th>Password</th>\n                <th>Email</th>\n                <th>Age</th>\n                <th>Operation</th>\n            </tr>\n        </thead>\n\n        <tbody>\n            <tr *ngFor=\"let item of userList\">\n                <td><img src=\"/public/img/user-icon.png\" height=\"100\" /></td>\n                <td>{{item.username}}</td>\n                <td>{{item.password}}></td>\n                <td>{{item.email}}</td>\n                <td>{{item.age}}</td>\n                <td>\n                    <button class=\"btn btn-danger\" (click)=\"onClickRemove(item)\">Remove</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], UserListComponent);
    return UserListComponent;
}(core_1.OnInit));
exports.UserListComponent = UserListComponent;
