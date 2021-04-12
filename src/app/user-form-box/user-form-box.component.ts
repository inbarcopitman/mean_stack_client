import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../users";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UsersUtilsService} from "../users-utils.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-user-form-box',
  templateUrl: './user-form-box.component.html',
  styleUrls: ['./user-form-box.component.css']
})
export class UserFormBoxComponent implements OnInit {
  @Input() user: Users;
  sub : Subscription;

  private updateForm: FormGroup;

  showUserData: boolean;

  constructor(private fb: FormBuilder, private utils : UsersUtilsService) {
    this.showUserData = false;
  }

  ngOnInit() {
    this.updateForm = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
    });
  }

  updateData(data){
    this.sub = this.utils.updateUser()
      .subscribe(data => data);
  }


}
