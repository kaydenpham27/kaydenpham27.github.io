import React from "react";
import Typography from "./ui/typography";
import { Link } from "react-router";
import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GithubIcon";
import { cn } from "@/lib/utils";
import { BASE_URL } from "@/constants";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [focusSection, setFocusSection] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const navItems = [
    { to: "/", label: "KIEN'S LOG BOOK", section: "INTRO" },
    // { to: "/portfolio", label: "PORTFOLIO", section: "PORTFOLIO" },
    { to: "/blogs", label: "BLOGS", section: "BLOGS" },
    { to: "/projects", label: "PROJECTS", section: "PROJECTS" },
    { to: "/life", label: "LIFE", section: "LIFE" },
  ];

  return (
    <>
      <div className="bg-[#fff] text-[#4a4a4a] shadow-md">
        {/* Desktop Display */}
        <div className="hidden lg:flex flex-row mx-auto max-w-380 pl-[2rem] pr-[2rem] h-12 justify-between overflow-x-auto scrollbar-hidden">
          <div className="flex flex-row">
            <Link
              to="/"
              className="flex flex-col items-center justify-center px-3 cursor-pointer transition-colors hover:bg-gray-100"
              onClick={() => setFocusSection("")}
            >
              <img src={`${BASE_URL}/daffodils.png`} className="w-8" />
            </Link>
            {navItems.map((item) => {
              return (
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors",
                    focusSection === item.section ? "text-blue-600" : "",
                  )}
                  onClick={() => setFocusSection(item.section)}
                >
                  <Typography.Small className="font-semibold">
                    {item.label}
                  </Typography.Small>
                </Link>
              );
            })}
          </div>
          <div className="flex flex-row">
            <GitHubIcon width="30px" height="30px" />
            <LinkedInIcon width="30px" height="30px" />
          </div>
        </div>

        {/* Mobile Display */}
        <div className="flex flex-col lg:hidden mx-auto max-w-380 pl-[2rem] pr-[2rem]">
          <div className="flex flex-row w-full items-center justify-between h-12 px-3">
            <Link to="/" onClick={() => setFocusSection("")}>
              <img
                src={`${BASE_URL}/daffodils.png`}
                className="w-8"
                alt="Logo"
              />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="border-t border-gray-200 bg-white">
              <nav className="flex flex-col py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.section}
                    to={item.to}
                    className={cn(
                      "px-4 py-3 hover:bg-gray-100 hover:text-blue-600 transition-colors",
                      focusSection === item.section
                        ? "text-blue-600 bg-gray-50"
                        : "",
                    )}
                    onClick={() => {
                      setFocusSection(item.section);
                      setMobileMenuOpen(false);
                    }}
                  >
                    <Typography.Small className="font-semibold">
                      {item.label}
                    </Typography.Small>
                  </Link>
                ))}
              </nav>

              <div className="flex justify-center gap-4 py-4 border-t ">
                <GitHubIcon width="30px" height="30px" />
                <LinkedInIcon width="30px" height="30px" />
              </div>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="space-y-2 mx-auto max-w-380 pl-[2rem] pr-[2rem] pt-10 pb-10"
      >
        {children}
      </motion.div>
    </>
  );
};
