export class State extends Phaser.Scene {
  private scenarioPointer: number;
  constructor() {
    super("state");
    this.scenarioPointer = 0;
  }

  preload(): void {
  }

  create(): void {
  }

  pointer(): number {
    return this.scenarioPointer
  }
  inc(): void {
    this.scenarioPointer++
  }
}

