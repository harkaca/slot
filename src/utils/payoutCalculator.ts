import type { SymbolID } from '../types.js';

export function calculateLineWins(
  screen: SymbolID[][],
  lines: number[][],
  symbolPayouts: Record<number, number[]>
) {
  const results = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const symbols: SymbolID[] = [];

    for (let reelIndex = 0; reelIndex < line.length; reelIndex++) {
      const row = line[reelIndex];
      symbols.push(screen[row][reelIndex]);
    }

    const firstSymbol = symbols[0];
    let count = 1;

    for (let j = 1; j < symbols.length; j++) {
      if (symbols[j] === firstSymbol) {
        count++;
      } else {
        break;
      }
    }

    const payout = symbolPayouts[firstSymbol][count - 1] || 0;
    if (payout > 0) {
      results.push({ lineIndex: i, symbol: firstSymbol, count, payout });
    }
  }

  return results;
}