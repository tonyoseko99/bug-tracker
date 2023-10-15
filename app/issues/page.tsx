import Link from "next/link";
import React from "react";

const Issues = () => {
  return <div className="flex justify-center gap-4 items-center">
    <span>Issues</span>
    <button className="border p-1">
      <Link href="/issues/new">Add Issue</Link>
    </button>
  </div>;
};

export default Issues;
