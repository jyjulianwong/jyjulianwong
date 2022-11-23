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
    private iter = 0
  ) {
    this.init();
  }

  async init() {
    while (!this.stopOnNextIter) {
      await RepeatingTimer.delay(this.interval);
      this.action();
      this.iter++;
      console.log("RepeatingTimer: Iteration: " + this.iter);
    }
  }

  stop() {
    this.stopOnNextIter = true;
  }
}

export { RepeatingTimer };