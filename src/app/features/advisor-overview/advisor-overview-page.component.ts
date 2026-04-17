import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  INTERVIEW_ATTACHMENTS,
  INTERVIEW_CASE_SUMMARY,
  INTERVIEW_DECISION_NOTES,
  INTERVIEW_PARTICIPANTS,
} from '../../mock-data/advisor-case.mock';
import { PanelComponent } from '../../shared/ui/panel/panel.component';

@Component({
  selector: 'app-advisor-overview-page',
  imports: [PanelComponent],
  templateUrl: './advisor-overview-page.component.html',
  styleUrl: './advisor-overview-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvisorOverviewPageComponent {
  protected readonly caseSummary = signal(INTERVIEW_CASE_SUMMARY);
  protected readonly participants = signal(INTERVIEW_PARTICIPANTS);
  protected readonly decisionNotes = signal(INTERVIEW_DECISION_NOTES);
  protected readonly attachments = signal(INTERVIEW_ATTACHMENTS);

  protected readonly summaryItems = computed(() => {
    const summary = this.caseSummary();

    return [
      { label: 'Case', value: summary.caseId },
      { label: 'Product', value: summary.product },
      { label: 'Status', value: summary.status },
      { label: 'Office', value: summary.office },
      { label: 'Requested amount', value: summary.requestedAmount },
      { label: 'Last updated', value: summary.lastUpdated },
    ];
  });
}