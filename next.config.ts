import os from "node:os";
import path from "node:path";
import type { NextConfig } from "next";

function lanDevOrigins(): string[] {
  const ips = new Set<string>();
  for (const iface of Object.values(os.networkInterfaces())) {
    for (const net of iface ?? []) {
      if (net.family === "IPv4" && !net.internal) {
        ips.add(net.address);
      }
    }
  }
  return [...ips];
}

const nextConfig: NextConfig = {
  // Next.js 16 blocks /_next/* from non-localhost origins in dev.
  // Without this, the phone gets HTML/CSS but no JavaScript.
  allowedDevOrigins: lanDevOrigins(),
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
