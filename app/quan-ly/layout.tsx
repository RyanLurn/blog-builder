import Header from "@/components/quan-ly/header";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function QuanLyLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedOut>
        <div className="flex h-screen w-screen items-center justify-center">
          <SignInButton />
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex h-screen w-screen flex-col overflow-y-auto">
          <Header />
          <div className="flex-1">{children}</div>
        </div>
      </SignedIn>
    </>
  );
}
