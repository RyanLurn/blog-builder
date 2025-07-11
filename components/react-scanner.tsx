"use client";
import { scan } from "react-scan";
import { JSX, useEffect } from "react";

export function ReactScanner(): JSX.Element {
  useEffect(() => {
    scan({
      enabled: true
    });
  }, []);

  return <></>;
}
