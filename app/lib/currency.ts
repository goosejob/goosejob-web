import type { Decimal } from "@prisma/client/runtime/library";

export function convertDecimalToCurrency(amount: number | number[] | Decimal) {
  return new Intl.NumberFormat("en-US", {}).format(amount as number);
}
