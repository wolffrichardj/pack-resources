const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const pages = [
  {
    name: "Pinewood Derby",
    relPath: "references/pack-operations/pinewood-derby/index.html",
    title: "Pinewood Derby Pack Reference",
    h1: "Pinewood Derby",
    headings: [
      "Pre-Event Planning",
      "Supplies and Equipment",
      "Recommended Race Flow",
      "Cleanup and Closeout",
      "Optional Example Notes",
    ],
  },
  {
    name: "Blue & Gold",
    relPath: "references/pack-operations/blue-gold/index.html",
    title: "Blue and Gold Pack Reference",
    h1: "Blue & Gold",
    headings: [
      "Pre-Event Planning",
      "Food and Supplies",
      "Recommended Event Flow",
      "Cleanup and Closeout",
      "Optional Example Notes",
    ],
  },
  {
    name: "New Family Orientation",
    relPath: "references/pack-operations/new-family-orientation/index.html",
    title: "New Family Orientation Pack Reference",
    h1: "New Family Orientation",
    headings: [
      "Annual Preparation",
      "Materials to Bring",
      "Recommended Meeting Flow",
      "Closeout",
      "Optional Example Notes",
    ],
  },
  {
    name: "Crossover",
    relPath: "references/pack-operations/crossover/index.html",
    title: "Crossover Operations Reference",
    h1: "Crossover",
    headings: [
      "Pre-Event Planning",
      "Setup and Decor",
      "Recommended Event Flow",
      "Cleanup and Handoff Notes",
      "Optional Example Notes",
    ],
  },
];

const disallowedMainText = ["Pack 285", "St. Mark"];
const portableCeremonyPages = [
  {
    name: "Arrow of Light Rank Kit",
    relPath: "ceremonies/crossover/aol.html",
    title: "Arrow of Light Rank Kit - Pack 285",
    h1: "Arrow of Light",
  },
  {
    name: "Bear Rank Kit",
    relPath: "ceremonies/crossover/bear.html",
    title: "Bear Rank Kit - Pack 285",
    h1: "Bear Crossover",
  },
  {
    name: "Lion Rank Kit",
    relPath: "ceremonies/crossover/lion.html",
    title: "Lion Rank Kit - Pack 285",
    h1: "Lion Crossover",
  },
  {
    name: "Tiger Rank Kit",
    relPath: "ceremonies/crossover/tiger.html",
    title: "Tiger Rank Kit - Pack 285",
    h1: "Tiger Crossover",
  },
  {
    name: "Webelos Rank Kit",
    relPath: "ceremonies/crossover/webelos.html",
    title: "Webelos Rank Kit - Pack 285",
    h1: "Webelos Crossover",
  },
  {
    name: "Wolf Rank Kit",
    relPath: "ceremonies/crossover/wolf.html",
    title: "Wolf Rank Kit - Pack 285",
    h1: "Wolf Crossover",
  },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

async function verifyPage(browser, repoRoot, pageSpec) {
  const absolutePath = path.join(repoRoot, pageSpec.relPath);
  assert(fs.existsSync(absolutePath), `Missing file: ${pageSpec.relPath}`);

  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 } });
  await page.goto(`file://${absolutePath}`, { waitUntil: "load" });

  const title = await page.title();
  const h1 = (await page.locator("h1").first().textContent())?.trim();
  const headings = await page.locator("h2").evaluateAll((nodes) =>
    nodes.map((node) => node.textContent.trim())
  );
  const bodyText = await page.locator("body").innerText();
  const exampleSectionText = await page.locator(".example-section").innerText();

  assert(title === pageSpec.title, `${pageSpec.name}: expected title "${pageSpec.title}" but got "${title}"`);
  assert(h1 === pageSpec.h1, `${pageSpec.name}: expected h1 "${pageSpec.h1}" but got "${h1}"`);

  for (const heading of pageSpec.headings) {
    assert(headings.includes(heading), `${pageSpec.name}: missing heading "${heading}"`);
  }

  assert(
    !bodyText.includes("../style.css") && !bodyText.includes("style.css"),
    `${pageSpec.name}: page still appears to depend on external style.css`
  );

  for (const term of disallowedMainText) {
    const bodyHasTerm = bodyText.includes(term);
    const exampleHasTerm = exampleSectionText.includes(term);
    assert(
      !bodyHasTerm || exampleHasTerm,
      `${pageSpec.name}: found "${term}" outside the example section`
    );
  }

  await page.close();
}

async function verifyPortableCeremonyPage(browser, repoRoot, pageSpec) {
  const absolutePath = path.join(repoRoot, pageSpec.relPath);
  assert(fs.existsSync(absolutePath), `Missing file: ${pageSpec.relPath}`);

  const page = await browser.newPage({ viewport: { width: 1440, height: 1400 } });
  await page.goto(`file://${absolutePath}`, { waitUntil: "load" });

  const title = await page.title();
  const h1 = (await page.locator("h1").first().textContent())?.trim();
  const html = await page.locator("html").innerHTML();

  assert(title === pageSpec.title, `${pageSpec.name}: expected title "${pageSpec.title}" but got "${title}"`);
  assert(h1 === pageSpec.h1, `${pageSpec.name}: expected h1 "${pageSpec.h1}" but got "${h1}"`);
  assert(html.includes("<style>"), `${pageSpec.name}: expected inline style block`);
  assert(html.includes("data:image/jpeg;base64,"), `${pageSpec.name}: expected embedded JPEG data URI`);
  assert(!html.includes('href="style.css"'), `${pageSpec.name}: still depends on style.css`);
  assert(!html.includes('src="images/'), `${pageSpec.name}: still depends on local image files`);

  await page.close();
}

async function main() {
  const repoRoot = process.cwd();
  const browser = await chromium.launch({ headless: true });

  try {
    for (const pageSpec of pages) {
      await verifyPage(browser, repoRoot, pageSpec);
      console.log(`PASS ${pageSpec.name}`);
    }
    for (const pageSpec of portableCeremonyPages) {
      await verifyPortableCeremonyPage(browser, repoRoot, pageSpec);
      console.log(`PASS ${pageSpec.name}`);
    }
    console.log(
      `Verified ${pages.length} pack operations pages and ${portableCeremonyPages.length} portable ceremony pages.`
    );
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
