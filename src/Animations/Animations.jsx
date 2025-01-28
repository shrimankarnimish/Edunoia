"use client";
import React from "react";
import { motion } from "framer-motion";

const animDuration = 0.8;

// fade in
export function Fadein({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}

// fade in up
export function Fadeinup({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

// fade in Down
export function Fadeindown({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}

// fade in Left
export function Fadeinleft({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}

// fade in Right
export function Fadeinright({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}

// fade in Down Sagger
export function Fadeindownstagger({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: animDuration }}
    >
      {children}
    </motion.div>
  );
}
