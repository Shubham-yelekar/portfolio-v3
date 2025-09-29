import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["three"],
  images: {
    remotePatterns: [new URL("https://ucarecdn.com/**")],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(glsl|vert|frag|vs|fs)$/,
      use: ["raw-loader"],
    });
    return config;
  },
  turbopack: {
    rules: {
      "*.{glsl,vert,frag,vs,fs}": {
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },

  experimental: {
    viewTransition: true,
  },
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md\mdx)$/,
});

export default withMDX(nextConfig);
