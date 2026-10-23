# ICONA website starter

A starter website for the **International CO₂ Natural Analogues Network (ICONA)**. Built with Astro, GitHub Pages, Leaflet and Decap CMS. Publications will be supplied by Zotero/BibBase.

> **Status:** Prototype. Example research sites, a sample institution and demonstration news are provided. Verify all records and replace placeholders before public launch. No live website, GitHub repository, Decap login or Zotero integration has yet been created.

## 1. Preview on your computer

1. Install [Node.js LTS](https://nodejs.org/).
2. Open a terminal in the unzipped `icona-starter` folder.
3. Run `npm install` and then `npm run dev`.
4. Open the local address shown by Astro (normally `http://localhost:4321/icona-website/`).

To create the production build run `npm run build`. The static website is generated in `dist/`.

## 2. Publish to GitHub Pages

1. Create a **GitHub organisation** for ICONA, if appropriate, and a **public** repository named `icona-website` under that account.
2. Upload **all contents** of this project to the repository's root, including the hidden `.github` folder. Easiest: clone the new repository locally, copy the contents into it, commit and push. Or use GitHub's **Add file → Upload files** (check the `.github` workflow is included).
3. Change `YOUR-ORG` in `public/admin/config.yml` to the actual GitHub organisation/username. Commit the change.
4. In the repository go to **Settings → Pages → Build and deployment → Source → GitHub Actions**.
5. Open the **Actions** tab, and verify that `Deploy ICONA website` finishes successfully. Website URL: `https://YOUR-ORG.github.io/icona-website/`.
6. The workflow uses environment variables to set the public site and `/icona-website` base path. **If you choose a different repository name**, update the `repo` in CMS config and verify deployed URL. A special root domain repo (`YOUR-ORG.github.io`) or custom domain needs different `BASE_PATH`/`SITE_URL` values in `.github/workflows/deploy.yml`.

## 3. Enable Decap CMS (separate step)

The CMS editor UI is at `https://YOUR-ORG.github.io/icona-website/admin/` after publishing. **It cannot log in until GitHub authentication is configured.** GitHub Pages does *not* provide an OAuth backend. Do **not** paste GitHub client secrets into the repository or CMS config.

- Choose and deploy a [Decap-compatible GitHub OAuth backend](https://decapcms.org/docs/backends-overview/) (for example the documented Cloudflare Worker proxy), OR a compatible hosted backend.
- Create a GitHub OAuth App with the callback required by that service, then set `backend.base_url` and possibly `backend.auth_endpoint` in `public/admin/config.yml` to the service's URL.
- Invite editors as GitHub repository collaborators or team members (appropriate write access); keep coordinators as reviewers. The enabled `publish_mode: editorial_workflow` creates drafts/pull requests before publication.
- Test with a non-admin editor. For broader public participation, consider Decap [Open Authoring](https://decapcms.org/docs/open-authoring/), which needs additional configuration and GitHub-based review.

**GitHub branch protection and publishing:** review contributor roles carefully; direct edits to `main` outside the CMS should be limited to maintainers. A UI-level editorial workflow alone is not a complete permissions system.

**IMPORTANT:** Media images uploaded through Decap use `public_folder: /uploads` and absolute paths, which work at the domain root but **not necessarily for a project Pages URL** (`/icona-website/`). Before using image uploads in production, change `public_folder` to `/icona-website/uploads` for a project repo, or adapt the renderer to prepend the base path. URL-specific setup is deliberate rather than guessed.

## 4. How members update content

- **News:** choose **News → New**, enter title, date, summary and text, then save draft for review.
- **Research sites:** choose **Research sites → New**, add the unique slug, country, valid latitude/longitude and description.
- **Institutions:** choose **Institutions → New**, enter its coordinates, website and associated site IDs.
- **Connections:** `institution_ids` on each site should be the `slug` of each matching institution. Currently site profile pages show those links. Later releases can provide dropdown selectors.
- Once approved and published, the content is committed and GitHub Actions rebuilds the static website.
- The map has independent markers for both types, a filter and name/country search. Maps use OpenStreetMap tiles; follow its [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) if usage grows.

## 5. Publications — Zotero + BibBase

1. Create an ICONA **public Zotero group library**. Only invite approved editors to add/edit items. Add bibliographic references and DOIs (no PDFs needed).
2. Go to [BibBase setup](https://bibbase.org/start), select the Zotero group and generate the publication page/embedding code.
3. Replace the placeholder inside `src/pages/publications.astro` with the **exact BibBase embed snippet** BibBase generates. Keep any external JavaScript loading in an appropriate `<script is:inline>` element if needed; test on the published site.
4. This starter deliberately does not invent a Zotero group ID or BibBase embed URL. Whether edits propagate immediately depends on BibBase refresh behavior.

## 6. File structure

```
src/pages/                  Homepage, network map, news, publications, about, site profiles
src/data/sites/*.json       Natural laboratory records
src/data/institutions/*.json Collaborating institution records
src/data/news/*.json        News entries
src/layouts/Base.astro      Navigation and page shell
src/styles/global.css       Theme, typography and responsive layout
public/admin/               Decap CMS editor and collection schema
.github/workflows/          GitHub Pages deployment
```

## 7. Before launch

- Replace placeholder content; verify site locations/coordinates and institution affiliations.
- Confirm ICONA's full name, approved wording, logo usage, photographs and permissions.
- Confirm the official contact address and funding acknowledgments.
- Test map interaction on mobile, CMS login, editorial review, image uploads, published URL and publication embeds.
- Choose a long-term maintainer or team for GitHub, OAuth and dependency updates.
- If the university's `/~icona/` URL needs to be retained, check its server/redirect policy with university IT.

## Technology

[Astro](https://astro.build/) · [Leaflet](https://leafletjs.com/) · [Decap CMS](https://decapcms.org/) · [Zotero](https://www.zotero.org/) · [BibBase](https://bibbase.org/)
