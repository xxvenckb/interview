import { Participant } from '../core/models/participant';

export interface CaseSummary {
  readonly caseId: string;
  readonly product: string;
  readonly status: string;
  readonly office: string;
  readonly requestedAmount: string;
  readonly lastUpdated: string;
}

export interface DecisionNote {
  readonly id: string;
  readonly title: string;
  readonly body: string;
}

export interface AttachmentSummary {
  readonly id: string;
  readonly name: string;
  readonly uploadedAt: string;
}

export const INTERVIEW_CASE_SUMMARY: CaseSummary = {
  caseId: 'CASE-20481',
  product: 'Home loan review',
  status: 'Ready for advisor review',
  office: 'Oslo North',
  requestedAmount: 'NOK 4 250 000',
  lastUpdated: '17 Apr 2026, 09:40',
};

export const INTERVIEW_PARTICIPANTS: readonly Participant[] = [
  {
    id: 'applicant-1',
    firstName: 'Alex',
    lastName: 'Lindberg',
    role: 'Primary applicant',
    personalNumber: '12069012345',
    dateOfBirth: '1990-06-12',
  },
  {
    id: 'applicant-2',
    firstName: 'Sam',
    lastName: 'Rivera',
    role: 'Co-applicant',
    personalNumber: '11038454321',
    dateOfBirth: undefined,
  },
];

export const INTERVIEW_DECISION_NOTES: readonly DecisionNote[] = [
  {
    id: 'note-1',
    title: 'Income documentation reviewed',
    body: 'Latest salary slips and annual tax statement have been uploaded and look consistent.',
  },
  {
    id: 'note-2',
    title: 'Clarify joint ownership timeline',
    body: 'Customer message mentions a move in August. Advisor should confirm the final ownership split.',
  },
  {
    id: 'note-3',
    title: 'Manual affordability check',
    body: 'System score is within tolerance, but the requested amount is close to the internal threshold.',
  },
];

export const INTERVIEW_ATTACHMENTS: readonly AttachmentSummary[] = [
  {
    id: 'attachment-1',
    name: 'salary-slip-march.pdf',
    uploadedAt: '16 Apr 2026',
  },
  {
    id: 'attachment-2',
    name: 'annual-tax-summary.pdf',
    uploadedAt: '16 Apr 2026',
  },
  {
    id: 'attachment-3',
    name: 'purchase-contract.pdf',
    uploadedAt: '15 Apr 2026',
  },
];