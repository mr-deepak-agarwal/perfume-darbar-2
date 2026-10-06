"use client";
import Link from "next/link";
import Bottle from "./Bottle";
import { useCart } from "./CartContext";
import { Product, money } from "@/lib/products";
export default function ProductCard({ p, className = "" }: { p: Product; className?: string }) {
  const { add } = useCart();
  return (
    <div className={className}>
      <Link href={`/product/${p.slug}`} className="relative block aspect-square border-2 border-ink" style={{ background: p.bg }}>
        <Bottle liquid={p.liquid} className="absolute inset-0 m-auto h-4/5" />
        {p.tag && <span className="absolute left-3 top-3 border-2 border-ink bg-white px-2 py-0.5 text-xs font-bold">{p.tag}</span>}
      </Link>
      <div className="mt-3 flex justify-between gap-2"><div><Link href={`/product/${p.slug}`} className="display text-xl">{p.name}</Link><p className="text-sm text-ink/60">{p.line}</p></div><p className="font-bold">{money(p.price)}</p></div>
      <button onClick={() => add(p.slug, 50, 1)} className="btn btn-alt mt-3 w-full py-2 text-sm">Quick add, 50 ml</button>
    </div>
  );
}
