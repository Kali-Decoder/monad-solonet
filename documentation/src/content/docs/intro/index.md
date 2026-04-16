---
title: "Introduction"
description: "Monad Solonet is a fully containerized local execution environment for running complete Monad blockchain networks on your machine."
---

# Monad Solonet Documentation

**Monad Solonet** is a fully containerized local execution environment for running complete Monad blockchain networks on your machine.

---


## What is Monad Solonet?

Monad Solonet is a local blockchain sandbox that allows developers to spin up a complete Monad network — including validators and full nodes — directly on their machine.

Unlike traditional setups where you connect to an external network, Solonet lets you **create your own blockchain from genesis**, giving you full control over execution, state, and network behavior.


## 🎬 Demo Preview

<video controls autoplay loop muted playsinline width="100%">
  <source src="https://github.com/user-attachments/assets/4e2fb3cb-cd05-4544-8f89-30eb0675cc20" type="video/mp4" />
  Your browser does not support the video tag.
</video>

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
| **Topology** | n validators, m fullnodes | Single node |
| **Use Case** | Functional testing, dev | Production-like usage |
| **State** | New chain, from genesis | Existing network, real chain state |
| **Network type** | devnet | mainnet/testnet |
| **Control** | Full control | Limited (network rules) |
| **Tokens** | Unlimited | Limited (MON, faucet) |
| **Protocol version** | monad_dev (latest features) | Current MONAD_REVISION |
| **Perf realism** | ❌ Not realistic | ✅ Realistic |
| **Storage** | Loopback (TrieDB) | Real disk |
| **CPU** | Throttled, no pinning | No artificial limits |
| **Binary** | Dev/custom setup | Official/supported binaries |
| **Env** | Docker | Host |
| **macOS ARM** | ✅ QEMU VM | ❌ Not supported |

---

## Runtime Notes

- **Epoch duration:** Set to `10_000` blocks, about 1 hour.
- **CPU Limits:** Monad processes are limited to `0.5` CPU to reduce host resource usage.
- **Storage:** TrieDB runs on a loopback disk stored inside the container.
- **Persistence:** Restarting containers preserves TrieDB data. Recreating containers resets TrieDB state.
- **Networking:** Static IP assignment is used to avoid DHCP drift and maintain stable node record signatures.

_**Disclaimer:** This project is intended for development and testing purposes only. **Do not use in production.**_

---

## Use Cases

- **Smart Contract Development:** Test contracts in a controlled, isolated environment.
- **Protocol Development:** Experiment with validators and network behavior.
- **AI + Onchain Systems:** Run autonomous agents interacting with blockchain logic.
- **Trading & MEV Simulation:** Test strategies without real financial risk.
- **Hackathons & Demos:** Quick setup without dependency issues.

---

## High-Level Architecture

Solonet runs entirely inside Docker and includes:
1. **Execution Layer** → Monad EVM
2. **Network Layer** → Validator communication
3. **Storage Layer** → TrieDB inside container
4. **Tooling Layer** → `forge`, `cast`, `staking-cli`

## How It Works

1. Start the container.
2. Network initializes from genesis.
3. Validators are configured automatically.
4. RPC endpoint is exposed.
5. You start building immediately.