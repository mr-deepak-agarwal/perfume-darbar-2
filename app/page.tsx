import Link from "next/link";
import Bottle from "@/components/Bottle";
import ProductCard from "@/components/ProductCard";
import { moods, moodBg, products } from "@/lib/products";
export default function Home() {
  const hero = [products[0], products[2], products[4]];
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 md:grid-cols-[1.1fr_1fr] md:py-20">
        <div className="rise">
          <h1 className="text-6xl md:text-8xl">Smell like the best part of your day.</h1>
          <p className="mt-6 max-w-md text-lg">Everyday perfumes named for moments, not genders. Pick a mood, find your bottle, wear it daily.</p>
          <div className="mt-8 flex flex-wrap gap-4"><Link href="/shop" className="btn">Shop all scents</Link><Link href="/quiz" className="btn btn-alt">Find my scent</Link></div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {hero.map((p, i) => (<div key={p.slug} className="rise border-2 border-ink" style={{ background: p.bg, animationDelay: `${i * 120}ms`, transform: i === 1 ? "translateY(32px)" : undefined }}><Bottle liquid={p.liquid} className="aspect-[2/3] w-full p-2" /></div>))}
        </div>
      </section>
      <section className="border-y-2 border-ink">
        <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
          {moods.map((m, i) => (<Link key={m} href={`/shop?m=${m}`} className="group flex min-h-48 flex-col justify-between border-ink p-6 md:min-h-64 md:border-r-2 last:border-r-0" style={{ background: moodBg[m] }}><h2 className="text-4xl">{m}</h2><p className="text-sm font-semibold underline-offset-4 group-hover:underline">Shop {m.toLowerCase()} scents</p></Link>))}
        </div>
      </section>
      <section className="mt-20">
        <div className="mx-auto mb-6 flex max-w-7xl items-end justify-between px-5"><h2 className="text-5xl">Bestsellers</h2><Link href="/shop" className="font-semibold underline">See all</Link></div>
        <div className="flex snap-x gap-5 overflow-x-auto px-5 pb-4 md:px-[max(1.25rem,calc((100vw-80rem)/2+1.25rem))]">
          {products.filter((p) => p.rating >= 4.7).map((p) => <ProductCard key={p.slug} p={p} className="w-64 shrink-0 snap-start md:w-72" />)}
        </div>
      </section>
      <section className="mx-auto mt-20 max-w-7xl px-5">
        <div className="grid border-2 border-ink bg-lemon md:grid-cols-2">
          <div className="p-8 md:p-12"><h2 className="text-5xl">Not sure where to start?</h2><p className="mt-4 max-w-md">Answer three questions and we'll match you with a bottle. Or try five scents first with the ₹999 discovery set.</p><Link href="/quiz" className="btn mt-6">Take the 1-minute quiz</Link></div>
          <div className="flex items-center justify-center gap-2 border-t-2 border-ink p-8 md:border-l-2 md:border-t-0">{products.slice(0, 5).map((p) => <div key={p.slug} className="h-24 w-12 border-2 border-ink" style={{ background: p.liquid }} />)}</div>
        </div>
      </section>
      <section className="mx-auto mt-20 grid max-w-7xl gap-5 px-5 md:grid-cols-3">
        {[["Chai Hour is the only perfume my whole office asked about.", "Neha, Pune"], ["Lasts all day on me, and it's under ₹3,500. Wild.", "Karan, Delhi"], ["The quiz picked Paper Moon. It was right.", "Sana, Hyderabad"]].map(([q, a]) => (<figure key={a} className="border-2 border-ink p-6 shadow-[6px_6px_0_#0b1020]"><blockquote className="display text-2xl leading-tight">“{q}”</blockquote><figcaption className="mt-4 text-sm text-ink/60">{a}</figcaption></figure>))}
      </section>
    </>
  );
}
