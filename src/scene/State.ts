class State {
  private scenarioPointer: number;
  public scenario: string[];
  private observers: any[];

  constructor() {
    this.scenarioPointer = 0;
    this.scenario = []
    this.observers = []
  }

  resisterObserver(o: any) {
    this.observers.push(o)
  }

  notifyObservers() {
    this.observers.forEach(o => o.paramsUpdate(this))
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
    this.notifyObservers()
  }
}

export default new State()