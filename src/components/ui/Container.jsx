export default function Container({ children }) {
  return (
    <main className="flex min-h-fit w-screen  items-center justify-center p-4 bkpgrid:overflow-hidden">
      {children}
    </main>
  );
}
