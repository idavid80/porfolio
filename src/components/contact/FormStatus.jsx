import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles/FormStatus.css";

export default function FormStatus({ status, onClose }) {
  if (!status) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className={`status-toggle ${status.type}`}
      >
        <span>{status.message}</span>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
