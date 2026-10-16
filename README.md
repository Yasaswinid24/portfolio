# Yasaswini Dharmavarapu — Portfolio

Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 4. No video, audio or external runtime scripts.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```
Live URL.: https://portfolio-orcin-three-vlx23n3ngl.vercel.app/#home
## Where things live

| What | Where |
| --- | --- |
| All content (résumé-derived) | `src/lib/data.ts` |
| Components | `src/components/` |
| Styles / design tokens | `src/app/globals.css` |
| ID card (About section) | `src/components/IdCard.tsx`, styles under `/* ID card */` in `globals.css` |
| Hover effects | `Hover and focus effects` block in `globals.css`; `src/components/HopText.tsx` for the contact heading |
| Character image (hero) | `public/images/yasaswini-character.png` |
| Résumé download | `public/documents/Yasaswini_Dharmavarapu_Resume.docx` |

- The character image is the supplied render, cropped to the figure (no recolouring or resizing of the character). It blends into the off-white page via `mix-blend-mode: multiply`.
- To update the résumé, replace the `.docx` with the same filename (or change `profile.resumeHref`).
- The font (Bricolage Grotesque) is bundled via an `@fontsource-variable` package, so there are no CDN requests.

## Editing content

Everything displayed comes from `src/lib/data.ts`. Project links are only shown when a project has an `href`; none are set because the résumé contains no project URLs. Add `href: "https://…"` to a project to show a "View project" link.

The phone number in the résumé is intentionally not displayed.

## Notes

- Project visuals are illustrative HTML/CSS diagrams, labelled as such. They are not screenshots.
- `prefers-reduced-motion` disables animations and smooth scrolling.

## ID card and hover effects

- **ID card** (About): hangs from a lanyard and swings like a pendulum when the pointer moves across it, with a faint idle sway. The loop only runs while the card is on screen and is switched off under `prefers-reduced-motion`. It flips on mouse hover, on tap (touch) and on Enter or Space (keyboard). Every line printed on it is read from `src/lib/data.ts`. There is deliberately no ID number, because the résumé has none. The barcode and the round sticker are decoration only.
- **Hover effects**: list rows (skills, projects, experience, education, publication, About highlights) lift onto a white plate; chips lift and tint; buttons lift; the hero portrait's backing shape slides out; the contact heading's letters hop. They apply only on devices that can hover, so touch screens never get stuck states. Keyboard focus shows the row plate too.
