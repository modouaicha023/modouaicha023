export default function Container({ children }) {
  return (
    <main className="flex min-h-screen w-screen  items-center justify-between p-4 overflow-hidden">
      {children}
    </main>
  );
}
