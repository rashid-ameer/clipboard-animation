import Clipboard from "@/components/clip-board";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 className="font-bold text-2xl text-center">Copy to Clipboard</h1>

      <Clipboard />
    </main>
  );
}
