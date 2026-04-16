---
title: "Monad Solonet Documentation"
description: "Run a full Monad blockchain locally. Monad Solonet is a containerized development environment that lets you spin up complete networks with validators, custom state, and full control — directly on your machine."
---

## Why Monad Solonet Exists

Blockchain development today is often constrained by external dependencies:

- Public RPC latency  
- Limited faucet tokens  
- Lack of control over network state  
- Difficulty testing complex systems like MEV, AI agents, or multi-validator logic  

Monad Solonet solves this by giving developers a **fully local, reproducible blockchain environment**.

- **Solonet is not just a node**
- **It is a full blockchain network running locally**
- **It starts from genesis with complete control**

Instead of relying on external infrastructure, you can simulate everything yourself.

---

## Run Your Own Blockchain Network Locally

Monad Solonet allows you to spin up:

- Validators  
- Full nodes  
- Custom network configurations  
- Genesis-based fresh state  

All inside Docker.

```mermaid
flowchart LR
    Dev[Developer] --> Docker[Docker Environment]
    Docker --> Net[Monad Network]
    Net --> Val[Validators]
    Net --> RPC[RPC Endpoint]
    RPC --> Apps[dApps / Contracts / Agents]

    classDef green fill:#0f2e1c,stroke:#4ade80,color:#dcfce7,stroke-width:2px;
    classDef blue fill:#0b1f3a,stroke:#60a5fa,color:#dbeafe,stroke-width:2px;

    class Dev,Docker green;
    class Net,Val,RPC,Apps blue;