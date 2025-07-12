import TheBaiViet from "@/components/quan-ly/bai-viet/the";
import { Separator } from "@/components/ui/separator";
import danhSachBaiViet from "@/database/mock";

export default function DanhSachBaiViet() {
  const cacBaiViet = danhSachBaiViet;
  return (
    <div className="flex flex-col rounded-md border border-solid border-border">
      {cacBaiViet.map((baiViet, index) => (
        <div key={baiViet.id}>
          <TheBaiViet tieuDe={baiViet.tieuDe} ngayDang={baiViet.ngayDang} />
          {index < cacBaiViet.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
}
