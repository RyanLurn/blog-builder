"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function NutXem() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="ghost" size="icon">
          <ExternalLink />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Mở link bài viết</p>
      </TooltipContent>
    </Tooltip>
  );
}
