# Contributing

Thanks for helping improve the Purple Dragon Foundation website. Read the
[code of conduct](CODE_OF_CONDUCT.md) before participating.

## Choose the right place

- Use a bug report for broken layouts, links, themes, or navigation.
- Use a feature request for a proposed website improvement.
- Use an accessibility report for a barrier to using the website.
- Report vulnerabilities privately using [SECURITY.md](SECURITY.md).
- Product bugs belong in the relevant software repository, linked from the
  website's Projects page. This repository contains the portfolio website.

For a substantial redesign, open an issue to discuss scope before implementing.
Do not include personal data, API keys, access tokens, or unredacted logs.

## Local setup

The website is static HTML, CSS, and JavaScript; no npm installation is needed.
Use Python 3 and Node.js for the existing checks:

```sh
python scripts/check-site.py
node --check dist/theme.js
node --check dist/site.js
python -m http.server 8766 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8766/ . Shared styles are in `dist/site.css`;
palette initialization is in `dist/theme.js`; navigation and seasonal decoration
are in `dist/site.js`. Keep related changes focused and avoid duplicate rules
or functions. If a large component is ever introduced and needs a complex
refactor, replace it cleanly rather than leaving overlapping implementations.

## Before opening a pull request

1. Start from current `main`. Check with the maintainer for newer ChatGPT Sites
   changes: GitHub is a source mirror, not proof of the latest published source.
2. Preserve Neo Purple branding, theme choices, company email, music/community
   destinations, release distinctions, and the canceled Android app's removal.
3. Verify release claims against published repository releases. Label planned
   features, previews, public source, and illustrative screenshots accurately.
4. Run the checks above. Test affected pages on narrow and desktop layouts,
   with keyboard navigation and reduced motion. For shared CSS changes, review
   all pages. For theme changes, review all 12 palettes/holiday choices.
5. Check headings, alt text, visible focus, contrast, overflow, local anchors,
   and image loading. Bump shared asset query versions in every page when needed.
6. Describe the change, validation, and remaining limits. Add before/after
   screenshots for visible changes, without personal information.

## Publication and rights

A GitHub merge does not automatically deploy to the custom domain. Maintainers
publish through the existing Sites project; follow the README's source
reconciliation and deployment process. Do not change the project ID, audience,
or domain as part of an unrelated contribution.

Submit only work you have permission to contribute. Original code and technical
documentation contributions are provided under this repository's MIT license.
Assets retain their own terms; see [ASSET-LICENSING.md](ASSET-LICENSING.md).
No separate contributor license agreement is required by this repository.
