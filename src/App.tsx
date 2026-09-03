import * as React from "react";
import { PrismHero } from "./components/PrismHero";

export default function App() {
  // The hero bakes its headline to a canvas, and browsers only download a
  // webfont once something in the DOM uses it. The hidden probe below plus
  // this explicit load guarantee Libre Baskerville is ready before the hero
  // mounts, so the component file itself can stay byte-exact.
  const [fontReady, setFontReady] = React.useState(false);

  React.useEffect(() => {
    let live = true;
    const done = () => {
      if (live) setFontReady(true);
    };
    const load =
      document.fonts?.load?.('500 100px "Libre Baskerville"').catch(() => undefined) ??
      Promise.resolve();
    load.then(done).catch(done);
    // Never hold the hero hostage if the font request hangs.
    const t = window.setTimeout(done, 2500);
    return () => {
      live = false;
      window.clearTimeout(t);
    };
  }, []);

  return (
    <main className="h-screen overflow-hidden bg-[#08080B] text-[#EDE8DF]">
      {/* Hidden probe: forces the display face to download. */}
      <span
        aria-hidden
        className="font-[family-name:var(--font-display)]"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
        }}
      >
        Refraction
      </span>
      <PrismHero
        key={fontReady ? "ready" : "waiting"}
        eyebrow="DUNDRA"
        headline="Refraction"
        staticProgress={0}
        action={
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-full bg-[#EDE8DF] px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#08080B] transition-transform duration-300 hover:-translate-y-0.5"
          >
            Get started
          </a>
        }
        secondaryAction={
          <a
            href="#"
            className="inline-flex h-11 items-center rounded-full border border-[#EDE8DF3d] px-7 font-mono text-[11px] uppercase tracking-[0.18em] text-[#EDE8DF] transition-colors duration-300 hover:bg-white/5"
          >
            Documentation
          </a>
        }
        meta={["Procedural geometry", "Real transmission", "Zero assets"]}
      />
    </main>
  );
}
