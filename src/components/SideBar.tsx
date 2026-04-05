import React from "react";
import Typography from "./ui/typography";
import { useNavigate } from "react-router";
import { LinkedInIcon } from "./LinkedInIcon";
import { GitHubIcon } from "./GithubIcon";
import { cn } from "@/lib/utils";
import { BASE_URL } from "@/constants";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

export const SideBar = ({ children }: { children: React.ReactNode }) => {
  const [focusSection, setFocusSection] = React.useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const navItems = [
    { to: "/", label: "KIEN'S LOG BOOK", section: "INTRO" },
    // { to: "/portfolio", label: "PORTFOLIO", section: "PORTFOLIO" },
    { to: "/blogs", label: "BLOGS", section: "BLOGS" },
    { to: "/projects", label: "PROJECTS", section: "PROJECTS" },
    { to: "/life", label: "LIFE", section: "LIFE" },
  ];

  return (
    <div className="w-full min-w-0">
      <div className="w-full bg-[#fff] text-[#4a4a4a] shadow-md">
        {/* Desktop Display */}
        <div className="mx-auto hidden h-12 w-full max-w-380 flex-row justify-between overflow-x-auto pl-[2rem] pr-[2rem] scrollbar-hidden lg:flex">
          <div className="flex flex-row">
            <button
              type="button"
              className="flex flex-col items-center justify-center px-3 cursor-pointer transition-colors hover:bg-gray-100 bg-transparent border-none"
              style={{ background: "none", border: "none" }}
              onClick={() => {
                setFocusSection("");
                navigate("/");
              }}
            >
              <img
                src={`${BASE_URL}/daffodils.png`}
                className="w-8"
                alt="Site logo"
              />
            </button>
            {navItems.map((item) => {
              return (
                <button
                  key={item.section}
                  type="button"
                  className={cn(
                    "flex items-center px-3 cursor-pointer hover:bg-gray-100 hover:text-blue-600 transition-colors bg-transparent border-none",
                    focusSection === item.section ? "text-blue-600" : "",
                  )}
                  style={{ background: "none", border: "none" }}
                  onClick={() => {
                    setFocusSection(item.section);
                    navigate(item.to);
                  }}
                >
                  <Typography.Small className="font-semibold">
                    {item.label}
                  </Typography.Small>
                </button>
              );
            })}
          </div>
          <div className="flex flex-row">
            <GitHubIcon width="30px" height="30px" />
            <LinkedInIcon width="30px" height="30px" />
          </div>
        </div>

        {/* Mobile Display */}
        <div className="mx-auto flex w-full max-w-380 flex-col pl-[2rem] pr-[2rem] lg:hidden">
          <div className="flex flex-row w-full items-center justify-between h-12 px-3">
            <button
              type="button"
              style={{ background: "none", border: "none" }}
              onClick={() => {
                setFocusSection("");
                navigate("/");
              }}
            >
              <img
                src={`${BASE_URL}/daffodils.png`}
                className="w-8"
                alt="Site logo"
              />
            </button>

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
                  <button
                    key={item.section}
                    type="button"
                    className={cn(
                      "px-4 py-3 hover:bg-gray-100 hover:text-blue-600 transition-colors text-left w-full bg-transparent border-none",
                      focusSection === item.section
                        ? "text-blue-600 bg-gray-50"
                        : "",
                    )}
                    style={{ background: "none", border: "none" }}
                    onClick={() => {
                      setFocusSection(item.section);
                      setMobileMenuOpen(false);
                      navigate(item.to);
                    }}
                  >
                    <Typography.Small className="font-semibold">
                      {item.label}
                    </Typography.Small>
                  </button>
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
        className="mx-auto w-full max-w-380 space-y-2 pl-[2rem] pr-[2rem] pt-10 pb-10"
      >
        {children}
      </motion.div>
    </div>
  );
};
