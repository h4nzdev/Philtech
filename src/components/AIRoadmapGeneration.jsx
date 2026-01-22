import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp, Flag, Brain, Briefcase } from "lucide-react";

// Main Component
const AIRoadmapGeneration = () => {
  const [progress, setProgress] = useState(0);
  const [percentageText, setPercentageText] = useState("Calculating...");
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Simulate progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + Math.random() * 10, 95);

        // Update percentage text
        if (next < 25) setPercentageText("Analyzing skills...");
        else if (next < 50) setPercentageText("Mapping career paths...");
        else if (next < 75) setPercentageText("Personalizing roadmap...");
        else if (next < 90) setPercentageText("Finalizing recommendations...");
        else setPercentageText("Almost complete...");

        return next;
      });
    }, 300);

    // Simulate completion and transition
    const completionTimer = setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      setPercentageText("Complete!");

      // After completion, you could navigate to next page
      setTimeout(() => setShow(false), 1500);
    }, 8500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(completionTimer);
    };
  }, []);

  // Container variants for stagger animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const floatVariants = {
    float: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const pulseRingVariants = {
    pulse: {
      scale: [0.8, 1, 0.8],
      opacity: [0.5, 0.3, 0.5],
      transition: {
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  const spinVariants = {
    spin: {
      rotate: 360,
      transition: {
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  const progressBarVariants = {
    initial: { width: "0%" },
    animate: {
      width: `${progress}%`,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="min-h-screen bg-white font-sans text-gray-900 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Background gradients */}
          <div className="fixed inset-0 pointer-events-none">
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#EA580C]/15 from-0% to-transparent to-50%"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
            <motion.div
              className="absolute inset-0 bg-gradient-radial from-[#663399]/15 from-100% to-transparent to-50%"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </div>

          <main className="relative h-screen w-full flex flex-col items-center justify-center px-6">
            {/* Animated circles and center element */}
            <motion.div className="relative mb-12 flex items-center justify-center">
              {/* Pulse ring 1 */}
              <motion.div
                className="absolute w-64 h-64 bg-[#663399]/10 rounded-full"
                variants={pulseRingVariants}
                animate="pulse"
              />

              {/* Pulse ring 2 */}
              <motion.div
                className="absolute w-48 h-48 bg-[#EA580C]/10 rounded-full"
                variants={pulseRingVariants}
                animate="pulse"
                initial={{ scale: 0.8, opacity: 0.5 }}
                transition={{ delay: 1 }}
              />

              {/* Center floating element */}
              <motion.div
                className="relative w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center"
                variants={floatVariants}
                animate="float"
              >
                {/* Spinning border */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-[#663399]/20 border-t-[#663399]"
                  variants={spinVariants}
                  animate="spin"
                />
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.5 }}
                >
                  <Briefcase className="size-16 text-gray-900 drop-shadow-sm" />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Text content */}
            <motion.div
              className="text-center max-w-md space-y-4"
              variants={itemVariants}
            >
              <motion.h1
                className="text-3xl font-extrabold tracking-tight text-gray-900"
                variants={itemVariants}
              >
                Generating Your Custom Career Roadmap...
              </motion.h1>
              <motion.p
                className="text-gray-500 font-medium leading-relaxed"
                variants={itemVariants}
              >
                Analyzing your skills and goals to build the perfect path for
                your professional growth.
              </motion.p>
            </motion.div>

            {/* Processing indicator */}
            <motion.div
              className="mt-8 flex flex-col items-center gap-2"
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-[#FDFCFB] rounded-full border border-gray-200">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="size-4 text-[#663399]" />
                </motion.div>
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
                  Processing Data Model
                </span>
              </div>
            </motion.div>

            {/* Progress section */}
            <div className="fixed bottom-0 left-0 w-full p-12 bg-gradient-to-t from-white via-white/80 to-transparent">
              <div className="max-w-[800px] mx-auto">
                <motion.div
                  className="flex justify-between items-center mb-4"
                  variants={itemVariants}
                >
                  <span className="text-sm font-bold text-gray-900">
                    Overall Progress
                  </span>
                  <motion.span
                    className="text-sm font-bold text-[#663399]"
                    key={percentageText}
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {percentageText}
                  </motion.span>
                </motion.div>

                <div className="h-3 w-full bg-[#EEF2FF] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#663399] rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                    variants={progressBarVariants}
                    initial="initial"
                    animate="animate"
                  />
                </div>

                <motion.div
                  className="mt-6 flex justify-center gap-8 opacity-40"
                  variants={itemVariants}
                >
                  {[
                    { icon: Brain, text: "Skill Mapping" },
                    { icon: TrendingUp, text: "Market Analysis" },
                    { icon: Flag, text: "Goal Alignment" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 0.4, y: 0 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      whileHover={{ opacity: 1, scale: 1.05 }}
                    >
                      <item.icon className="size-5" />
                      <span className="text-xs font-semibold">{item.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </main>

          {/* Footer */}
          <motion.footer
            className="fixed bottom-4 left-0 w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <p className="text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
              Secure AI Processing • CareerDev Intelligence v2.4
            </p>
          </motion.footer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AIRoadmapGeneration;
