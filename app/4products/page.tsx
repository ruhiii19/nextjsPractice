import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <div className="flex gap-8">
      <Link href="/4products/1">1</Link>
      <Link href="/4products/2">2</Link>
    </div>
  );
};

export default Products;
