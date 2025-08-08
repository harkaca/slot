import { SlotMachine } from './models/SlotMachine.js';

const game = new SlotMachine();
const result = game.spin();

console.log('Screen:');
console.table(result.screen);

console.log('\nWinning Lines:');
for (const line of result.lineResults) {
  console.log(`Line ${line.lineIndex + 1}: Symbol ${line.symbol} x${line.count} => Win ${line.payout}`);
}

console.log(`\nTotal Payout: ${result.totalPayout}`);