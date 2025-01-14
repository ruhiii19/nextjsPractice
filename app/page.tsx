// Fetching data in server components
// async function getData() {
//   const res = await fetch("https://dummyjson.com/products", {
//     cache: "no-store",
//   });

//   if (!res.ok) throw new Error("Failed to fetch data");

//   return res.json();
// }

// export default async function Home() {
//   const data = await getData();
//   console.log("data", data);
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       {data.products.length > 0 &&
//         data.products.map((product: any) => (
//           <div key={product.id}>
//             <p>{product.title}</p>
//           </div>
//         ))}
//     </main>
//   );
// }

//fetching data in client components

"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  function getData() {
    const data = fetch("https://dummyjson.com/products", {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log("data", products);

  if (isLoading) return <p>Loading...</p>;
  if (!products) return <p>No products found</p>;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {products.length > 0 &&
        products.map((product: any) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
    </main>
  );
}
