import React from "react";
import Link from "next/link";
const Product = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <div className="text-2xl">
      Product: {id}
      <Link href={`/5productss/${id}/comments`} className="text-blue-500">
        comments
      </Link>
    </div>
  );
};

export default Product;
