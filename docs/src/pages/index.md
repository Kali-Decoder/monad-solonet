---
title: Introduction
pageTitle: Monad Solonet | Local Monad Execution Environment
description: Monad Solonet is a fully containerized local execution environment for running complete Monad blockchain networks on your machine.
---

# Monad Solonet

**Monad Solonet** is a fully containerized local execution environment for running complete Monad blockchain networks on your machine. It allows developers to spin up a complete Monad network — including validators and full nodes — directly on their hardware.

Unlike traditional setups where you connect to an external network, Solonet lets you **create your own blockchain from genesis**, giving you full control over execution, state, and network behavior.

---

## 🎬 Demo Preview

<video width="100%" height="auto" controls autoplay loop muted playsinline>
  <source src="/assets/demo.mov" type="video/mp4" />
  Your browser does not support the video tag.
</video>

---

## Features

- **Official Binaries:** Uses `monad` official package and binaries.
- **Flexible Topology:** Supports **single-validator**, **multi-validators**, and custom network setups.
- **Cross-Platform:** Runs **natively on Linux** with Docker or on **macOS via an x86_64 Linux VM** (QEMU).
- **Genesis Config:** Uses the official [devnet](https://github.com/category-labs/monad/blob/main/category/execution/monad/chain/monad_devnet_alloc.hpp) genesis allocation configuration.
- **Ready-to-use RPC:** Exposes RPC endpoint at `http://localhost:8080`.
- **Auto-Config:** Automatic node configuration and validator staking.
- **Pre-installed Tooling:** Includes `forge`, `cast`, `staking-cli`, and `monad-status`.

---

## Solonet vs. Other Tools

| Category | Solonet | Public Full Node |
| :--- | :--- | :--- |
| **Concept** | Spin up a **NETWORK** | Spin up a **NODE** |
| **Purpose** | Local isolated network | Join mainnet/testnet |
| **Topology** | $n$ validators, $m$ fullnodes | Single node |
| **Use Case** | Functional testing, dev | Production-like usage |
| **State** | New chain, from genesis | Existing network, real chain state |
| **Network type** | devnet | mainnet/testnet |
| **Control** | Full control | Limited (network rules) |
| **Tokens** | Unlimited | Limited (MON, faucet) |
| **Protocol version** | monad_dev (latest features) | Current MONAD_REVISION |
| **Perf realism** | ❌ Not realistic | ✅ Realistic |
| **Storage** | Loopback (TrieDB) | Real disk |
| **CPU** | Throttled, no pinning | No artificial limits |
| **Env** | Docker | Host |
| **macOS ARM** | ✅ QEMU VM | ❌ Not supported |

---

## Runtime Notes

- **Epoch duration:** Set to `10,000` blocks, about 1 hour.
- **CPU Limits:** Monad processes are limited to `0.5` CPU to reduce host resource usage.
- **Storage:** TrieDB runs on a loopback disk stored inside the container.
- **Persistence:** Restarting containers preserves TrieDB data. Recreating containers resets TrieDB state.
- **Networking:** Static IP assignment is used to avoid DHCP drift and maintain stable node record signatures.

> [!CAUTION]
> **Disclaimer:** This project is intended for development and testing purposes only. **Do not use in production.**

---

## Use Cases

### Smart Contract Development
Test contracts in a controlled environment without waiting for testnet faucets or dealing with external RPC latency.

### Protocol & Validator Testing
Experiment with validator dynamics, staking-cli, and network behavior in a safe, reproducible sandbox.

### AI + Onchain Systems
Run autonomous agents and high-frequency bots interacting with blockchain logic using zero-latency local endpoints.

### Trading & MEV Simulation
Test complex strategies and backrun logic without real financial risk or competitive interference.

---

## High-Level Architecture

Solonet runs entirely inside Docker and includes:

1. **Execution Layer** → Monad EVM
2. **Network Layer** → Validator P2P communication
3. **Storage Layer** → TrieDB inside containerized loopback storage
4. **Tooling Layer** → Integrated `forge`, `cast`, and `staking-cli`

---

## How It Works

1. **Start the container:** Docker pulls the environment and sets up the network bridge.
2. **Initialize:** The network initializes from the official devnet genesis.
3. **Bootstrap:** Validators are configured and staked automatically.
4. **Expose:** The RPC endpoint is mapped to your localhost at port `8080`.
5. **Build:** Use the pre-installed tools to interact with your private Monad instance immediately.

---

Made with ❤️ for the Monad developer ecosystem