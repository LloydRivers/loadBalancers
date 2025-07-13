import http from "k6/http";
import { sleep, check } from "k6";
import { Counter } from "k6/metrics";

export const requests = new Counter("http_reqs");

export const options = {
  scenarios: {
    spike_test: {
      executor: "constant-arrival-rate",
      rate: 10,
      timeUnit: "1s",
      duration: "30s",
      preAllocatedVUs: 50,
      maxVUs: 100,
      exec: "spikeTest",
    },
  },
};

export function spikeTest() {
  let res = http.get("http://load-balancer");
  check(res, {
    "status is 200": (r) => r.status === 200,
  });
  sleep(1);
}
