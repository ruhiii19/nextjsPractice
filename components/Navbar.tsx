import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-blue-900 flex rounded-b-3xl justify-between p-4">
      <div className="flex gap-4 text-sm">
        <Link href="/">Landing</Link>
        <Link href="/1home">Home</Link>
        <Link href="/2about">About</Link>
        <Link href="/3parent/nested">nested</Link>
        <Link href="/4products">dynamic</Link>
        <Link href="/5productss">dynamic nested</Link>
        <Link href="/6allsegments_optional">all segments optional</Link>
        <Link href="/10nestednotfound/101">nested not found</Link>
        <Link href="/11error">error</Link>
        <Link href="/12parallel">parallel</Link>
        <Link href="/13paralleldefaults">parallel_defaults</Link>
        <Link href="/14InterceptRoutes">Intercept_routes</Link>
        <Link href="/15Interceptlevelroute">Intercept_root_route</Link>
      </div>
      <div className="flex gap-4 text-sm">
        <Link href="/chat">Chat</Link>
        <Link href="/blog">Blog</Link>
      </div>
      <div className="flex gap-4 text-sm">
        <Link href="/login">Login</Link>
        <Link href="/register">Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
