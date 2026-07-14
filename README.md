# Mikvah Construction Guides

A static website of interactive 3D visual guides that explain how a mikvah is built,
intended for contractors and builders.

## Pages

- `index.html` — landing page listing all guides.
- `guides/heating-coils.html` — **Hidden Heating Coils Under the Steps**: a 9-step
  interactive 3D walkthrough. Covers the one-shot monolithic pour (four walls + floor),
  the thick 5′ floor half vs. the 8′ bor half with its ledge, the floor poured above the
  bor with the two-hole granite cover, the staircase, and the key detail: a styrofoam
  block-out cast into the wall that leaves a recessed indent, letting the radiator's
  pipes climb from the void under the steps to a wall penetration *above* the 51″ water
  line. Supports both coil placements (north wall serpentine / east wall step-shaped),
  section cuts, hide-stairs, and labels.
- `guides/full-model.html` — the full parametric reference model (every dimension
  adjustable, build-sequence animation, section cuts).

## Running

It's a fully static site — no build step. Open `index.html` in a browser, or serve the
folder (`python3 -m http.server`) and browse to it. Three.js is loaded from a CDN, so an
internet connection is required.

Works out of the box with GitHub Pages: serve the repository root.
