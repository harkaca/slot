export class Reel {
  private symbols: number[];

  constructor(symbols: number[]) {
    this.symbols = symbols;
  }

  spin(): number[] {
    const start = Math.floor(Math.random() * this.symbols.length);
    return [
      this.symbols[(start) % this.symbols.length],
      this.symbols[(start + 1) % this.symbols.length],
      this.symbols[(start + 2) % this.symbols.length],
    ];
  }
}