class State {
  private scenarioPointer: number;
  public scenario: string[];
  private readonly observers: any[];

  constructor() {
    this.scenarioPointer = 0;
    this.scenario = [];
    this.observers = [];
  }

  resisterObserver(o: any): void {
    this.observers.push(o);
  }

  notifyObservers(): void {
    this.observers.forEach((o) => o.paramsUpdate(this));
  }

  public get endOfScenario(): boolean {
    return !(this.scenarioPointer < this.scenario.length - 1);
  }

  inc(): void {
    this.scenarioPointer++;
    this.notifyObservers();
  }

  public get currentScenario(): string {
    return this.scenario[this.scenarioPointer];
  }
}

export default new State();
