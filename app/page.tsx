"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center">
      <Button onClick={() => toast("Hello world")}>Click me</Button>
    </div>
  );
}
