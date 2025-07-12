import NutSua from "@/components/quan-ly/bai-viet/nut/sua";
import NutXem from "@/components/quan-ly/bai-viet/nut/xem";
import NutXoa from "@/components/quan-ly/bai-viet/nut/xoa";

export default function TheBaiViet({
  tieuDe,
  ngayDang
}: {
  tieuDe: string;
  ngayDang: string;
}) {
  return (
    <div className="flex w-3xl items-center justify-between p-5">
      <div className="flex flex-col gap-y-2">
        <p className="text-base leading-none font-medium">{tieuDe}</p>
        <p className="text-base text-muted-foreground">{ngayDang}</p>
      </div>
      <div className="flex gap-2">
        <NutXem />
        <NutSua />
        <NutXoa />
      </div>
    </div>
  );
}
