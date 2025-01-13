import React from "react";
import Link from "next/link";

const InterceptRoutes = () => {
  return (
    <div className="flex flex-col gap-4">
      Intercept Routes page
      <Link href="/14InterceptRoutes/login" className="text-blue-500">
        Login
      </Link>
    </div>
  );
};

export default InterceptRoutes;
