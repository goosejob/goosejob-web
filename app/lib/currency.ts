import { Decimal } from "@prisma/client/runtime/library";

export function convertDecimalToCurrency(
  amount: number | number[] | Decimal | null
) {
  if (!amount) return "0";

  // If it's a Prisma Decimal, convert it to a number
  if (amount instanceof Decimal) {
    return new Intl.NumberFormat("en-US", {}).format(amount.toNumber());
  }

  return new Intl.NumberFormat("en-US", {}).format(amount as number);
}
