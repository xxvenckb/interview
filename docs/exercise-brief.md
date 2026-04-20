# Exercise Brief

## Scenario

You are working on a sanitized Angular starter that represents part of an advisor workflow.

The current page already shows case metadata, rule violations, case stages, and attachments. One feature is intentionally missing: applicant information.

## Goal

Create an `ApplicantInformationComponent` and render it on the `AdvisorOverviewPageComponent`.

Use the design reference in `public/reference/reference.png` as a visual guide.

## Starter Context

- The page shell already exists in `src/app/features/advisor-overview/`.
- Participant mock data is already available in `src/app/mock-data/advisor-case.mock.ts`.
- A lightweight shared panel component exists in `src/app/shared/ui/panel/`.
- You can create any additional files you need.

## Requirements

Build a standalone Angular component that:

1. Renders one card or row per participant.
2. Shows the participant's full name.
3. Shows the participant's personal number.
4. Derives age from the participant's personal number.
5. Uses a fallback when the personal number cannot be parsed.
6. Is placed and wired into the existing advisor overview page where you think it belongs.

## Parsing Rule

- You can assume the first 6 digits of the personal number represent `ddMMyy`.
- You can infer the century with a simple rule: if `yy` is greater than the current two-digit year, treat it as `19yy`; otherwise treat it as `20yy`.
- You do not need to support special personal-number variants or domain-specific edge cases beyond invalid input fallback.

## Optional Helper Path

- If you get stuck on the parsing part, you may use the helper functions in `src/app/core/utils/personal-number.ts`.
- You can also ignore those helpers and implement the parsing yourself.

## Constraints

- Keep the scope tight. You do not need routing, services, HTTP calls, or state libraries.
- Treat the design reference as directional rather than pixel perfect.
- Prefer clear, maintainable code over decorative complexity.
- Use the existing page structure and the sketch to decide where the component should be placed.
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