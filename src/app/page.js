import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className=" text-5xl text-pink-500">This is homes page</h1>
      <Link href="https://www.youtube.com/" target="_blank">
        <button className=" btn btn-secondary">Click here</button>
      </Link>
    </div>
  );
};

export default page;
