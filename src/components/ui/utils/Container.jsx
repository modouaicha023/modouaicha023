export default function Container({ children }) {
  return (
    <main className="flex min-h-fit w-screen  items-center justify-between p-4 bkpgrid:overflow-hidden">
      {children}
    </main>
  );
}
