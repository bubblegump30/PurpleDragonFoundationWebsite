# Neo Purple showcase redesign

The November 12 redesign starts from published Sites version 30. A source ZIP was saved before editing. No newer Sites version existed when work began.

## Design

The homepage is replaced as one composition: cinematic dragon hero, three alternating software showcases, browser tools, a record-inspired music section, selected development stories, community, and contact. The shared stylesheet is rewritten as one coherent system, including the existing product and company pages, mobile navigation, and all seasonal palettes. The grouped footer is consistent across the site.

The detailed previous homepage content is retained in `updates.html`, linked from the homepage, Projects, and every footer. All previous homepage external destinations and project headings were checked for preservation. Dedicated project pages remain available, release distinctions remain explicit, and IDENTITIES for Android remains absent.

## Assets

- `images/neo-dragon-hero.jpg`: newly generated, text-free amethyst dragon artwork for this site; JPEG quality 88, 1536 × 1024, approximately 198 KB. This is decorative brand imagery, not a screenshot or product demonstration.
- `images/dragonstrap-accounts.png`: official v2.7.0 release preview, from https://github.com/bubblegump30/DragonStrap/releases/download/v2.7.0/Accounts-System-Preview.png . Account and meter values are illustrative and the caption says so.
- `images/powertools-dashboard.svg`: project documentation artwork, from https://raw.githubusercontent.com/bubblegump30/PurpleDragonPowerTools/main/docs/screenshots/dashboard.svg . Labeled as documentation artwork, not current runtime proof.
- BIOS Viewer and Flipper Studio screenshots are the previously preserved site assets.
- The music sleeve and vinyl are CSS brand artwork using the artist’s name, not an invented album or release cover. All original music destinations remain linked, including the unavailable iHeartRadio profile with its existing note.

## Validation

- Dependency-free structural/local-link checker passes for 19 pages.
- Both JavaScript files pass syntax checks.
- 57 responsive browser page checks at 320, 768, and 1440 pixels: no horizontal overflow or completed broken images observed.
- All 12 themes exercised, including holiday decoration and banner changes.
- Saved theme persistence between pages and mobile Escape focus return verified.
- Product imagery, desktop hero, music composition, and mobile homepage visually reviewed.

No new JavaScript dependency, external font request, auto-playing media, or video background is introduced. Below-fold product images are lazy loaded and have explicit dimensions. Reduced-motion preferences disable animation and transitions. This is targeted verification, not a Lighthouse score, exhaustive accessibility audit, or real-device test.

Publication uses the same Sites project and existing custom-domain attachment. The source mirror PR is separate from the Sites deployment.
