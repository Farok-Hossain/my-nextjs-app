import Link from "next/link";
import React from "react";

const NavbarPage = () => {
  return (
    <div>
      <h1>This is Navbar page</h1>
      <Link to="/">Home</Link>
      <Link to="/">Home2</Link>
    </div>
  );
};

export default NavbarPage;
