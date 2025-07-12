import { currentUser } from "@clerk/nextjs/server";

export default async function QuanLyPage() {
  const user = await currentUser();
  return <div>Chào mừng trở lại, {user?.fullName}</div>;
}
