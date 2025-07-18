import Navbar from "@/components/quan-ly/header/navbar";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full items-center justify-between border-b border-solid border-border p-3">
      <div className="scroll-m-20 text-xl font-semibold tracking-tight">
        Blog Builder
      </div>
      <Navbar />
      <UserButton />
    </header>
  );
}
