import Decimal from "decimal.js";

export function convertToCurrency(
  amount?: number | number[] | null | undefined
) {
  if (!amount) return "0";

  return new Intl.NumberFormat("en-US", {}).format(Number(amount));
}
