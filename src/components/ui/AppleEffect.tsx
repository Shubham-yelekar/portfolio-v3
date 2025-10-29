"use client";
import { motion } from "motion/react";
import cn from "@/app/lib/cn";
const initialProps = {
  pathLength: 0,
  opacity: 0,
} as const;
const animateProps = {
  pathLength: 1,
  opacity: 1,
} as const;
type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};
function AppleHelloVietnameseEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;
  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1009 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>xin chào</title>
      {/* x1 */}
      <motion.path
        d="M102.233 96.2277C75.6823 127.245 45.1612 158.759 11.4143 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeInOut",
          opacity: { duration: 0.15 },
        }}
      />
      {/* x2 */}
      <motion.path
        d="M7.69214 116.575C9.67725 105.16 16.8733 95.7311 28.5358 95.7311C40.4465 95.7311 46.8981 105.408 53.3497 124.019C56.7409 133.283 60.1322 142.547 63.5234 151.81C73.689 179.58 81.1988 191.513 100.855 191.513C128.722 191.513 154.043 159.148 161.595 118.502C162.929 111.321 164.774 103.736 166.043 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeInOut",
          delay: calc(0.4),
          opacity: { duration: 0.35, delay: calc(0.4) },
        }}
      />
      {/* i */}
      <motion.path
        d="M166.043 96.2273C163.191 113.101 160.565 126.997 158.92 139.404C157.989 147.592 157.544 154.54 157.596 161.488C157.729 179.354 164.764 191.513 182.695 191.513C209.39 191.513 236.181 159.123 243.73 118.5C245.064 111.321 247.012 103.759 248.139 96.2273"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(1),
          opacity: { duration: 0.25, delay: calc(1) },
        }}
      />
      {/* n1 */}
      <motion.path
        d="M248.139 96.2278C243.424 127.741 239.454 158.759 234.491 190.272"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(1.5),
          opacity: { duration: 0.15, delay: calc(1.5) },
        }}
      />
      {/* n2 */}
      <motion.path
        d="M237.873 167.951C244.704 121.32 265.508 94.2422 290.322 94.2422C307.692 94.2422 316.625 106.153 315.136 123.026C313.896 135.681 309.677 150.322 308.685 162.729C307.444 179.85 316.499 191.513 330.769 191.513C348.722 191.513 359.309 179.314 364.143 165.965"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.9),
          ease: "easeOut",
          delay: calc(1.8),
          opacity: { duration: 0.45, delay: calc(1.8) },
        }}
      />
      {/* c, h1 */}
      <motion.path
        d="M535.91 109.876C531.265 100.446 520.943 93.4984 505.459 93.4984C476.516 93.4984 462.044 117.816 462.044 143.374C462.044 171.503 482.265 192.506 511.307 192.506C559.762 192.506 592.902 136.708 621.581 97.8807C640.764 71.9101 649.874 49.2359 650.372 31.1674C650.62 17.7684 644.168 7.60362 632.01 7.60362C618.61 7.60362 610.173 17.7684 604.963 41.1011C599.255 66.7441 595.037 96.1684 584.367 190.521"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.1),
          ease: "easeInOut",
          delay: calc(2.6),
          opacity: { duration: 0.55, delay: calc(2.6) },
        }}
      />
      {/* h2 */}
      <motion.path
        d="M585.413 181.299C590.677 135.025 611.663 98.2125 638.213 98.2125C654.094 98.2125 664.187 110.868 661.321 128.982C659.708 139.652 656.794 152.059 655.128 164.217C653.102 179.602 658.89 191.513 676.813 191.513C702.178 191.513 717.375 164.077 725.613 135.196"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          ease: "easeInOut",
          delay: calc(3.6),
          opacity: { duration: 0.5, delay: calc(3.6) },
        }}
      />
      {/* a1 */}
      <motion.path
        d="M803.871 112.995C799.007 101.8 788.666 94.2423 772.207 94.2423C744.912 94.2423 724.398 121.538 723.052 150.818C721.878 177.617 734.244 192.681 751.857 192.505C776.858 192.255 795.234 167.699 803.437 115.742C804.449 109.332 805.498 102.638 806.51 96.2274"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeOut",
          delay: calc(4.6),
          opacity: { duration: 0.4, delay: calc(4.6) },
        }}
      />
      {/* a2, o */}
      <motion.path
        d="M806.51 96.2274C805.486 102.73 804.461 109.232 803.436 115.735C798.955 144.175 796.887 155.395 797.109 162.729C797.628 179.85 803.785 191.513 820.064 191.513C842.563 191.513 860.966 164.721 870.266 138.289C879.653 111.612 891.315 94.9867 915.633 94.9867C935.732 94.9867 951.613 109.875 951.613 137.915C951.613 168.932 931.489 192.257 906.059 192.505C883.681 192.753 868.983 174.639 870.471 147.344C872.208 117.071 890.571 94.9867 914.64 94.9867C928.536 94.9867 940.207 101.164 949.38 107.89C974.247 126.031 993.407 114.82 1000.74 96.8832"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1.5),
          ease: "easeOut",
          delay: calc(5.4),
          opacity: { duration: 0.75, delay: calc(5.4) },
        }}
      />
      {/* sign */}
      <motion.path
        className="stroke-yellow-400"
        d="M763.027 19.3039C768.734 34.6886 780.397 48.3362 792.059 55.5322"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          delay: calc(7),
          opacity: { duration: 0.4, delay: calc(7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}
function AppleHelloEnglishEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;
  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 638 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="14.8883"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>hello</title>
      {/* h1 */}
      <motion.path
        d="M8.69214 166.553C36.2393 151.239 61.3409 131.548 89.8191 98.0295C109.203 75.1488 119.625 49.0228 120.122 31.0026C120.37 17.6036 113.836 7.43883 101.759 7.43883C88.3598 7.43883 79.9231 17.6036 74.7122 40.9363C69.005 66.5793 64.7866 96.0036 54.1166 190.356"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />
      {/* h2, ello */}
      <motion.path
        d="M55.1624 181.135C60.6251 133.114 81.4118 98.0479 107.963 98.0479C123.844 98.0479 133.937 110.703 131.071 128.817C129.457 139.487 127.587 150.405 125.408 163.06C122.869 178.941 130.128 191.348 152.122 191.348C184.197 191.348 219.189 173.523 237.097 145.915C243.198 136.509 245.68 128.073 245.928 119.884C246.176 104.996 237.739 93.8296 222.851 93.8296C203.992 93.8296 189.6 115.17 189.6 142.465C189.6 171.745 205.481 192.341 239.208 192.341C285.066 192.341 335.86 137.292 359.199 75.8585C365.788 58.513 368.26 42.4065 368.26 31.1512C368.26 17.8057 364.042 7.55823 352.131 7.55823C340.469 7.55823 332.777 16.6141 325.829 30.9129C317.688 47.4967 311.667 71.4162 309.203 98.4549C303 166.301 316.896 191.348 349.936 191.348C390 191.348 434.542 135.534 457.286 75.6686C463.803 58.513 466.275 42.4065 466.275 31.1512C466.275 17.8057 462.057 7.55823 450.146 7.55823C438.484 7.55823 430.792 16.6141 423.844 30.9129C415.703 47.4967 409.682 71.4162 407.218 98.4549C401.015 166.301 414.911 191.348 444.416 191.348C473.874 191.348 489.877 165.67 499.471 138.402C508.955 111.447 520.618 94.8221 544.935 94.8221C565.035 94.8221 580.916 109.71 580.916 137.75C580.916 168.768 560.792 192.093 535.362 192.341C512.984 192.589 498.285 174.475 499.774 147.179C501.511 116.907 519.873 94.8221 543.943 94.8221C557.839 94.8221 569.51 100.999 578.682 107.725C603.549 125.866 622.709 114.656 630.047 96.7186"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(2.8),
          ease: "easeInOut",
          delay: calc(0.7),
          opacity: { duration: 0.7, delay: calc(0.7) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

function DesignEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;
  return (
    <motion.svg
      className={cn("h-28", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>& Designer</title>

      <motion.path
        d="M192.399 3.50415C170.91 7.41116 148.769 51.4735 133.142 67.1016C124.894 74.3368 102.843 78.8226 101.234 69.7062C99.9314 62.3263 104.272 59.5046 109.265 59.5046C118.616 59.5046 151.901 78.8589 171.011 74.978C171.819 74.8141 172.62 74.6685 173.433 74.5391C183.72 72.9025 201.075 62.9213 196.737 33.892C192.223 3.6778 155.497 4.51708 137.698 8.71349C128.169 10.6193 109.799 18.3505 110.68 34.2047C110.725 35.0063 110.884 35.8185 111.138 36.5798C117.21 54.7352 141.117 44.3252 148.985 24.1245"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(1.5),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
      {/* I */}
      <motion.path
        d="M212.364 55.1648C219.093 57.9865 231.899 47.3507 228.643 40.405C222.132 28.901 197.17 58.2035 203.898 68.8393C207.605 74.6998 219.31 71.2271 229.945 60.1571C239.062 50.6674 249.264 38.8424 249.264 34.3276C249.264 28.6842 243.186 35.8468 244.054 38.4515C244.896 40.9774 254.516 52.8938 248.168 68.2614C247.766 69.2329 247.229 70.1576 246.432 70.8419C244.731 72.3004 241.563 74.0488 237.108 74.0488C231.378 74.0488 230.597 68.8393 231.465 66.2348C233.853 64.4983 232.42 67.7974 238.845 69.7075C247.527 72.2887 260.247 69.0564 268.582 58.6378"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(2.5),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
      <circle
        cx={282.69}
        cy={35.4121}
        r={2.07289}
        stroke="black"
        fill="black"
        strokeWidth={2.80002}
      />
      {/* G */}
      <motion.path
        d="M277.266 44.0946C272.854 50.7131 264.312 65.3117 267.131 68.267C267.224 68.3648 267.345 68.431 267.474 68.4712C272.092 69.9067 281.035 61.5618 286.6 53.428C292.967 42.5752 307.481 24.82 314.6 40.6217"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(3),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
      <motion.path
        d="M285.511 55.381c-2.677 4.414-6.425 13.37 0 13.892 5.547.45 16.885-10.824 23.931-18.85.633-.72 1.825-.049 1.508.858-8.223 23.523-26.528 63.986-43.238 60.318-12.155-3.907-5.169-20.634 8.288-29.099 6.947-4.37 31.908-8.341 42.501-4 10.592 4.341 18.233 9.985 20.837 12.806"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(3.5),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
      {/* N */}
      <motion.path
        d="M328.758 36c0 6.145-4.758 18.5-12.758 32 12.758-13.565 22.845-29.5 30.5-29.5 11.5 0-14.5 28-10 29.5 2.5.833 8.7-.6 13.5-3"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(4.5),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
      {/* ER */}
      <motion.path
        d="M365.457 58.035c7-4.167 16.5-11.5 15.586-17.092-3.5-7.408-20.586 4.592-24.5 18-3.588 14.092 9.37 12.404 18.957 6.057 7.413-4.908 27.571-24.557 25-29.057-1.5-2.625-7.643 0-8 5-.25 3.5 2.486 4.308 16.086 1.908C406.086 47.351 391.5 66 398.5 67.5c7 1.5 12.5-5.5 16-9.465"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(5.5),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />

      {/* & */}
      <motion.path
        d="M3 36.5911C17.1667 34.5911 59.0999 20.1911 67.5 10.5912C77.125 -0.40862 48.5 -1.41642 33.5 23.0837C25.1578 36.7094 33.5 48.0837 56.5 41.0913C64.5 38.6592 60.5 33.965 52 36.0837C42 38.5763 16.0218 50.1065 12 65.0913C6.5 85.5837 39.2918 81.0761 58 69.0837C64.5 64.9171 74.8548 54.5837 79.5 45.5837C84.1452 36.5837 74.5 43.5 67.5 53.5C60.5 63.5 52.8952 72 43 96"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(1),
          delay: calc(0.8),
          ease: "easeInOut",
          opacity: { duration: 1 },
        }}
      />
    </motion.svg>
  );
}

function NotesScribble({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  return (
    <motion.svg
      className={cn("text-neutral-400 dark:text-neutral-600", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="11"
      viewBox="0 0 65 11"
      fill="none"
      strokeWidth="8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      {...props}
    >
      <motion.path
        d="M1 7.00011C3.33333 5.33344 11.4 1.50011 13 1.50011C11.5 3.50011 5.5 8.50011 10 8.00011C13.6 7.60011 22.5 -0.49989 22 1.50011C18.5 5.00011 16.8 9.30011 22 6.50011C25.5 4.61549 28 2.50011 33.5 1.00012C28 5.00012 28.5 9.00011 34 6.50011C37.6667 4.83344 40.2 3.50012 41 3.50012C38.5 6.50011 37 10.0001 45.5 6.50011L53 3.00012C51.1667 5.33346 48.4 9.80013 52 9.00012C55.6 8.20011 61.1667 6.00012 63.5 5.00012"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />
    </motion.svg>
  );
}
function ProjectsScribble({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  return (
    <motion.svg
      className={cn("text-neutral-400 dark:text-neutral-600", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="83"
      height="16"
      viewBox="0 0 83 16"
      fill="none"
      strokeWidth="8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      {...props}
    >
      <motion.path
        d="M1 5.50185C15.3333 2.99542 51.6 -1.1468 82 2.33583C63 3.49994 23 3.85515 10.5 8.99994C24 8.99994 63.5 5.89762 75 8.27214C62 8.99994 47 10.9999 32 14.4999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />
    </motion.svg>
  );
}

function LabScribble({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  return (
    <motion.svg
      className={cn("text-neutral-400 dark:text-neutral-600", className)}
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="9"
      viewBox="0 0 56 9"
      fill="none"
      strokeWidth="8"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      {...props}
    >
      <motion.path
        d="M1 6.96787C3.61947 7.19564 8.5 6.96787 11.5 1.00014C14.5 6.96787 22.5 8.00014 25.5 1.00014C29 8.50014 38.5 6.96787 41 1.00014C44.5 6.96787 50 9.00012 55 1.00012"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: 1,
          delay: 0.4,
          ease: "easeInOut",
          opacity: { duration: 0.4 },
        }}
      />
    </motion.svg>
  );
}
export {
  AppleHelloEnglishEffect,
  AppleHelloVietnameseEffect,
  DesignEffect,
  NotesScribble,
  ProjectsScribble,
  LabScribble,
};
