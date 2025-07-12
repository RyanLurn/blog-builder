"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default function NutXoa() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <Trash color="red" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Xóa bài viết</p>
      </TooltipContent>
    </Tooltip>
  );
}
