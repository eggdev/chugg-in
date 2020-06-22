import React from "react";
import fetch from "isomorphic-unfetch";

export default function Home({ data }) {
  console.log(data);
  return (
    <div className="container">
      <h1>Here</h1>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/games`);
  const req = await res.json();
  return {
    props: {
      data: req,
    },
  };
}
