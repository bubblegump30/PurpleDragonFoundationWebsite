# Accessibility

Purple Dragon Foundation aims to make the website usable with keyboards,
assistive technology, and different screen sizes. Accessibility work is ongoing;
this statement is not a claim of WCAG certification or complete conformance.

## Implemented support

- Semantic headings, navigation landmarks, and a skip-to-content link.
- Visible keyboard focus, labeled theme controls, and a mobile menu with
  expanded state and Escape-key focus return.
- Alternative text for informative images; decorative artwork is hidden from
  assistive technology where appropriate.
- Responsive layouts and reduced-motion styling.
- Seven color choices and five holiday themes, with saved preferences.

## Verification and known limits

The November 12, 2026 redesign was checked in a current desktop Edge browser at
320, 768, and 1440 CSS pixels across 19 pages. All 12 theme choices, preference
persistence, and the mobile menu's Escape behavior were exercised. Static
checks cover headings, image alternatives, duplicate attributes/IDs, and local
links. These checks do not establish complete accessibility.

An exhaustive screen-reader audit, real-device mobile testing, comprehensive
zoom/reflow testing, and a full contrast audit across all themes remain to be
completed. Product screenshots contain small text; nearby text and project
documentation describe the features. External music platforms, GitHub pages,
and other linked services have their own accessibility behavior. JavaScript is
needed for theme switching and menu enhancement; navigation remains available
without JavaScript.

## Report a barrier

Use the repository's **Accessibility barrier** issue template or email
**kyle@purpledragonfoundationltd.xyz** privately. Include the page URL, what you
tried, what prevented access, and your browser, device, theme, and assistive
technology if relevant. Screenshots or a short recording can help, but are not
required. Do not include private data. Suggestions for an accessible alternative
are welcome, and you do not need to propose a technical fix.
