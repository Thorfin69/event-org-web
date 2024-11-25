import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);

    return () => window.removeEventListener("mousemove", updateCursorPosition);
  }, []);

  return (
    <motion.div
      className="custom-cursor hidden md:block"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "30px",
        height: "30px",
        borderRadius: "50%",
        backgroundColor: "gray",
        pointerEvents: "none",
        zIndex: 9999,
        
      }}
      animate={{
        x: cursorPosition.x - 10, // Center the cursor
        y: cursorPosition.y - 10,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
        mass: 3,
      }}
      
    />
  );
};

export default CustomCursor;
