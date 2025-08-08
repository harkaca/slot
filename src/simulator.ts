import { SlotMachine } from './models/SlotMachine.js';

const game = new SlotMachine();
const spins = 100000;
let totalPayout = 0;
const betPerSpin = 1;

console.time('Simulation');

for (let i = 0; i < spins; i++) {
  const result = game.spin();
  totalPayout += result.totalPayout;
}

console.timeEnd('Simulation');
console.log(`Spins: ${spins}`);
console.log(`Total Bet: ${spins * betPerSpin}`);
console.log(`Total Win: ${totalPayout}`);
console.log(`RTP: ${(totalPayout / (spins * betPerSpin) * 100).toFixed(2)}%`);