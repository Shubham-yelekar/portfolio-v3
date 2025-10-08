import {
  YouTubeEmbed,
  ImageWrapper,
  ImageModal,
  MdxPre,
  Blockquote,
  ImageCarousal,
} from "@/components/mdx/embeded";
// components/MdxComponents.js

// A styled h1 component
export const H1 = ({ children }) => (
  <h1 className="my-8! text-3xl text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="my-6! text-2xl font-medium text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="my-5! text-xl font-medium text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4 className="my-4! text-lg font-medium text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h4>
);
export const H5 = ({ children }) => (
  <h5 className="my-3! text-base font-medium text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h5>
);
export const H6 = ({ children }) => (
  <h6 className="my-2! text-sm font-medium text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h6>
);

export const P = ({ children }) => (
  <p className="my-4 text-sm font-medium text-neutral-600 md:px-4! md:text-base dark:text-white">
    {children}
  </p>
);

export const A = (props) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 underline decoration-blue-600/50 hover:decoration-blue-600 dark:text-blue-400 dark:decoration-blue-400/50 dark:hover:decoration-blue-400"
    {...props}
  />
);

export const UL = ({ children }) => (
  <ul className="marker:text-color my-4 list-disc text-sm text-neutral-700 md:mx-2 md:text-base dark:text-neutral-300">
    {children}
  </ul>
);

export const OL = ({ children }) => (
  <ol className="mx-2 my-4 list-decimal px-4 text-sm text-neutral-700 md:text-base dark:text-neutral-300">
    {children}
  </ol>
);

export const LI = ({ children }) => (
  <li className="my-2 text-sm marker:text-neutral-500 md:text-base">
    {children}
  </li>
);

export const Break = () => (
  <div className="my-8 h-px w-full border-b-1 border-dashed border-neutral-300 md:border-b-2 dark:border-neutral-700"></div>
);

// ...add more components for ul, ol, li, blockquote, etc.
// Add to mdxComponents:
export const mdxComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  a: A,
  blockquote: Blockquote,
  ul: UL,
  ol: OL,
  li: LI,
  pre: MdxPre,
  YouTubeEmbed,
  ImageWrapper,
  ImageModal,
  hr: Break,
  ImageCarousal,
  // etc.
};
