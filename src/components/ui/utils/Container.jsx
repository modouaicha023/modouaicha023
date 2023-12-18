export default function Container({ children }) {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-between p-4 ">
      {children}
    </main>
  );
}
