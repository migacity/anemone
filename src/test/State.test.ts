import { describe, expect, it } from "vitest";
import { useGameState } from "../State";

describe("useGameState", () => {
  it("複数回呼び出しても同じ状態が返る", () => {
    const { update: update1, get: get1 } = useGameState();
    const { get: get2 } = useGameState();
    update1("setScenario", { scenario: ["hoge", "fuga"] });

    expect(get1.currentScenario()).toBe("hoge");
    expect(get2.currentScenario()).toBe("hoge");
    update1("inc");
    expect(get1.currentScenario()).toBe("fuga");
    expect(get2.currentScenario()).toBe("fuga");
  });
});
