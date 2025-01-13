import React from "react";
import Link from "next/link";

const Comments = () => {
  return (
    <div className="flex gap-8">
      Comments
      <Link href="/5productss/1/comments/1">1</Link>
      <Link href="/5productss/2/comments/2">2</Link>
    </div>
  );
};

export default Comments;
