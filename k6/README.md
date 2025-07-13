# k6 Spike Test

This folder contains a spike test using [k6](https://k6.io/) to simulate heavy traffic against the NGINX load balancer.

## Purpose

To stress-test our load-balanced architecture by simulating a traffic spike, ensuring all backend services can handle concurrent load.

## How It Works

- The `spike.js` test simulates a burst of requests.
- Test is configured in a separate Docker Compose file for isolation.
- Metrics are printed directly to the terminal.

## Run the Spike Test

From the src/api folder (where the package.json file is) run:

```bash
npm run spike:test
```
