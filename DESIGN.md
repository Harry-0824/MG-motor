# DESIGN.md

## Overview

This project should feel like a premium automotive landing page for a modern car brand.

The design should communicate:

- Premium quality
- Confidence
- Technology
- Performance
- Product clarity
- Trust

The site should not feel like a generic React demo or a basic brochure page. It should feel like a polished vehicle showcase with clear visual hierarchy, strong product presentation, and conversion-oriented calls to action.

## Visual Direction

Use a cinematic, refined, product-focused automotive website style.

Preferred visual qualities:

- Large vehicle-focused hero sections
- Dark or refined neutral surfaces
- Clean specification areas
- Strong model and feature presentation
- Confident CTA sections
- High-quality spacing and alignment
- Premium but not overly decorative UI

Avoid:

- Generic startup landing page styling
- Random bright colors unrelated to the automotive brand feel
- Cluttered cards
- Excessive animation
- Overly playful visuals
- Redesigning unrelated pages or flows inside scoped UI tasks

## Colors

The visual system should feel premium, stable, and modern.

Recommended color roles:

- Background: black, dark graphite, deep gray, or clean white depending on section purpose
- Primary text: white on dark surfaces, near-black on light surfaces
- Secondary text: muted gray
- Accent: restrained red, silver, blue, or brand-appropriate highlight color
- Borders: subtle gray or translucent lines
- Cards: clean surfaces with controlled contrast

Implementation rules:

- Reuse existing project styles and styled-components patterns when available.
- Do not introduce many new arbitrary colors.
- Use accent colors sparingly for CTAs, active states, and important highlights.
- Preserve readability on both dark and light sections.

## Typography

Typography should feel clean, confident, and premium.

Rules:

- Use strong but refined heading hierarchy.
- Hero text should be large and direct.
- Specification text should be clear and scannable.
- Avoid overly playful or decorative typography.
- Avoid too many font sizes or weights.

Recommended hierarchy:

- Hero title: large, confident, and concise
- Section heading: clear and premium
- Feature title: strong but not oversized
- Body text: readable and controlled
- Metadata / specs: compact and easy to scan

## Layout & Spacing

The layout should prioritize product presentation and conversion.

Rules:

- Use generous spacing around hero, vehicle showcase, and CTA sections.
- Keep content aligned to a consistent container width.
- Use clear grid layouts for specs, features, and cards.
- Preserve visual breathing room around vehicle imagery.
- Avoid cramped layouts.
- Do not change unrelated layout areas when working on a scoped issue.

Responsive rules:

- Mobile layout should preserve product clarity.
- Vehicle imagery should scale cleanly.
- CTA buttons should remain visible and easy to tap.
- Specs should stack into readable groups on small screens.

## Components

### Buttons

Buttons should feel polished and conversion-oriented.

Rules:

- Primary CTAs should be visually prominent.
- Secondary actions may use outline or text styles.
- Button labels should be short and action-focused.
- Hover states should be refined, not exaggerated.

### Vehicle / Feature Cards

Vehicle and feature cards should feel premium and structured.

Rules:

- Use clear title, concise description, and supporting specs or feature details.
- Keep spacing consistent.
- Use subtle borders, shadows, or surface contrast when appropriate.
- Avoid dense, cluttered card layouts.

### Specification Sections

Specs should be easy to scan.

Rules:

- Use consistent labels and values.
- Group related specs together.
- Use clear visual separation between groups.
- Avoid making specs look like generic dashboard widgets.

### Navigation

Navigation should be simple and brand-like.

Rules:

- Keep navigation clean and readable.
- Avoid unnecessary menu complexity.
- Preserve mobile navigation usability.

## Motion & Interaction

Motion should support premium feel without distracting from product clarity.

Rules:

- Prefer subtle transitions, hover effects, and reveal animations.
- Avoid excessive motion.
- Do not add heavy animation libraries unless explicitly requested.
- Keep performance in mind, especially around image-heavy sections.

## Accessibility

Design changes must preserve accessibility.

Rules:

- Maintain sufficient color contrast.
- Use semantic HTML where possible.
- Do not remove visible focus states.
- Interactive elements must remain keyboard accessible.
- Avoid using color alone to communicate meaning.

## Do's

- Keep the visual language premium and automotive-focused.
- Prioritize vehicle imagery, specs, and CTA clarity.
- Reuse existing styled-components patterns where possible.
- Keep UI changes scoped to the GitHub Issue.
- Check responsive behavior after UI changes.

## Don'ts

- Do not introduce unrelated visual styles.
- Do not redesign unrelated pages or sections.
- Do not add a UI library unless explicitly requested.
- Do not copy reference images pixel-by-pixel.
- Do not create broad refactors inside a UI issue.
- Do not add unnecessary markdown files.

## AI Implementation Rules

When implementing UI-related GitHub Issues:

1. Read this file before modifying UI.
2. Follow `AGENTS.md` for engineering rules.
3. Treat visual references as direction, not pixel-perfect specifications.
4. Keep changes limited to the page, section, or component group described in the issue.
5. Do not introduce unrelated redesigns.
6. Do not modify unrelated files.
7. Explain in the PR summary how the implementation follows this design direction.
