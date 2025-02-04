import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Error: Decimal objects cannot be rendered as text children. Try formatting it using toString().
// convert prisma obj into regular js obj
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}