# Purple Dragon Foundation website

Production: https://www.purpledragonfoundationltd.xyz/

The website is a buildless, static HTML/CSS/JavaScript portfolio. `dist/` contains all public pages and assets. `site.css` contains shared styles, `theme.js` applies the saved palette before paint, and `site.js` handles seasonal decorations and accessible mobile navigation. No framework, npm installation, third-party font, or client API is required.

## Local preview and checks

```powershell
python scripts/check-site.py
node --check dist/theme.js
node --check dist/site.js
python -m http.server 8766 --bind 127.0.0.1 --directory dist
```

Open http://127.0.0.1:8766/ . Test narrow, tablet, and desktop layouts, navigation with a keyboard, theme persistence, and project links before publication. If shared assets change, update their query version in every page.

## Source and deployment

`.openai/hosting.json` preserves the existing Sites project identity and serves `dist/`. OpenAI Sites is the production host; the custom domain is already attached to that project. The public GitHub repository is a source mirror and review location. A GitHub push alone does not publish this site, and there is no GitHub Actions deployment workflow in this repository.

To publish, open the same Sites project's source repository using the Sites workflow, reconcile any later edits from ChatGPT Sites, validate the exact source, commit and push that source to the Sites repository, package the matching static files, save a Sites version with that commit and archive, then deploy the saved version. Keep the current public audience and existing project ID. Verify the returned deployment status and domain after publication. Never deploy an older GitHub snapshot over newer Sites content.

The November 12 reconciliation started from Sites version 28, commit `5f6055150449293bfc7bd8e624f4d8641f099cb6`, rather than the older GitHub main snapshot `baf1bd037deb92db3e1e5447a686d555e5a45333`. Dated backups of both were created before editing. Version 28 remains available for rollback through Sites history. Public response backups may include host-injected Cloudflare scripts; these are excluded from authored source.

## Content maintenance

Release metadata reviewed November 12, 2026 is recorded in `docs/release-evidence.json`. Published, non-draft GitHub releases determine stable/prerelease labels. README versions can lag published releases; PowerTools is one such case. Source-only distributions are labeled separately. Development summaries without a public release remain in development, and no new availability is inferred from a feature description.

Keep company contact `kyle@purpledragonfoundationltd.xyz`, the music/community destinations, the Neo Purple design, all seven color palettes and five holiday themes. IDENTITIES for Android was canceled and must remain absent. The separate IDENTITIES community website and browser userscript are retained.

The existing iHeartRadio artist URL returned HTTP 404 on November 12; it is retained with an availability note. Other external destinations returned successful HTTP responses, which establish reachability rather than sign-in, playback, invite acceptance, or installer safety.

## Community, support, and licensing

- [Contributing](CONTRIBUTING.md) — setup, validation, content, and publication guidance.
- [Code of conduct](CODE_OF_CONDUCT.md) — participation and private conduct reporting.
- [Security policy](SECURITY.md) — private vulnerability reporting.
- [Accessibility statement](ACCESSIBILITY.md) — supported behavior, verification, and known limits.
- [MIT license](LICENSE) — original website code and technical documentation.
- [Asset licensing](ASSET-LICENSING.md) — artwork, music, screenshots, and branding exclusions.

Use the repository issue templates for website bugs, feature requests, and
accessibility barriers. For general inquiries, email
[kyle@purpledragonfoundationltd.xyz](mailto:kyle@purpledragonfoundationltd.xyz).
