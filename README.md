# 🚦 loadBalancers

> Load balancing with NGINX and Docker.

This is me learning system design by building everything from the ground up. No shortcuts. No frameworks. Just containers, routing, and a real understanding of how traffic flows through a distributed system.

---

## 🧠 What I'm Exploring

- How NGINX works as a load balancer
- How Docker containers can scale services horizontally
- How to simulate load and watch how it's distributed
- How to trace requests across multiple services

---

## 🛠️ Tech Stack

| Tool                    | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| **NGINX**               | Load balancer                              |
| **Express**             | Lightweight backend service                |
| **Docker**              | Containerization                           |
| **Docker Compose**      | Multi-container orchestration              |
| **VS Code REST Client** | Fire off fake traffic (no frontend needed) |

---

## 🏗️ Project Structure

```
src/
  api/
    index.js         # Simple Express app used in all backend containers
nginx/
  default.conf       # NGINX config — you write this
docker-compose.yml   # Docker orchestration — also yours
.gitignore
.dockerignore
README.md
```

---

## 🚀 How to Run

```bash
# Build and start everything
docker-compose up --build

# Test with VS Code REST client or just curl
curl http://localhost:8080
```

You should see responses coming from different backend containers, proving that NGINX is load balancing across them.

---

## 🧪 What’s Next

- Add simulated latency to some backends
- Trace requests with timestamps and request IDs
- Explore different NGINX load balancing strategies (round robin, IP-hash, etc)
- Add observability (maybe Prometheus + Grafana)
- Migrate to Kubernetes via k3d once the fundamentals are strong

---

## 📚 Why This Exists

Most devs jump straight into Kubernetes or managed load balancers without truly understanding what's under the hood. This repo is my attempt to _slow down_, _zoom in_, and _learn how real systems behave_ — starting from zero.
