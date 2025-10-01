// components/MdxComponents.js

// A styled h1 component
export const H1 = ({ children }) => (
  <h1 className="my-4 px-4 text-3xl text-neutral-800! dark:text-neutral-200!">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="my-4 px-4 text-2xl font-medium text-neutral-800! dark:text-neutral-200!">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="my-4 px-4 text-xl font-medium text-neutral-800! dark:text-neutral-200!">
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4 className="my-4 px-4 text-lg font-medium text-neutral-800! dark:text-neutral-200!">
    {children}
  </h4>
);
export const H5 = ({ children }) => (
  <h4 className="text-md my-4 px-4 font-medium text-neutral-800! dark:text-neutral-200!">
    {children}
  </h4>
);
export const H6 = ({ children }) => (
  <h4 className="my-4 px-4 text-sm font-medium text-neutral-800! dark:text-neutral-200!">
    {children}
  </h4>
);

export const P = ({ children }) => (
  <p className="my-4 px-4 text-base font-medium text-neutral-600 dark:text-white">
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

export const Blockquote = ({ children }) => (
  <blockquote className="font-libre! my-4 border-l-4 border-neutral-500 bg-neutral-50 py-2 pl-2 text-4xl text-neutral-800! italic dark:bg-neutral-900 dark:text-neutral-300">
    {children}
  </blockquote>
);
export const UL = ({ children }) => (
  <ul className="mx-2 my-4 list-disc text-neutral-700 dark:text-neutral-300">
    {children}
  </ul>
);

export const OL = ({ children }) => (
  <ol className="mx-2 my-4 list-decimal px-4 text-neutral-700 dark:text-neutral-300">
    {children}
  </ol>
);

export const LI = ({ children }) => <li className="my-2">{children}</li>;

export const Code = ({ children }) => (
  <code className="rounded bg-neutral-200 px-2 py-1 font-mono text-sm dark:bg-neutral-800">
    {children}
  </code>
);

export const Pre = ({ children }) => (
  <pre className="my-4 overflow-x-auto rounded bg-neutral-100 p-4 dark:bg-neutral-900">
    {children}
  </pre>
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
  code: Code,
  pre: Pre,
  // etc.
};
