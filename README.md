# GetFallbackOracle Agent

## Description

This agent detects if the getFallbackOracle function is called

## Supported Chains

- Ethereum

## Alerts

Describe each of the type of alerts fired by this agent

- FORTA-1
  - Fired when the getFallbackOracle function is called
  - Severity is always set to "high" because there is a issue with chainlink aggregator but the oracle is maintained by aave
  - Type is always set to "information" just to inform the event


