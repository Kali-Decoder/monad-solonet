---
title: Network Configuration
description: Detailed network settings for Monad Testnet and Mainnet, including JSON-RPC specifications and architectural differences.
---

# Network Configuration

Monad Solonet and the Monad network provide high-performance, Geth-compatible execution. To interact with Monad, you can configure your wallet or application using the details below.

## Supported Networks

### Monad Testnet
To manually add Monad Testnet to your wallet, use the following custom network settings:

- **Network Name**: Monad Testnet
- **RPC URL**: `https://testnet-rpc.monad.xyz`
- **Chain ID**: `10143`
- **Currency Symbol**: `MON`
- **Block Explorer**: [https://testnet.monadvision.com](https://testnet.monadvision.com)

### Monad Mainnet
To manually add Monad Mainnet to your wallet, use the following custom network settings:

- **Network Name**: Monad Mainnet
- **RPC URL**: `https://rpc.monad.xyz`
- **Chain ID**: `143`
- **Currency Symbol**: `MON`
- **Block Explorer**: [https://monadvision.com](https://monadvision.com)

---

## JSON-RPC Overview

Monad supports a standard JSON-RPC interface. While Monad aims to match the behavior of **Geth** as closely as possible, its unique architecture (including asynchronous execution and sub-second block times) introduces specific deviations.

### Supported Methods (Highlights)
| Method | Notes |
| :--- | :--- |
| `eth_blockNumber` | Returns the latest block number |
| `eth_call` | Subject to gas and state availability limits |
| `eth_getTransactionByHash` | **Does not return pending transactions** |
| `eth_sendRawTransaction` | Asynchronous validation behavior |
| `eth_maxPriorityFeePerGas` | Currently returns a hardcoded suggested value |
| `debug_traceTransaction` | Trace options object is **required** |
| `admin_ethCallStatistics` | **Monad-specific** |

---

## Differences from Ethereum

### 1. Transaction Lifecycle
* **Deferred Validation:** `eth_sendRawTransaction` may not immediately reject transactions with nonce gaps or insufficient balances. Because Monad uses asynchronous execution, the RPC server may accept transactions that only become valid during block creation.
* **Mempool Privacy:** `eth_getTransactionByHash` only returns transactions already included in a block. Querying a transaction still in the mempool will return `null`.

### 2. State Availability
* **Historical Data:** `eth_call` invocations referencing old state (historic block numbers) may fail. Full nodes do not provide access to arbitrary historic state by default.

### 3. Fee Estimation
* **Priority Fee:** `eth_maxPriorityFeePerGas` currently returns a hardcoded 2 gwei.
* **Fee History:** In `eth_feeHistory`, when `newest_block = latest`, the latest `baseFeePerGas` is returned twice as a projected value for the next block.

### 4. Debug / Tracing
* **Explicit Params:** Methods like `debug_traceCall` require the trace options object to be explicitly provided. Omitting it results in a `-32602 Invalid params` error. 
    * *Example:* Use `[..., "latest", {}]` even if the options are empty.
* **Default Tracer:** Monad defaults to `callTracer` when `{}` is provided. It does not currently support opcode-level struct logs at the VM level.

---

## Unsupported Features

| Feature | Details |
| :--- | :--- |
| **EIP-4844 (Blobs)** | Blob transaction types are currently rejected. |
| **"syncing" Sub** | `eth_subscribe("syncing")` is not supported. |
| **"newPendingTransactions"**| `eth_subscribe("newPendingTransactions")` is not supported. |

---

## Related Documentation

- [Introduction](/) - Overview of Monad Solonet
- [Getting Started](/docs/getting-started) - Spin up your local environment
- [High-Level Architecture](/docs/architecture) - How the execution layer works