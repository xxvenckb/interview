import { Participant } from '../core/models/participant';

export interface CaseSummary {
  readonly title: string;
  readonly subtitle: string;
  readonly caseId: string;
  readonly product: string;
  readonly status: string;
  readonly office: string;
  readonly requestedAmount: string;
  readonly lastUpdated: string;
}

export interface CaseTag {
  readonly id: string;
  readonly label: string;
  readonly tone: 'neutral' | 'info' | 'success';
}

export interface KeyFigure {
  readonly label: string;
  readonly value: string;
  readonly tone: 'neutral' | 'warning' | 'success';
}

export interface RuleViolation {
  readonly id: string;
  readonly title: string;
  readonly details: string;
}

export interface CaseStage {
  readonly id: string;
  readonly label: string;
  readonly description: string;
  readonly actionLabel: string;
}

export interface AttachmentSummary {
  readonly id: string;
  readonly name: string;
  readonly uploadedAt: string;
  readonly type: string;
}

export const INTERVIEW_CASE_SUMMARY: CaseSummary = {
  title: 'Alex Lindberg',
  subtitle: 'Home loan review · CASE-20481',
  caseId: 'CASE-20481',
  product: 'Home loan review',
  status: 'Ready for advisor review',
  office: 'Oslo North',
  requestedAmount: 'NOK 4 250 000',
  lastUpdated: '17 Apr 2026, 09:40',
};

export const INTERVIEW_CASE_TAGS: readonly CaseTag[] = [
  {
    id: 'status',
    label: 'Ready for advisor review',
    tone: 'success',
  },
  {
    id: 'product',
    label: 'Home loan review',
    tone: 'neutral',
  },
  {
    id: 'office',
    label: 'Oslo North',
    tone: 'info',
  },
  {
    id: 'amount',
    label: 'NOK 4 250 000',
    tone: 'neutral',
  },
];

export const INTERVIEW_PARTICIPANTS: readonly Participant[] = [
  {
    id: 'applicant-1',
    firstName: 'Alex',
    lastName: 'Lindberg',
    personalNumber: '12069012345',
  },
  {
    id: 'applicant-2',
    firstName: 'Sam',
    lastName: 'Rivera',
    personalNumber: '11038454321',
  },
];

export const INTERVIEW_KEY_FIGURES: readonly KeyFigure[] = [
  {
    label: 'Liquidity',
    value: '2.4',
    tone: 'success',
  },
  {
    label: 'Debt grade',
    value: '4',
    tone: 'warning',
  },
  {
    label: 'Loan to value',
    value: '71%',
    tone: 'neutral',
  },
];

export const INTERVIEW_RULE_VIOLATIONS: readonly RuleViolation[] = [
  {
    id: 'rule-1',
    title: 'Missing recent property valuation',
    details: 'The current valuation is older than the preferred threshold and should be verified.',
  },
  {
    id: 'rule-2',
    title: 'Clarify joint ownership timeline',
    details: 'Customer message mentions a move in August. Advisor should confirm the final ownership split.',
  },
  {
    id: 'rule-3',
    title: 'Manual affordability check',
    details: 'System score is within tolerance, but the requested amount is close to the internal threshold.',
  },
];

export const INTERVIEW_CASE_STAGES: readonly CaseStage[] = [
  {
    id: 'stage-1',
    label: 'Application details',
    description: 'Review the base application and requested product information.',
    actionLabel: 'Open',
  },
  {
    id: 'stage-2',
    label: 'Income and liabilities',
    description: 'Inspect salary, debt, and affordability inputs used in the recommendation.',
    actionLabel: 'Open',
  },
  {
    id: 'stage-3',
    label: 'Property documents',
    description: 'Check the supplied documents and confirm valuation coverage.',
    actionLabel: 'Open',
  },
];

export const INTERVIEW_ATTACHMENTS: readonly AttachmentSummary[] = [
  {
    id: 'attachment-1',
    name: 'salary-slip-march.pdf',
    uploadedAt: '16 Apr 2026',
    type: 'PDF',
  },
  {
    id: 'attachment-2',
    name: 'annual-tax-summary.pdf',
    uploadedAt: '16 Apr 2026',
    type: 'PDF',
  },
  {
    id: 'attachment-3',
    name: 'purchase-contract.pdf',
    uploadedAt: '15 Apr 2026',
    type: 'PDF',
  },
];