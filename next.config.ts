import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
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

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.(md\mdx)$/,
});

export default withMDX(nextConfig);
