import type { ProductCategory } from "@/lib/data/product-categories";

export default function ProductCategoryCard({
  category,
}: {
  category: ProductCategory;
}) {
  return (
    <article className="border border-border bg-white p-6">
      <p className="text-[11px] uppercase tracking-[0.2em] text-steel">{category.id}</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{category.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>
    </article>
  );
}
