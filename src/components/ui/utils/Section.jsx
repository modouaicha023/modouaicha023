import React from "react";

export default function Section({ children }) {
  return (
     <section className=" min-h-fit w-full max-w-7xl min-w-[300px] mx-auto p-2 border border-white border-opacity-10 rounded-lg shadow-sm bkpgrid:overflow-hidden">
      {children}
    </section>
  );
}
