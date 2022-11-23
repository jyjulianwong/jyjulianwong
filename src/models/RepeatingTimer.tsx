class RepeatingTimer {
  static delay(delay: number) {
    return new Promise(r => {
      setTimeout(r, delay);
    })
  }

  constructor(
    private action: () => void,
    private interval: number,
    private stopOnNextIter = false,
    private iter = 0,
    private iterOverflow = 65536
  ) {
    this.init();
  }

  async init() {
    while (!this.stopOnNextIter) {
      await RepeatingTimer.delay(this.interval);
      this.action();
      this.iter = (this.iter + 1) % this.iterOverflow;
      console.log("RepeatingTimer: Tick: " + this.iter);
    }
  }

  stop() {
    this.stopOnNextIter = true;
  }
}

export {RepeatingTimer};