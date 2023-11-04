import { Injectable } from '@angular/core';
import { Statistic } from './statistics.model';
import { STATISTICS } from './mock-dates';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  constructor() {}

  getStatistics(): Statistic[] {
    const stats = STATISTICS;
    return stats;
  }
}
