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