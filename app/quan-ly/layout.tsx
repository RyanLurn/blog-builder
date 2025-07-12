import Header from "@/components/admin/header";
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
        <div className="h-screen w-screen overflow-y-auto">
          <Header />
          {children}
        </div>
      </SignedIn>
    </>
  );
}
