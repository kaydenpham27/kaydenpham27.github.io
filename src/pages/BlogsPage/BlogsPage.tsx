import { motion } from "motion/react";

export const BlogsPage = () => {
  // TODO: Use state here to load content and pass it down to NavBar and Content
  // Receives blogs from S3 bucket as static content, use React query to handle this,
  // pass content into ContentCard and NavSideBar
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-row flex-wrap items-center gap-2"
    ></motion.div>
  );
};
