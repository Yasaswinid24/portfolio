# Yasaswini Dharmavarapu — Portfolio

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4. No video, audio or external runtime scripts.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| All content (résumé-derived) | `src/lib/data.ts` |
| Components | `src/components/` |
| Styles / design tokens | `src/app/globals.css` |
| Character image (hero) | `public/images/yasaswini-character.png` |
| Résumé download | `public/documents/Yasaswini_Dharmavarapu_Resume.docx` |

- The character image is the supplied render, cropped to the figure (no recolouring or resizing of the character). It blends into the off-white page via `mix-blend-mode: multiply`.
- To update the résumé, replace the `.docx` with the same filename (or change `profile.resumeHref`).
- Fonts (Inter, Instrument Serif) are bundled via `@fontsource` packages, so there are no CDN requests.

## Editing content

Everything displayed comes from `src/lib/data.ts`. Project links are only shown when a project has an `href`; none are set because the résumé contains no project URLs. Add `href: "https://…"` to a project to show a "View project" link.

The phone number in the résumé is intentionally not displayed.

## Notes

- Project visuals are illustrative HTML/CSS diagrams, labelled as such. They are not screenshots.
- `prefers-reduced-motion` disables animations and smooth scrolling.
