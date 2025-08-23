import { cn } from "@/utils/cn";
import { ReactNode } from "react";

type ContentProps = {
  children: ReactNode;
  className?: string;
  startDirection?: "left" | "right" | "top";
};
function Content({ children, className }: ContentProps) {
  return (
    <div className={cn("max-w-(--breakpoint-xl) mx-auto px-4 py-12 ", className)}>
      {children}
    </div>
  );
}

export default Content;

// import { cn } from "@/utils/cn";
// import { ReactNode } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// type ContentProps = {
//   children: ReactNode;
//   className?: string;
//   startDirection: "left" | "right" | "top";
// };
// function Content({
//   startDirection = "top",
//   children,
//   className,
// }: ContentProps) {
//   const { ref, inView } = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//     delay: 0,
//   });

//   // Determine initial position based on startDirection
//   const initialPosition = () => {
//     switch (startDirection) {
//       case "left":
//         return { x: -50, y: 0 }; // Slide in from left
//       case "right":
//         return { x: 50, y: 0 }; // Slide in from right
//       case "top":
//         return { x: 0, y: -50 }; // Slide in from top
//       default:
//         return { x: 0, y: 0 };
//     }
//   };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, ...initialPosition() }} // Set initial based on direction
//       animate={inView ? { opacity: 1, x: 0, y: 0 } : {}} // Animate to final position
//       transition={{ duration: 0.8, ease: "easeOut", delay: 0, bounce: 0.5 }} // Smooth transition
//       className={cn("max-w-(--breakpoint-xl) mx-auto px-4 py-12 md:py-24", className)}
//     >
//       {children}
//     </motion.div>
//   );
// }

// export default Content;
