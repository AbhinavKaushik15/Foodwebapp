"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocomotiveProvider({children,}: {children: React.ReactNode;}) {
  useEffect(() => {
    const scroll = new LocomotiveScroll();

    return () => {
      scroll.destroy();
    };
  }, []);

  return <>{children}</>;
}
