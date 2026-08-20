import { defineStrategyPlugin } from "@tradejs/core/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import type { StrategyConfig } from "@tradejs/types";
import { config as breakoutDefaultConfig } from "./Breakout/config";
import { BreakoutStrategyDefinition } from "./Breakout/strategy";

export const strategyEntries: ValidatedStrategyRegistryEntry<any>[] = [
  BreakoutStrategyDefinition,
];

const defaultConfigs: Record<string, StrategyConfig> = {
  Breakout: breakoutDefaultConfig,
};

export const getBuiltInStrategyDefaultConfig = (
  strategyName: string,
): StrategyConfig | undefined => defaultConfigs[strategyName];

export { BreakoutStrategyDefinition } from "./Breakout/strategy";
export { breakoutDefaultConfig };
export { breakoutManifest } from "./Breakout/manifest";
export { breakoutAiAdapter } from "./Breakout/adapters/ai";
export { breakoutMlAdapter } from "./Breakout/adapters/ml";

export default defineStrategyPlugin({ strategyEntries });
