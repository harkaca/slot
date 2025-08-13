export type SymbolID = number;

export interface SpinResult {
  screen: SymbolID[][];
  lineResults: {
    lineIndex: number;
    symbol: SymbolID;
    count: number;
    payout: number;
  }[];
  totalPayout: number;
  
}
