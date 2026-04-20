import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import {
  CaseTag,
  INTERVIEW_ATTACHMENTS,
  INTERVIEW_CASE_STAGES,
  INTERVIEW_CASE_TAGS,
  INTERVIEW_CASE_SUMMARY,
  INTERVIEW_KEY_FIGURES,
  INTERVIEW_PARTICIPANTS,
  INTERVIEW_RULE_VIOLATIONS,
  KeyFigure,
} from '../../mock-data/advisor-case.mock';
import { PanelComponent } from '../../shared/ui/panel/panel.component';

@Component({
  selector: 'app-advisor-overview-page',
  imports: [PanelComponent],
  templateUrl: './advisor-overview-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'block',
  },
})
export class AdvisorOverviewPageComponent {
  protected readonly caseSummary = signal(INTERVIEW_CASE_SUMMARY);
  protected readonly caseTags = signal(INTERVIEW_CASE_TAGS);
  protected readonly participants = signal(INTERVIEW_PARTICIPANTS);
  protected readonly keyFigures = signal(INTERVIEW_KEY_FIGURES);
  protected readonly ruleViolations = signal(INTERVIEW_RULE_VIOLATIONS);
  protected readonly caseStages = signal(INTERVIEW_CASE_STAGES);
  protected readonly attachments = signal(INTERVIEW_ATTACHMENTS);

  protected readonly attachmentCountLabel = computed(
    () => `Showing ${this.attachments().length} of ${this.attachments().length}`,
  );

  protected caseTagClasses(tone: CaseTag['tone']): string {
    switch (tone) {
      case 'success':
        return 'inline-flex min-h-8 items-center justify-center rounded-full bg-[var(--success-soft)] px-3 py-1.5 text-sm font-semibold leading-4 text-[var(--success-text)]';
      case 'info':
        return 'inline-flex min-h-8 items-center justify-center rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-sm font-semibold leading-4 text-[var(--accent)]';
      case 'neutral':
        return 'inline-flex min-h-8 items-center justify-center rounded-full bg-[var(--bg1)] px-3 py-1.5 text-sm font-semibold leading-4 text-[var(--text1-primary)]';
    }
  }

  protected keyFigureClasses(tone: KeyFigure['tone']): string {
    switch (tone) {
      case 'success':
        return 'inline-flex min-h-7 items-center justify-center rounded-full bg-[var(--success-soft)] px-2.5 py-1 text-[13px] font-semibold leading-4 text-[var(--success-text)]';
      case 'warning':
        return 'inline-flex min-h-7 items-center justify-center rounded-full bg-[var(--warning-soft)] px-2.5 py-1 text-[13px] font-semibold leading-4 text-[var(--warning-text)]';
      case 'neutral':
        return 'inline-flex min-h-7 items-center justify-center rounded-full bg-[var(--bg1)] px-2.5 py-1 text-[13px] font-semibold leading-4 text-[var(--text2-secondary)]';
    }
  }
}