import { Component, OnInit, Input } from '@angular/core';
import { Statistic } from '../statistics.model';
import { Color } from '../color.model';

@Component({
  selector: 'app-action-date',
  templateUrl: './action-date.component.html',
  styleUrls: ['./action-date.component.css'],
})
export class ActionDateComponent {
  @Input() statistics: Statistic[] = [];
  @Input() color: Color = 'blue';
}
