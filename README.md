# @tradejs/strategy-breakout

TradeJS strategy plugin providing `Breakout`.

## Strategy overview

`Breakout` trades rolling support and resistance breaks. It can enter on the
first break, after close confirmation, or on a retest, while trend, volatility,
OBV, Bollinger, range, candle-body, and volume rules score or filter the setup.

## Logic at a glance

![Breakout strategy logic](https://raw.githubusercontent.com/TradeJS-Dev/TradeJS-Strategy-Breakout/main/docs/strategy-logic.svg)

## Install

```bash
yarn add @tradejs/strategy-breakout
```

Register the package in `tradejs.config.ts`:

```ts
import { defineConfig } from "@tradejs/core/config";

export default defineConfig({
  strategies: ["@tradejs/strategy-breakout"],
});
```

The package exports `strategyEntries` for the TradeJS plugin loader together
with its strategy definitions, manifests, default configs, and public AI/ML
adapters. Strategy implementation changes are released from this repository,
independently of the TradeJS engine.

## Development

```bash
yarn install --immutable
yarn checks
```

Publishing is triggered by a GitHub release and delegated to the pinned
`TradeJS-Workflows@v1` reusable workflow.

Keywords: ai, claude, codex.
