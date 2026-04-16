---
title: "Getting Started"
description: "Run your first Monad Solonet network locally and start building."
---

# Getting Started

Welcome to **Monad Solonet** 🚀

Bootstrap a complete Monad network and run your own blockchain locally, fully containerized and reproducible. This guide will walk you through setting up your environment, running a full Monad network locally, interacting with it via RPC, and deploying and testing smart contracts.

---

## Quick Start Paths

| Goal | Path | Time |
|:-----|:-----|:-----|
| Run network instantly | Docker run | ~2 min |
| Custom setup | Docker Compose | ~5–10 min |
| Multi-validator testing | Compose config | ~10 min |
| Start building contracts | RPC + Foundry | ~15 min |

---

## Step 1: Prerequisites

### Required System Specifications
- **Operating System:** Linux on x86_64 machine (see [macOS Preparation](#prepare-docker-linux-vm-on-macos-apple-silicon) for Apple Silicon).
- **Docker:** [docker](https://get.docker.com) installed and running.
- **Hardware:** - 4 CPU Cores (minimum)
  - 16GB RAM
- **Tested Environments:** - Amazon EC2 instance `m8a.xlarge`.
  - MacBook Pro, M4 Max, 48 GB memory.

---

## Prepare Docker Linux VM on macOS (Apple Silicon)

Since Monad binaries target **x86_64**, macOS ARM requires a Linux x86_64 virtual machine running Docker.

### 1. Install VM Tools
Install [Lima](https://lima-vm.io) and [Colima](https://colima.run) via Homebrew:
```sh
brew install lima colima lima-additional-guestagents
```

## Run Monad Solonet networks

Requirements:
- Linux on x86_64 machine (see [instructions below](#prepare-docker-linux-vm-on-macos-apple-silicon) for macOS)
- [docker](https://get.docker.com) installed
- 4 CPU and 16GB memory
- Tested on Amazon EC2 instance `m8a.xlarge`.

1. Clone the repository
```sh
git clone https://github.com/monad-developers/monad-docker-solonet.git
cd monad-docker-solonet
```

2. Start the network

Start a single-validator network:
```sh
docker compose up --build
```

Start a multi-validators network:
```sh
docker compose -f networks/multi-validators.yaml up --build
```

Start a full-components network:
```sh
docker compose -f networks/full-network.yaml up --build
```

### Reset and teardown

Stop and remove containers, including volumes:
```sh
docker compose -f NETWORK_FILE down --volumes
```

## Prepare Docker Linux VM on macOS (Apple Silicon)

Since Monad binaries target x86_64, macOS ARM requires a Linux x86_64 virtual machine running Docker.

Requirements:
- Apple macOS
- [Homebrew](https://brew.sh) installed
- Tested on MacBook Pro, M4 Max, 48 GB memory

1. Install [Lima](https://lima-vm.io) and [Colima](https://colima.run):
```sh
brew install lima colima lima-additional-guestagents
```

2. Start the virtual machine with:
```sh
colima start --arch x86_64 --cpu-type max --cpu 8 --memory 16 --disk 300 --foreground
```

3. Verify the docker context:
```sh
docker info
```

Expected output should include:
```
 Architecture: x86_64
 CPUs: 8
 Total Memory: 15.61GiB
 Name: colima
```

### Reset and teardown

To completely remove the VM and all associated data:
```sh
colima delete --data
```
