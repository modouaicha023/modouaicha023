import React from "react";

export default function Section({ children }) {
  return (
    <section className=" min-h-fit w-full max-w-7xl sm:min-w-[300px] mx-auto p-2 rounded-lg bkpgrid:overflow-hidden">
      {children}
    </section>
  );
}
