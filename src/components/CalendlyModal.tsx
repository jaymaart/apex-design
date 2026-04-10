"use client";

import React, { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";

interface CalendlyModalProps {
  url: string;
  triggerSelector: string;
}

export default function CalendlyModal({ url, triggerSelector }: CalendlyModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set root element for the modal
    if (typeof window !== "undefined") {
      setRootElement(document.getElementById("__next") || document.body);
    }

    const handleTriggerClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(triggerSelector)) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener("click", handleTriggerClick);
    return () => document.removeEventListener("click", handleTriggerClick);
  }, [triggerSelector]);

  if (!rootElement) return null;

  return (
    <PopupModal
      url={url}
      onModalClose={() => setIsOpen(false)}
      open={isOpen}
      rootElement={rootElement}
    />
  );
}
