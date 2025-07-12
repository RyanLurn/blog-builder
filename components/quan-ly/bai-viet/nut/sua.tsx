"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { PenLine } from "lucide-react";

export default function NutSua() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <PenLine />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Sửa bài viết</p>
      </TooltipContent>
    </Tooltip>
  );
}
