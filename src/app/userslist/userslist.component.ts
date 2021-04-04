import { Component, OnInit } from '@angular/core';
import {UsersUtilsService} from "../users-utils.service";
import {Users} from "../users";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.css']
})
export class UserslistComponent implements OnInit {
  sub : Subscription;
  users : Users[] = [];
  color : string[] = ["red","green"];
  UsersFilterInput = '';

  constructor(private utils : UsersUtilsService) { }

  ngOnInit() {
    this.sub = this.utils.getAllUsers()
      .subscribe(data => this.users = data);
  }

  ngOnDestroy()
  {
    this.sub.unsubscribe();
  }

}
