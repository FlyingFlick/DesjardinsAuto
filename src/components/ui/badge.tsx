import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils.ts";

interface BadgeProps {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

export function Badge({ 
  variant = "default", 
  className,
  children 
}: BadgeProps) {
  return (
    <span className={cn(
      "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
      variant === "default" && "bg-blue-500/10 text-blue-500",
      variant === "outline" && "border border-blue-500/20 text-blue-400",
      className
    )}>
      {children}
    </span>
  );
}