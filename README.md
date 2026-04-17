# Leo Advisor Interview Starter

This repository is a sanitized Angular 21 starter for a 45 minute frontend interview exercise. It intentionally mirrors the shape of an internal advisor workflow without exposing any production code, private packages, or real data.

## Start

Install dependencies and run the app:

```bash
npm install
npm start
```

The app runs on `http://localhost:4200` by default.

## Candidate Brief

The exercise brief lives in `docs/exercise-brief.md`.

The visual reference for the feature is in `public/reference/applicant-information-reference.svg`.

## Useful Commands

```bash
npm start
npm run build
npm test -- --watch=false
```

## Repo Shape

- `src/app/features/advisor-overview/`: starter page the candidate will extend
- `src/app/mock-data/`: typed mock data already wired into the page
- `src/app/shared/ui/panel/`: lightweight shared card component
- `docs/`: interview materials

## Scope

This starter intentionally avoids routing, auth, generated API clients, state libraries, and design-system dependencies. The goal is to test collaboration, problem solving, and Angular fundamentals rather than setup endurance.
*** Add File: c:\repos\interview\src\app\core\models\participant.ts
export interface Participant {
	readonly id: string;
	readonly firstName: string;
	readonly lastName: string;
	readonly role: string;
	readonly personalNumber: string;
	readonly dateOfBirth?: string;
}
*** Add File: c:\repos\interview\src\app\mock-data\advisor-case.mock.ts
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
*** Add File: c:\repos\interview\src\app\shared\ui\panel\panel.component.ts
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
	selector: 'app-panel',
	templateUrl: './panel.component.html',
	styleUrl: './panel.component.css',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelComponent {
	readonly title = input.required<string>();
	readonly eyebrow = input<string | null>(null);
	readonly className = input<string | null>(null);

	protected readonly panelClasses = computed(() => {
		const customClassName = this.className()?.trim();
		return customClassName ? `panel ${customClassName}` : 'panel';
	});
}
*** Add File: c:\repos\interview\src\app\shared\ui\panel\panel.component.html
<section [class]="panelClasses()">
	<header class="panel__header">
		@if (eyebrow()) {
			<p class="panel__eyebrow">{{ eyebrow() }}</p>
		}
		<h2 class="panel__title">{{ title() }}</h2>
	</header>

	<div class="panel__content">
		<ng-content />
	</div>
</section>
*** Add File: c:\repos\interview\src\app\shared\ui\panel\panel.component.css
.panel {
	border: 1px solid var(--border-subtle);
	border-radius: 24px;
	background: var(--surface);
	box-shadow: var(--shadow-soft);
	backdrop-filter: blur(12px);
}

.panel__header {
	padding: 1.25rem 1.25rem 0;
}

.panel__eyebrow {
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--text-muted);
}

.panel__title {
	margin-top: 0.4rem;
	font-size: 1.125rem;
	line-height: 1.3;
}

.panel__content {
	padding: 1.25rem;
}
*** Add File: c:\repos\interview\src\app\features\advisor-overview\advisor-overview-page.component.ts
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
*** Add File: c:\repos\interview\src\app\features\advisor-overview\advisor-overview-page.component.html
<main class="page-shell">
	<header class="hero">
		<div class="hero__content">
			<p class="hero__eyebrow">Sanitized interview starter</p>
			<h1 class="hero__title">Advisor overview</h1>
			<p class="hero__description">
				This sample mirrors an internal case review screen without any private integrations or
				production data.
			</p>
		</div>

		<dl class="hero__meta">
			@for (item of summaryItems(); track item.label) {
				<div class="hero__meta-item">
					<dt>{{ item.label }}</dt>
					<dd>{{ item.value }}</dd>
				</div>
			}
		</dl>
	</header>

	<section class="workspace">
		<aside class="workspace__sidebar">
			<section class="candidate-slot" data-testid="applicant-information-slot">
				<p class="candidate-slot__eyebrow">Candidate task</p>
				<h2 class="candidate-slot__title">Applicant information belongs here</h2>
				<p class="candidate-slot__description">
					Create a standalone component and render it in this slot using the participant data that
					already exists on this page.
				</p>

				<ul class="candidate-slot__list">
					<li>Show each applicant's full name, role, personal number, and age.</li>
					<li>Derive age from the `dateOfBirth` field.</li>
					<li>Handle missing or invalid dates with a fallback value.</li>
				</ul>
			</section>

			<app-panel title="Key figures" eyebrow="Snapshot">
				<dl class="metric-list">
					<div>
						<dt>Liquidity</dt>
						<dd>2.4</dd>
					</div>
					<div>
						<dt>Debt grade</dt>
						<dd>4</dd>
					</div>
					<div>
						<dt>Loan to value</dt>
						<dd>71%</dd>
					</div>
				</dl>
			</app-panel>
		</aside>

		<section class="workspace__main">
			<app-panel title="Decision notes" eyebrow="Case review">
				<ol class="note-list">
					@for (note of decisionNotes(); track note.id) {
						<li class="note-list__item">
							<h3>{{ note.title }}</h3>
							<p>{{ note.body }}</p>
						</li>
					}
				</ol>
			</app-panel>

			<app-panel title="Attachments" eyebrow="Customer documents">
				<ul class="attachment-list">
					@for (attachment of attachments(); track attachment.id) {
						<li class="attachment-list__item">
							<div>
								<p class="attachment-list__name">{{ attachment.name }}</p>
								<p class="attachment-list__date">Uploaded {{ attachment.uploadedAt }}</p>
							</div>
							<span class="attachment-list__tag">PDF</span>
						</li>
					}
				</ul>
			</app-panel>
		</section>
	</section>
</main>
*** Add File: c:\repos\interview\src\app\features\advisor-overview\advisor-overview-page.component.css
:host {
	display: block;
}

.page-shell {
	width: min(1180px, calc(100vw - 2rem));
	margin: 0 auto;
	padding: 2rem 0 3rem;
}

.hero {
	display: grid;
	gap: 1.5rem;
	grid-template-columns: minmax(0, 1.2fr) minmax(320px, 0.8fr);
	margin-bottom: 1.75rem;
	padding: 1.5rem;
	border: 1px solid var(--border-subtle);
	border-radius: 28px;
	background:
		linear-gradient(135deg, rgba(11, 65, 86, 0.08), transparent 58%),
		var(--surface-strong);
	box-shadow: var(--shadow-soft);
}

.hero__eyebrow {
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--accent);
}

.hero__title {
	margin-top: 0.5rem;
	font-size: clamp(2rem, 4vw, 3.25rem);
	line-height: 0.98;
}

.hero__description {
	max-width: 52ch;
	margin-top: 0.85rem;
	color: var(--text-secondary);
	line-height: 1.6;
}

.hero__meta {
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	gap: 0.875rem;
}

.hero__meta-item {
	padding: 0.9rem 1rem;
	border-radius: 18px;
	background: var(--surface-muted);
	border: 1px solid rgba(26, 44, 71, 0.08);
}

.hero__meta-item dt {
	font-size: 0.8rem;
	color: var(--text-muted);
}

.hero__meta-item dd {
	margin-top: 0.4rem;
	font-size: 1rem;
	font-weight: 600;
}

.workspace {
	display: grid;
	grid-template-columns: minmax(280px, 340px) minmax(0, 1fr);
	gap: 1.5rem;
	align-items: start;
}

.workspace__sidebar,
.workspace__main {
	display: grid;
	gap: 1.5rem;
}

.candidate-slot {
	padding: 1.4rem;
	border-radius: 24px;
	border: 2px dashed var(--border-strong);
	background:
		linear-gradient(180deg, rgba(217, 237, 245, 0.8), rgba(255, 255, 255, 0.92)),
		var(--surface-strong);
}

.candidate-slot__eyebrow {
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.08em;
	text-transform: uppercase;
	color: var(--accent);
}

.candidate-slot__title {
	margin-top: 0.55rem;
	font-size: 1.35rem;
	line-height: 1.25;
}

.candidate-slot__description {
	margin-top: 0.75rem;
	color: var(--text-secondary);
	line-height: 1.55;
}

.candidate-slot__list {
	margin-top: 1rem;
	padding-left: 1.1rem;
	color: var(--text-secondary);
	display: grid;
	gap: 0.5rem;
	line-height: 1.45;
}

.metric-list {
	display: grid;
	gap: 0.9rem;
}

.metric-list div {
	display: flex;
	justify-content: space-between;
	gap: 1rem;
	padding: 0.95rem 1rem;
	border-radius: 18px;
	background: var(--surface-muted);
}

.metric-list dt {
	color: var(--text-secondary);
}

.metric-list dd {
	font-weight: 700;
}

.note-list,
.attachment-list {
	display: grid;
	gap: 0.9rem;
	padding: 0;
	list-style: none;
}

.note-list__item,
.attachment-list__item {
	padding: 1rem 1.05rem;
	border-radius: 18px;
	background: var(--surface-muted);
	border: 1px solid rgba(26, 44, 71, 0.08);
}

.note-list__item h3 {
	font-size: 1rem;
	line-height: 1.35;
}

.note-list__item p {
	margin-top: 0.45rem;
	color: var(--text-secondary);
	line-height: 1.55;
}

.attachment-list__item {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
}

.attachment-list__name {
	font-weight: 600;
}

.attachment-list__date {
	margin-top: 0.35rem;
	color: var(--text-secondary);
}

.attachment-list__tag {
	padding: 0.35rem 0.6rem;
	border-radius: 999px;
	background: var(--warning-soft);
	color: var(--accent-strong);
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.04em;
}

@media (max-width: 960px) {
	.hero,
	.workspace {
		grid-template-columns: 1fr;
	}

	.hero__meta {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

@media (max-width: 640px) {
	.page-shell {
		width: min(100vw - 1rem, 100%);
		padding-top: 1rem;
	}

	.hero,
	.candidate-slot,
	.panel {
		border-radius: 22px;
	}

	.hero__meta {
		grid-template-columns: 1fr;
	}

	.attachment-list__item {
		align-items: flex-start;
		flex-direction: column;
	}
}
*** Add File: c:\repos\interview\docs\exercise-brief.md
# Exercise Brief

## Scenario

You are working on a sanitized Angular starter that represents part of an advisor workflow.

The current page already shows case metadata, decision notes, and attachments. One feature is intentionally missing: applicant information.

## Goal

Create an `ApplicantInformationComponent` and render it on the `AdvisorOverviewPageComponent`.

Use the design reference in `public/reference/applicant-information-reference.svg` as a visual guide.

## Starter Context

- The page shell already exists in `src/app/features/advisor-overview/`.
- Participant mock data is already available in `src/app/mock-data/advisor-case.mock.ts`.
- A lightweight shared panel component exists in `src/app/shared/ui/panel/`.
- You can create any additional files you need.

## Requirements

Build a standalone Angular component that:

1. Renders one card or row per participant.
2. Shows the participant's full name.
3. Shows the participant's role.
4. Shows the participant's personal number.
5. Derives age from `dateOfBirth`.
6. Uses a fallback when `dateOfBirth` is missing or invalid.
7. Is wired into the existing advisor overview page.

## Constraints

- Keep the scope tight. You do not need routing, services, HTTP calls, or state libraries.
- Treat the design reference as directional rather than pixel perfect.
- Prefer clear, maintainable code over decorative complexity.
- If you make tradeoffs, explain them out loud.

## Nice To Have

If you have time, you can also:

1. Add a singular or plural title depending on the number of participants.
2. Add a copy button for the personal number.
3. Add a focused unit test for either rendering or age calculation.

## What We Care About

- How you clarify the task before coding.
- How you structure the solution.
- How you work with existing code instead of rewriting everything.
- How you handle edge cases and accessibility basics.
- How you communicate decisions while pairing.

## Suggested Run Commands

```bash
npm install
npm start
npm test -- --watch=false
```
*** Add File: c:\repos\interview\public\reference\applicant-information-reference.svg
<svg xmlns="http://www.w3.org/2000/svg" width="720" height="540" viewBox="0 0 720 540" fill="none">
	<rect width="720" height="540" rx="32" fill="#EEF4F8"/>
	<rect x="48" y="48" width="624" height="444" rx="28" fill="#FFFFFF" stroke="#D7E1E8"/>
	<text x="88" y="112" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="1.4">REFERENCE</text>
	<text x="88" y="148" fill="#152637" font-family="Arial, sans-serif" font-size="28" font-weight="700">Applicant information</text>
	<rect x="88" y="184" width="544" height="122" rx="22" fill="#F7FAFC" stroke="#E1E8EE"/>
	<circle cx="128" cy="228" r="20" fill="#D9EDF5"/>
	<circle cx="128" cy="220" r="7" fill="#0F5C7A"/>
	<path d="M117 242c5-8 17-8 22 0" stroke="#0F5C7A" stroke-width="4" stroke-linecap="round"/>
	<text x="162" y="221" fill="#152637" font-family="Arial, sans-serif" font-size="22" font-weight="700">Alex Lindberg</text>
	<text x="162" y="248" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="16">Primary applicant</text>
	<text x="162" y="279" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="14">Personal number</text>
	<text x="162" y="299" fill="#152637" font-family="Arial, sans-serif" font-size="18" font-weight="700">12069012345</text>
	<rect x="546" y="268" width="42" height="42" rx="12" fill="#D9EDF5"/>
	<rect x="557" y="279" width="14" height="14" rx="3" stroke="#0F5C7A" stroke-width="2"/>
	<rect x="563" y="285" width="14" height="14" rx="3" stroke="#0F5C7A" stroke-width="2"/>
	<text x="576" y="221" text-anchor="end" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="14">Age</text>
	<text x="576" y="252" text-anchor="end" fill="#152637" font-family="Arial, sans-serif" font-size="26" font-weight="700">35 years</text>
	<rect x="88" y="326" width="544" height="122" rx="22" fill="#F7FAFC" stroke="#E1E8EE"/>
	<circle cx="128" cy="370" r="20" fill="#D9EDF5"/>
	<circle cx="128" cy="362" r="7" fill="#0F5C7A"/>
	<path d="M117 384c5-8 17-8 22 0" stroke="#0F5C7A" stroke-width="4" stroke-linecap="round"/>
	<text x="162" y="363" fill="#152637" font-family="Arial, sans-serif" font-size="22" font-weight="700">Sam Rivera</text>
	<text x="162" y="390" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="16">Co-applicant</text>
	<text x="162" y="421" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="14">Personal number</text>
	<text x="162" y="441" fill="#152637" font-family="Arial, sans-serif" font-size="18" font-weight="700">11038454321</text>
	<text x="576" y="363" text-anchor="end" fill="#5A6B7D" font-family="Arial, sans-serif" font-size="14">Age</text>
	<text x="576" y="394" text-anchor="end" fill="#152637" font-family="Arial, sans-serif" font-size="26" font-weight="700">-</text>
</svg>
