import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center gap-10 text-pink-600 bg-green-300 h-10">
      <Link href="https://github.com/Farok-Hossain" target="_blank">
        <button className=" btn btn-secondary">Github</button>
      </Link>
      <Link href="https://x.com/farok_afs" target="_blank">
        <button className=" btn btn-secondary">X</button>
      </Link>
      <Link href="https://www.instagram.com/" target="_blank">
        <button className=" btn btn-secondary">Instagram</button>
      </Link>
      <Link href="https://farok-hossain-portfolio.vercel.app/" target="_blank">
        <button className=" btn btn-secondary">Portfolio</button>
      </Link>
    </div>
  );
};

export default page;
