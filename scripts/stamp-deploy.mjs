// Runs during `wrangler deploy` (see "build.command" in wrangler.jsonc).
// Rewrites the "Updated: ..." stamp in every page to the actual deployment
// time, in Eastern Time. The committed value in the HTML is only a fallback
// for when the build hook doesn't run (e.g., opening the files locally).
import { readFileSync, writeFileSync } from 'node:fs';

const now = new Date();
const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    month: 'short', day: 'numeric', year: 'numeric',
    hour: 'numeric', minute: '2-digit', hour12: true
}).formatToParts(now).reduce((acc, p) => (acc[p.type] = p.value, acc), {});

const stamp = `Updated: ${parts.month} ${parts.day}, ${parts.year} &middot; ${parts.hour}:${parts.minute} ${parts.dayPeriod} ET`;
const pattern = /Updated: [A-Z][a-z]{2} \d{1,2}, \d{4} &middot; [^<]*?ET/g;

for (const file of ['index.html', 'guides/heating-coils.html', 'guides/full-model.html']) {
    const src = readFileSync(file, 'utf8');
    const out = src.replace(pattern, stamp);
    if (out !== src) {
        writeFileSync(file, out);
        console.log(`stamped ${file} -> ${stamp}`);
    } else {
        console.warn(`WARNING: no stamp found in ${file}`);
    }
}
