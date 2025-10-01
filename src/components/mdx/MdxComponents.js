// components/MdxComponents.js

// A styled h1 component
export const H1 = ({ children }) => (
  <h1 className="my-4 px-4 text-3xl text-neutral-800! dark:text-neutral-200!">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="my-4 px-4 text-2xl text-slate-900 dark:text-white">
    {children}
  </h2>
);

export const P = ({ children }) => (
  <p className="my-4 px-4 text-base font-medium text-neutral-600 dark:text-white">
    {children}
  </p>
);

// ...add more components for ul, ol, li, blockquote, etc.
// Add to mdxComponents:
export const mdxComponents = {
  h1: H1,
  h2: H2,
  p: P,
  // etc.
};
