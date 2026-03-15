import { motion } from 'motion/react';

export default function Sparkle({ className, size = 24, color = "#a78bfa" }: { className?: string, size?: number, color?: string }) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 180],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <path
        d="M12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0Z"
        fill={color}
      />
    </motion.svg>
  );
}
