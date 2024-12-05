"use client";
import useSidebar from "hooks/useSidebar";
import { motion } from "framer-motion";

export default function CustomerDashboardSidebar() {
  const [isCollapsed, setIsCollapsed] = useSidebar();

  const handleSidebarClick = () => {
    if (window.innerWidth < 768) setIsCollapsed(true);
  };

  if (isCollapsed) return null;

  return (
    <motion.div
      className="dashboard__sidebar__wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={handleSidebarClick}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -300, // Start off-screen to the left
        }}
        animate={{
          opacity: 1,
          x: 0, // Slide to the center (visible position)
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut", // Smooth animation
        }}
        className="dashboard__sidebar"
      >
        <div className="dashboard__sidebar__content">
          <div className="dashboard__sidebar__content__item">Dashboard</div>
          <div className="dashboard__sidebar__content__item">Order History</div>
          <div className="dashboard__sidebar__content__item">Profile</div>
        </div>
      </motion.div>
    </motion.div>
  );
}
