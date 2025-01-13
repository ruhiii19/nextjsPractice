import React from "react";
import { notFound } from "next/navigation";

const Nested = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log("not found");
  if (parseInt(id) > 100) {
    notFound();
  }
  return <div className="text-2xl">Product: {id}</div>;
};

export default Nested;
