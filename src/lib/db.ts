import { Redis } from "@upstash/redis";
import "dotenv/config";

export const db = new Redis({
  url: 'https://destined-parakeet-38275.upstash.io',
  token: "AZWDASQgNjlkZjVhMWUtYmU3Mi00ZGQ4LTg5MjEtZGIxNzEzZjEzMDAyODAxN2FhOWMwNTA4NGNmY2IyMjY1MWRkNGI2ZTBiM2U=",
  // url: process.env.UPSTASH_REDIS_REST_URL!,
  // token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});
