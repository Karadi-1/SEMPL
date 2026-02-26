import ProductCategoryCard from "@/components/products/product-category-card";
import { productCategories } from "@/lib/data/product-categories";

export default function ProductCategories() {
  return (
    <section aria-labelledby="product-categories-title" className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-steel">
            Product Categories
          </p>
          <h2
            id="product-categories-title"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Structured for ERPNext-ready expansion.
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Category cards are modular placeholders, designed to be replaced with
            dynamic data via Next.js API routes and ERPNext integration.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {productCategories.map((category) => (
            <ProductCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
