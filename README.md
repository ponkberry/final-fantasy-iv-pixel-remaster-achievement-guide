# Final Fantasy IV (Pixel Remaster) Achievement Guide

A step-by-step walkthrough paired with achievement, bestiary, and treasure trackers for the
Steam Pixel Remaster of Final Fantasy IV. Progress is saved in the browser's localStorage and can be
exported/imported as JSON.

Sister project of the [3D Remake guide](https://github.com/ponkberry/final-fantasy-iv-achievement-guide).

## Pages

- **Walkthrough** - 36 chapters following the story, with achievement callouts plus per-chapter
  treasure and bestiary checklists. Red banners mark one-visit dungeons and missables.
- **Achievements** - all 30 Steam achievements. Treasure Hunter, Item Detector, Field Research,
  Summon Master, Summon Collector, Power Unleashed, and Master of IV complete automatically from
  your other progress.
- **Bestiary** - all 197 entries (158+ are bosses), filterable by boss/missable.
- **Treasures** - all 342 chests and 54 hidden items, grouped by spot.

## Sources

- Achievements and icons: [Steam global achievements](https://steamcommunity.com/stats/1173800/achievements/)
- Walkthrough, bestiary numbers, and treasure counts:
  ["FINAL FANTASY IV | Walkthrough & Achievement Guide"](https://steamcommunity.com/sharedfiles/filedetails/?id=2596700264)
  by lylat and collaborators. Step text is paraphrased. The location screenshots in `public/guide/`
  come from the same guide and are used with its authors' permission (downscaled to 640px wide);
  `src/data/guideImages.ts` maps each one to a treasure or walkthrough step.

## Development

```bash
npm install
npm run dev      # http://localhost:5173/final-fantasy-iv-pixel-remaster-achievement-guide/
npm run build    # type-checks and builds into docs/ for GitHub Pages
npm run lint
```

Deployed from `docs/` on the default branch via GitHub Pages, served at
`https://ponkberry.github.io/final-fantasy-iv-pixel-remaster-achievement-guide/`.

localStorage keys are prefixed `ffiv-pr-` so this guide's progress doesn't collide with the 3D
Remake guide on the same `ponkberry.github.io` origin.
