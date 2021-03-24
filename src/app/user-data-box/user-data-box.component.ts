import {Component, Input, OnInit} from '@angular/core';
import {Users} from "../users";

@Component({
  selector: 'app-user-data-box',
  templateUrl: './user-data-box.component.html',
  styleUrls: ['./user-data-box.component.css']
})
export class UserDataBoxComponent implements OnInit {
  @Input() user: Users;
  constructor() { }

  ngOnInit() {
  }

}
