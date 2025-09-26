import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  // webpack: (config) => {

  //   config.module.rules.push({
  //     test: /\.(glsl|vs|fs|vert|frag)$/,
  //     exclude: /node_modules/,
  //     use: ["raw-loader", "glslify-loader"],
  //   });
  //   return config;
  // },

  experimental: {
    turbo: {
      // useSwcCss: true,
      rules: {
        "*.{glsl,vs,fs,vert,frag}": {
          loaders: ["raw-loader"],
          as: "*.js",
        },
      },
    },
  },
};

export default nextConfig;
