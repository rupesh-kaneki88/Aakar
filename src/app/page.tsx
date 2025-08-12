'use client';

import { Home } from "@/app/components/Home";
import { useLoading } from "@/app/providers/LoadingProvider";
import { useEffect } from "react";

export default function HomePage() {
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return (
    <div>
      <Home />
    </div>
  );
}
