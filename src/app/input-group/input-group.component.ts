import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-input-group',
  templateUrl: './input-group.component.html',
  styleUrls: ['./input-group.component.css']
})
export class InputGroupComponent implements OnInit {
  @Input() name: String;
  @Input() label: String;
  @Input() type: String;
  @Input() value: any;
  constructor() { }

  ngOnInit() {
  }

}
