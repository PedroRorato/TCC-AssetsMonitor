import type { CoordinateType, StockType } from "../types";


export const interestSimulatorCalc = (
  initial: number,
  interest: number,
  monthly: number,
  months: number
) => {
  let total = initial;
  interest = (interest + 100) / 100;

  const data: CoordinateType[] = [{ x: 0, y: initial }]

  for (let i = 1; i <= months; i++) {
    total = total * interest
    total += monthly
    data.push({ x: i, y: parseFloat(total.toFixed(2)) })
  }

  return { data, total }
}

export const getProfitability = (
  amount: number,
  initialPrice: number,
  finalPrice: number
) => {
  console.log(amount, initialPrice, finalPrice);

  // Calc Profitability
  let profitability: number | string = ((finalPrice / initialPrice) - 1) * 100;
  profitability = profitability.toFixed(2)
  // Calc Total Invested
  let investedTotal: number | string = amount * initialPrice
  investedTotal = investedTotal.toFixed(2)
  // Calc Current Total
  let currentTotal: number | string = amount * finalPrice
  currentTotal = currentTotal.toFixed(2)

  return { profitability, investedTotal, currentTotal };
}

export const orderStockList = (stockList: StockType[]) => {
  return stockList.sort((a, b) => a.name.localeCompare(b.name))
}

