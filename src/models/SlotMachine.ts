import config from '../config.js';
import { Reel } from './Reel.js';
import { calculateLineWins } from '../utils/payoutCalculator.js';
import type { SpinResult } from '../types.js';

export class SlotMachine {
  private reels: Reel[];

  constructor() {
    this.reels = config.reels.map(reelData => new Reel(reelData));
  }

  spin(): SpinResult {
    const screen: number[][] = Array.from({ length: config.rowsCount }, () => []);
    
    this.reels.forEach(reel => {
      const symbols = reel.spin();
      for (let row = 0; row < config.rowsCount; row++) {
        screen[row].push(symbols[row]);
      }
    });

    const lineResults = calculateLineWins(screen, config.lines, config.symbols);
    const totalPayout = lineResults.reduce((sum, line) => sum + line.payout, 0);

    return { screen, lineResults, totalPayout };
  }
}