import {
  YouTubeEmbed,
  ImageWrapper,
  ImageModal,
  MdxPre,
  Blockquote,
  ImageCarousal,
  ImageCompare,
  VideoWrapper,
  MobileVideoWrapper,
  ComponentBox,
} from "@/components/mdx/embeded";
// components/MdxComponents.js
// Lab Componenets
import TextCursor from "../ui/TextCursor";
import LinkHover from "../ui-components/button-collection/LinkHover";
import ShinyButton from "../ui-components/button-collection/ShinyButton";
import WavingFlag from "../ui/WavingFlag";
import AppleKeyboard from "../ui-components/AppleKeyboard";

// A styled h1 component
export const H1 = ({ children }) => (
  <h1 className="text-libre! mt-8! mb-6! text-3xl text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="font-libre! mt-6! mb-4! text-2xl text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="font-libre! mt-4! mb-2! text-xl font-normal! text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4 className="font-libre! my-4! text-lg font-normal! text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h4>
);
export const H5 = ({ children }) => (
  <h5 className="font-libre! my-3! text-base font-normal! text-neutral-800! md:px-4! dark:text-neutral-200!">
    {children}
  </h5>
);
export const H6 = ({ children }) => (
  <h6 className="font-libre! my-2! text-sm font-normal! text-neutral-800! md:px-4! dark:text-neutral-200!">
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
  <ul className="my-2 list-disc text-sm text-neutral-700 md:my-5 md:text-base dark:text-neutral-300">
    {children}
  </ul>
);

export const OL = ({ children }) => (
  <ol className="my-2 list-decimal text-sm text-neutral-700 md:my-5 md:text-base dark:text-neutral-300">
    {children}
  </ol>
);

export const LI = ({ children }) => (
  <li className="text-sm text-neutral-600 marker:text-neutral-500 md:text-base dark:dark:text-neutral-400">
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
  MobileVideoWrapper,
  ImageCarousal,
  ImageCompare,
  VideoWrapper,
  ComponentBox,
  // etc.

  TextCursor,
  LinkHover,
  ShinyButton,
  WavingFlag,
  AppleKeyboard,
};
