import React from 'react';
import Link from 'next/link';

export default function index() {
  return (
    <div>
      <h1>Le blog</h1>
      <Link href={"/blog/10 plats"}>
        10 plats
      </Link>
    </div>
  )
}
