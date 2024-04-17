import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1>This is home page</h1>
      <Link to="/about">click here</Link>
    </div>
  );
};

export default page;
