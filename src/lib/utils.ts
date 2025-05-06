import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

export const formatDecimalTwoNumber =
  (field: any) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const raw = input.value.replace(/\D/g, "");

    const formatted = (Number(raw) / 100).toFixed(2).replace(".", ",");

    const positionFromEnd = input.value.length - (input.selectionStart ?? 0);

    input.value = formatted;
    field.onChange(e);

    setTimeout(() => {
      const newPosition = input.value.length - positionFromEnd;
      input.setSelectionRange(newPosition, newPosition);
    });
  };
