import { createStrategyConfigParser } from "@tradejs/strategy-kit/config";
import type { ValidatedStrategyRegistryEntry } from "@tradejs/strategy-kit/config";
import { type BreakoutConfig, config as DEFAULT_CONFIG } from "./config";
import { createBreakoutCore } from "./core";
import { breakoutManifest } from "./manifest";

export const BreakoutStrategyDefinition: ValidatedStrategyRegistryEntry<BreakoutConfig> =
  {
    defaults: DEFAULT_CONFIG,
    parseConfig: createStrategyConfigParser({
      strategyName: "Breakout",
      defaults: DEFAULT_CONFIG,
    }),
    createCore: createBreakoutCore,
    manifest: breakoutManifest,
  };
