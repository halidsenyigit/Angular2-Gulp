import { Component, OnInit } from '@angular/core';
import { Users } from '../models/users';
import * as _ from 'lodash';

@Component({
  selector: 'user-list',
  styleUrls: ["dist/users.css"],
  template: `
  <h2>List of Users </h2> <br>
    <table class="col-md-12 table table-hover table-bordered">
        <thead>
            <tr>
                <th>User Picture</th>
                <th>User Name</th>
                <th>Password</th>
                <th>Email</th>
                <th>Age</th>
                <th>Operation</th>
            </tr>
        </thead>

        <tbody>
            <tr *ngFor="let item of userList">
                <td><img src="/public/img/user-icon.png" height="100" /></td>
                <td>{{item.username}}</td>
                <td>{{item.password}}></td>
                <td>{{item.email}}</td>
                <td>{{item.age}}</td>
                <td>
                    <button class="btn btn-danger" (click)="onClickRemove(item)">Remove</button>
                </td>
            </tr>
        </tbody>
    </table>
  `
})
export class UserListComponent extends OnInit { 
    userList: Users[] = [
        new Users("halidsenyigit","12345","halidsenyigit@gmail.com",15),
        new Users("asdfasdf","xxxxxxxxxx","asdasdfsd",15),
        new Users("dfdf","zzzzzzzz","dfdfadf",15),
        new Users("dfdf","zzzzzzzz","dfdfadf",15),
        new Users("dfdf","zzzzzzzz","dfdfadf",15),
        new Users("33434","fffffff","3434234redsc",15),
        new Users("asdfa1","34343434","acvasdf4r",15)
    ];

    constructor(){
        super();
    }
    ngOnInit(){

    }

    onClickRemove(item: Users){

        console.log(_.findIndex(this.userList, item));
        this.userList = _.filter(this.userList, (elem)=>elem!=item);
    }
}
