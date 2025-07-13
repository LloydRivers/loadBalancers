# 🚦 loadBalancers

> Load balancing with NGINX and Docker.

This is me learning system design by building everything from the ground up. No shortcuts. No frameworks. Just containers, routing, and a real understanding of how traffic flows through a distributed system.

---

## 🧠 What I'm Exploring

- How NGINX works as a load balancer
- How Docker containers can scale services horizontally
- How to simulate load and watch how it's distributed
- How to trace requests across multiple services
- How to build system intuition before diving into Kubernetes

---

## 🛠️ Tech Stack

| Tool                    | Purpose                                    |
| ----------------------- | ------------------------------------------ |
| **NGINX**               | Load balancer                              |
| **Express**             | Lightweight backend service                |
| **Docker**              | Containerization                           |
| **Docker Compose**      | Multi-container orchestration              |
| **VS Code REST Client** | Fire off fake traffic (no frontend needed) |
| **k6**                  | Load testing via spike tests               |

---

## 🏗️ Project Structure

```
src/
  api/
    index.js                # Simple Express app used in all backend containers
  nginx/
    default.conf           # NGINX config — you write this
  k6/
    spike.js               # Spike load test script
    README.md              # Explains what's going on with the test
docker-compose.yml         # Main Docker orchestration file
docker-compose.spike.yml   # Extra Compose file just for k6 spike testing
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

## 💣 Run a Spike Test with k6

Once your system is up and running, you can stress test it using k6, a load testing tool from Grafana Labs.

From inside src/api

```bash
npm run spike:test
```

This command uses a dedicated Docker Compose file to:

- Launch a `k6` container that runs a spike test script
- Simulate a burst of HTTP traffic to your NGINX load balancer
- Print performance metrics like response time, throughput, and error rate

Results appear in your terminal in real-time — it's like watching your system sweat.

Test config lives in `k6/spike.js`. You can customize it to simulate other scenarios (ramp-up load, soak tests, etc).

## 🧪 What's Next

- Add simulated latency to some backends
- Trace requests with timestamps and request IDs
- Explore different NGINX load balancing strategies (round robin, IP-hash, etc)
- Add observability (maybe Prometheus + Grafana)
- Migrate to Kubernetes via k3d once the fundamentals are strong

## 📚 Why This Exists

Most devs jump straight into Kubernetes or managed load balancers without truly understanding what's under the hood. This repo is my attempt to _slow down_, _zoom in_, and _learn how real systems behave_ — starting from zero.
