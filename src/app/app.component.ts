import { Component } from '@angular/core';
import { STATISTICS } from './mock-dates';
import { Color } from './color.model';
import { StatisticsService } from './statistics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  STATISTICS = this.service.getStatistics();
  color: Color = 'red';

  constructor(private service: StatisticsService) {}
}
