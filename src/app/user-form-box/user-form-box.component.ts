import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../users";

@Component({
  selector: 'app-user-form-box',
  templateUrl: './user-form-box.component.html',
  styleUrls: ['./user-form-box.component.css']
})
export class UserFormBoxComponent implements OnInit {
  @Input() user: Users;
  constructor() { }

  ngOnInit() {
  }

  getOtherData(){
  }
}
