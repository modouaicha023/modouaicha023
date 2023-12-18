import React from "react";

export default function Section({ children }) {
  return (
    <section className="h-full w-full  max-w-7xl min-w-[300px]   mx-auto p-2 border border-white border-opacity-10 rounded-lg shadow-lg">
      {children}
    </section>
  );
}
