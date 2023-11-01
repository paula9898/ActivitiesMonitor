import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../date';
import { DATA_array } from '../mock-dates';

@Component({
  selector: 'app-action-date',
  templateUrl: './action-date.component.html',
  styleUrls: ['./action-date.component.css'],
})
export class ActionDateComponent {
  // date: Data = [];

  data = DATA_array;
}
