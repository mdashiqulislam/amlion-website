import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { FloatNav } from "@/components/Nav";
import { ProductCatalog } from "@/components/Products";
import { Sprite } from "@/components/ui";

export const metadata: Metadata = {
  title: "Products | AML Consumer Care Ltd",
  description: "Browse AML toothpaste, oral care, fragrance, personal care and skin care products. Find them in cosmetic shops and super shops across Bangladesh.",
};

export default function ProductsPage() {
  return (
    <>
      <Sprite />
      <FloatNav always />
      <div className="page career">
        <main id="main">
          <ProductCatalog />
        </main>
        <Footer />
      </div>
    </>
  );
}
