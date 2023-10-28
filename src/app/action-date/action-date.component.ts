import { Component } from '@angular/core';
import { Data } from '../date';

@Component({
  selector: 'app-action-date',
  templateUrl: './action-date.component.html',
  styleUrls: ['./action-date.component.css'],
})
export class ActionDateComponent {
  date: Data = [];
}
