"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef(({ className, type, error, ...props }, ref) => {
  return (
    <div>
      <input
        type={type}
        aria-invalid={!!error} // Tilgængelighed: Marker feltet som ugyldigt, hvis der er en fejl
        className={cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className)}
        ref={ref}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red_color">{error}</p>} {/* Fejlmeddelelse */}
    </div>
  );
});
Input.displayName = "Input";

export { Input };
