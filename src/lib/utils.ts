import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncCurrency(value: number) {
  return Math.round(value * 100) / 100;
}

export const formatDecimal =
  (
    field: { onChange(e: React.ChangeEvent<HTMLInputElement>): void },
    decimal = 2
  ) =>
  (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.currentTarget;
    const raw = input.value.replace(/\D/g, "");

    const divisor = Math.pow(10, decimal);
    const formatted = (Number(raw) / divisor)
      .toFixed(decimal)
      .replace(".", ",");

    const positionFromEnd = input.value.length - (input.selectionStart ?? 0);

    input.value = formatted;
    field.onChange(e);

    setTimeout(() => {
      const newPosition = input.value.length - positionFromEnd;
      input.setSelectionRange(newPosition, newPosition);
    });
  };
