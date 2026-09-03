# dun-dra design rules

Single source of truth for the dun-dra look. Paste the prompt at the
bottom into any AI when asking it to make UI for this project.

## Identity

Fantasy minimal. Near-black stage, cream type, one gold accent.
A D&D adventure platform: fate, dice, ancient artifacts. Never
neon, never playful, never corporate blue.

## Color

| Token    | Value     | Use                              |
|----------|-----------|----------------------------------|
| bg       | `#08080B` | page background                  |
| fg       | `#EDE8DF` | headlines, primary text          |
| accent   | `#C9A961` | eyebrow, rules, active states    |
| muted    | `fg @ 60%`| body copy, meta labels         |
| faint    | `fg @ 40%`| hints, disabled                |
| line     | `white @ 10-25%` | borders, hairlines        |
| primary btn | `fg` bg, `#08080B` text | main action         |

```css
:root {
  --dun-bg: #08080B;
  --dun-fg: #EDE8DF;
  --dun-accent: #C9A961;
  --dun-muted: rgb(237 232 223 / 0.6);
  --dun-line: rgb(255 255 255 / 0.14);
  --font-display: "Libre Baskerville", Georgia, serif;
  --font-mono: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
}
```

## Type

- Display: Libre Baskerville 400. Headlines only. Sentence case.
  Big, tight leading, cream. Never bold display, never italic
  display unless quoting fate or magic.
- Labels: system mono, 10-11px, uppercase, letter-spacing
  0.18em-0.32em. Eyebrows, buttons, meta, captions. Gold for
  eyebrows, cream at 60% for meta.
- Body: small (13-15px), relaxed leading, cream at 62%.
  Max width 28rem, always centered in hero.

## Components

- Eyebrow: 32px hairline rule in gold at 70% + mono micro label
  in gold, tracking 0.32em.
- Primary button: pill (rounded-full), height 44px, px-7,
  mono 11px uppercase tracking 0.18em, cream bg, near-black
  text. Hover: lift 2px. No shadows except a soft cream glow
  on dark stages.
- Secondary button: same shape, transparent bg, 1px border
  cream at 24%, cream text. Hover: white at 5% fill.
- Meta strip: row of mono micro labels, cream at 60%,
  separated by gap, hidden on small screens.
- Cards/panels: rounded-xl, 1px line border, bg white at
  2-4%. No heavy shadows.
- Icon: minotaur mark in cream (`public/minotaur.svg`) on
  near-black. Never recolor it, never put it on light bg.

## Backgrounds

Dark stages only. Layer in this order: base `#08080B`,
technical grid (white 4.5% lines, 40px, masked to a soft
radial), one warm ambient glow (stone/neutral, blur 130px+),
vignette to near-black at edges, film grain at 2-3% opacity.
Grain is an inline SVG turbulence data URI, never a file.

## Motion

Springs, never duration curves. Settle like something costly:
stiffness 96, damping 17, mass 0.9. Stagger children 0.11s
with 0.15s delay. Scene fades in over 1200ms. Always respect
`prefers-reduced-motion`: show final state, no spin, no drift.

## 3D (hero only)

One artifact per viewport (the crystal). Real transmission,
chromatic dispersion around 0.42, neutral white tint. Slow
idle spin plus pointer drift and wheel spin with inertia.
Copy stays in the lower third, crystal never covers CTAs.
Pause rendering off-screen.

## Copy voice

Short, fateful, second person. Dice, fate, choices, reality.
No tech words (no HDRI, transmission, assets, buffers).
No lorem, no exclamation marks.

## Never do

- No light mode, no gradients on text except cream-to-gold
  sparingly, no rounded-lg buttons (pills only), no emoji,
  no stock photos, no purple/blue neon, no linear motion,
  no em dashes in visible copy, no scrolling hero.

---

## Paste-this prompt for another AI

```
You are building UI for dun-dra, a dark fantasy D&D adventure
platform. Follow these rules strictly.

Colors: bg #08080B, cream text #EDE8DF, gold accent #C9A961,
muted cream at 60%, hairline borders white at 10-25%.

Fonts: headlines in Libre Baskerville 400, cream, tight
leading. All labels, buttons, eyebrows in system monospace,
10-11px, uppercase, letter-spacing 0.18em or more.

Buttons are pills (rounded-full, 44px tall, px-7). Primary:
cream bg with near-black text, lifts on hover. Secondary:
transparent with thin cream border, subtle white fill on
hover.

Eyebrow pattern: short gold hairline rule plus gold mono
micro label. Body copy small, centered, max 28rem wide.

Backgrounds: near-black with faint technical grid, one soft
warm glow, dark vignette, subtle film grain. No light mode,
no neon, no stock imagery.

Motion: spring physics only (stiff, well damped), staggered
entrances, respect prefers-reduced-motion.

Voice: short fateful fantasy copy about fate, dice, choices.
No tech jargon, no emoji, no em dashes.

Match the existing hero in src/App.tsx and src/index.css.
Ask before adding any new color, font, or radius.
```
