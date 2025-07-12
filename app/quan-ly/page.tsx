import { currentUser } from "@clerk/nextjs/server";

export default async function QuanLyPage() {
  const user = await currentUser();
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        Chào mừng trở lại, {user?.fullName}
      </h1>
    </div>
  );
}
