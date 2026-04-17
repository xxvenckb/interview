import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdvisorOverviewPageComponent } from './features/advisor-overview/advisor-overview-page.component';

@Component({
  selector: 'app-root',
  imports: [AdvisorOverviewPageComponent],
  template: '<app-advisor-overview-page></app-advisor-overview-page>',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {}
