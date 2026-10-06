"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { moods, products } from "@/lib/products";
export default function Shop() {
  const sp = useSearchParams();
  const [mood, setMood] = useState(sp.get("m") || "All");
  const [sort, setSort] = useState("featured");
  const list = products.filter((p) => mood === "All" || p.mood === mood).sort((a, b) => sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : sort === "rating" ? b.rating - a.rating : 0);
  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <h1 className="text-6xl md:text-7xl">{mood === "All" ? "All scents" : `${mood} scents`}</h1>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-y-2 border-ink py-4">
        <div className="flex flex-wrap gap-2">{["All", ...moods].map((m) => <button key={m} className="chip" data-on={mood === m} onClick={() => setMood(m)}>{m}</button>)}</div>
        <label className="flex items-center gap-2 text-sm font-semibold">Sort<select className="field !w-auto !py-2" value={sort} onChange={(e) => setSort(e.target.value)}><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option><option value="rating">Top rated</option></select></label>
      </div>
      <div className="mt-10 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
    </div>
  );
}
